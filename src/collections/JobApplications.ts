import type { CollectionConfig } from "payload";

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function relationshipID(value: unknown): string | number | null {
  if (typeof value === "string" || typeof value === "number") return value;

  if (
    value &&
    typeof value === "object" &&
    "id" in value &&
    (typeof value.id === "string" || typeof value.id === "number")
  ) {
    return value.id;
  }

  return null;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function linkLine(label: string, value: string) {
  return `${label}: ${value || "Not provided"}`;
}

export const JobApplications: CollectionConfig = {
  slug: "job-applications",

  admin: {
    useAsTitle: "fullName",
    defaultColumns: ["fullName", "job", "email", "status", "createdAt"],
    group: "Careers",
  },

  access: {
    create: () => true,
    read: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },

  fields: [
    {
      name: "job",
      type: "relationship",
      relationTo: "job-positions",
      required: true,
      label: "Position Applied For",
      admin: { position: "sidebar" },
    },
    {
      name: "fullName",
      type: "text",
      required: true,
      label: "Full Name",
    },
    {
      name: "email",
      type: "email",
      required: true,
      label: "Email Address",
    },
    {
      name: "whatsapp",
      type: "text",
      required: true,
      label: "WhatsApp Number",
    },
    {
      name: "location",
      type: "text",
      required: true,
      label: "Current City / Country",
    },
    {
      name: "linkedin",
      type: "text",
      required: true,
      label: "LinkedIn Profile Link",
    },
    {
      name: "github",
      type: "text",
      label: "GitHub / Code Portfolio Link",
    },
    {
      name: "portfolio",
      type: "text",
      label: "Portfolio / Work Sample Link",
    },
    {
      name: "availability",
      type: "select",
      required: true,
      label: "Weekly Availability",
      options: [
        { label: "5–10 hours per week", value: "5-10-hours" },
        { label: "10–15 hours per week", value: "10-15-hours" },
        { label: "15–20 hours per week", value: "15-20-hours" },
        { label: "20+ hours per week", value: "20-plus-hours" },
      ],
    },
    {
      name: "whyJoin",
      type: "textarea",
      required: true,
      label: "Why do you want to join DevHatch Labs?",
    },
    {
      name: "resume",
      type: "upload",
      relationTo: "applicant-documents" as any,
      label: "CV / Resume",
      admin: {
        description: "Optional CV uploaded by the applicant.",
      },
    },
    {
      name: "unpaidAcknowledgement",
      type: "checkbox",
      required: true,
      label: "Internship Terms Acknowledged",
      admin: {
        description:
          "Applicant confirmed the initial internship is unpaid and may lead to project-based earnings or future opportunities.",
      },
    },
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "new",
      options: [
        { label: "New", value: "new" },
        { label: "Reviewing", value: "reviewing" },
        { label: "Shortlisted", value: "shortlisted" },
        { label: "Interview", value: "interview" },
        { label: "Accepted", value: "accepted" },
        { label: "Rejected", value: "rejected" },
      ],
      admin: { position: "sidebar" },
    },
    {
      name: "internalNotes",
      type: "textarea",
      label: "Internal Notes",
      admin: { position: "sidebar" },
    },
    {
      name: "source",
      type: "select",
      defaultValue: "website",
      label: "Application Source",
      options: [
        { label: "DevHatch Labs Careers Page", value: "website" },
        { label: "LinkedIn", value: "linkedin" },
        { label: "Referral", value: "referral" },
        { label: "Other", value: "other" },
      ],
      admin: { position: "sidebar" },
    },
  ],

  hooks: {
    beforeChange: [
      async ({ data, operation, req }) => {
        if (operation !== "create") return data;

        const incoming = data as Record<string, unknown>;
        const jobID = relationshipID(incoming.job);

        if (!jobID) {
          throw new Error("Please choose a valid job position.");
        }

        const job = await req.payload.findByID({
          collection: "job-positions",
          id: jobID,
          depth: 0,
        });

        if (job.status !== "open") {
          throw new Error(
            "This role is no longer accepting applications. Please return to the Careers page.",
          );
        }

        return data;
      },
    ],

    afterChange: [
      async ({ doc, operation, req }) => {
        if (operation !== "create") return doc;

        const application = doc as Record<string, unknown>;
        const jobID = relationshipID(application.job);
        const fullName = text(application.fullName) || "Unknown applicant";
        const email = text(application.email);
        const whatsapp = text(application.whatsapp) || "Not provided";
        const location = text(application.location) || "Not provided";
        const linkedin = text(application.linkedin);
        const github = text(application.github);
        const portfolio = text(application.portfolio);
        const availability = text(application.availability) || "Not provided";
        const whyJoin = text(application.whyJoin) || "Not provided";
        const resumeUploaded = Boolean(application.resume);

        let jobTitle = "DevHatch Labs role";

        try {
          if (jobID) {
            const job = await req.payload.findByID({
              collection: "job-positions",
              id: jobID,
              depth: 0,
            });
            jobTitle = job.title;
          }
        } catch (error) {
          console.error("Could not load job title for application email:", error);
        }

        const careersInbox =
          process.env.CAREERS_NOTIFICATION_EMAIL || "devhatchlabs@gmail.com";

        const notificationText = `
New DevHatch Labs career application

Position: ${jobTitle}
Name: ${fullName}
Email: ${email}
WhatsApp: ${whatsapp}
Location: ${location}
${linkLine("LinkedIn", linkedin)}
${linkLine("GitHub", github)}
${linkLine("Portfolio", portfolio)}
Availability: ${availability}
CV uploaded: ${resumeUploaded ? "Yes — available in Payload Admin" : "No"}

Why they want to join:
${whyJoin}
        `.trim();

        const notificationHtml = `
          <div style="margin:0;padding:24px;background:#F6F9FF;font-family:Arial,sans-serif;color:#061A45;">
            <div style="max-width:700px;margin:0 auto;overflow:hidden;border:1px solid #B7D1FF;border-radius:18px;background:#FFFFFF;">
              <div style="padding:26px 30px;background:linear-gradient(135deg,#061A45,#1769FF);">
                <p style="margin:0;color:#BBD9FF;font-size:11px;font-weight:700;letter-spacing:1.6px;">DEVHATCH LABS · CAREERS</p>
                <h1 style="margin:10px 0 0;color:#FFFFFF;font-size:25px;">New Career Application</h1>
              </div>
              <div style="padding:30px;">
                <p style="margin:0 0 20px;color:#61708A;line-height:1.6;">A new application was submitted through the DevHatch Labs Careers page.</p>
                <div style="margin:0 0 20px;padding:14px 16px;border:1px solid #B7D1FF;border-radius:12px;background:#EEF5FF;">
                  <p style="margin:0;color:#1769FF;font-size:11px;font-weight:700;letter-spacing:1px;">POSITION APPLIED FOR</p>
                  <p style="margin:5px 0 0;color:#061A45;font-size:18px;font-weight:700;">${escapeHtml(jobTitle)}</p>
                </div>
                <table style="width:100%;border-collapse:collapse;font-size:14px;">
                  <tr><td style="padding:9px 0;width:165px;color:#61708A;font-weight:700;">Name</td><td style="padding:9px 0;">${escapeHtml(fullName)}</td></tr>
                  <tr><td style="padding:9px 0;color:#61708A;font-weight:700;">Email</td><td style="padding:9px 0;"><a href="mailto:${escapeHtml(email)}" style="color:#1769FF;text-decoration:none;">${escapeHtml(email)}</a></td></tr>
                  <tr><td style="padding:9px 0;color:#61708A;font-weight:700;">WhatsApp</td><td style="padding:9px 0;">${escapeHtml(whatsapp)}</td></tr>
                  <tr><td style="padding:9px 0;color:#61708A;font-weight:700;">Location</td><td style="padding:9px 0;">${escapeHtml(location)}</td></tr>
                  <tr><td style="padding:9px 0;color:#61708A;font-weight:700;">LinkedIn</td><td style="padding:9px 0;">${linkedin ? `<a href="${escapeHtml(linkedin)}" style="color:#1769FF;">Open profile</a>` : "Not provided"}</td></tr>
                  <tr><td style="padding:9px 0;color:#61708A;font-weight:700;">GitHub</td><td style="padding:9px 0;">${github ? `<a href="${escapeHtml(github)}" style="color:#1769FF;">Open profile</a>` : "Not provided"}</td></tr>
                  <tr><td style="padding:9px 0;color:#61708A;font-weight:700;">Portfolio</td><td style="padding:9px 0;">${portfolio ? `<a href="${escapeHtml(portfolio)}" style="color:#1769FF;">Open work</a>` : "Not provided"}</td></tr>
                  <tr><td style="padding:9px 0;color:#61708A;font-weight:700;">Availability</td><td style="padding:9px 0;">${escapeHtml(availability)}</td></tr>
                  <tr><td style="padding:9px 0;color:#61708A;font-weight:700;">CV / Resume</td><td style="padding:9px 0;">${resumeUploaded ? "Uploaded — view in Payload Admin." : "Not uploaded"}</td></tr>
                </table>
                <div style="margin-top:22px;padding:17px;border-radius:12px;background:#F6F9FF;">
                  <p style="margin:0 0 8px;color:#1769FF;font-size:11px;font-weight:700;letter-spacing:1px;">WHY THEY WANT TO JOIN</p>
                  <p style="margin:0;color:#061A45;line-height:1.7;">${escapeHtml(whyJoin).replace(/\n/g, "<br />")}</p>
                </div>
                <p style="margin:22px 0 0;color:#61708A;font-size:12px;">Reply to this email to contact the applicant. Full details and the optional CV are available in Payload Admin → Careers → Job Applications.</p>
              </div>
            </div>
          </div>
        `;

        try {
          await req.payload.sendEmail({
            to: careersInbox,
            replyTo: email,
            subject: `New Career Application — ${fullName} / ${jobTitle}`,
            text: notificationText,
            html: notificationHtml,
          });
        } catch (error) {
          console.error("Career manager notification failed:", error);
        }

        try {
          await req.payload.sendEmail({
            to: email,
            subject: `We received your application — ${jobTitle}`,
            text: `Hi ${fullName},\n\nThank you for applying for the ${jobTitle} role at DevHatch Labs. We have received your application and our team will review it. If your profile is a match, we will contact you using the details you provided.\n\nBest,\nDevHatch Labs\nBuild Smarter. Scale Faster.`,
            html: `
              <div style="margin:0;padding:24px;background:#F6F9FF;font-family:Arial,sans-serif;color:#061A45;">
                <div style="max-width:640px;margin:0 auto;overflow:hidden;border:1px solid #B7D1FF;border-radius:18px;background:#FFFFFF;">
                  <div style="padding:25px 28px;background:linear-gradient(135deg,#061A45,#1769FF);">
                    <p style="margin:0;color:#BBD9FF;font-size:11px;font-weight:700;letter-spacing:1.6px;">DEVHATCH LABS · CAREERS</p>
                    <h1 style="margin:10px 0 0;color:#FFFFFF;font-size:24px;">Application received</h1>
                  </div>
                  <div style="padding:28px;">
                    <p style="margin:0;color:#061A45;font-size:16px;font-weight:700;">Hi ${escapeHtml(fullName)},</p>
                    <p style="margin:16px 0 0;color:#61708A;line-height:1.7;">Thank you for applying for the <strong>${escapeHtml(jobTitle)}</strong> role at DevHatch Labs.</p>
                    <p style="margin:14px 0 0;color:#61708A;line-height:1.7;">We have received your application and our team will review it. If your profile is a match, we will contact you using the details you provided.</p>
                    <p style="margin:24px 0 0;color:#061A45;line-height:1.6;">Best,<br /><strong>DevHatch Labs</strong><br /><span style="color:#1769FF;">Build Smarter. Scale Faster.</span></p>
                  </div>
                </div>
              </div>
            `,
          });
        } catch (error) {
          console.error("Applicant confirmation email failed:", error);
        }

        return doc;
      },
    ],
  },
};
