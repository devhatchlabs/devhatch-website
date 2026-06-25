import type { CollectionConfig } from "payload";

const serviceLabels: Record<string, string> = {
  "ai-chatbot": "AI Chatbot",
  "agentic-ai": "Agentic AI System",
  "rag-application": "RAG Application",
  "ai-automation": "AI Automation",
  "custom-software": "Custom Software",
  "web-application": "Web Application",
  other: "Other / Not Sure Yet",
};

const budgetLabels: Record<string, string> = {
  "under-500": "Under $500",
  "500-1500": "$500 – $1,500",
  "1500-5000": "$1,500 – $5,000",
  "5000-plus": "$5,000+",
  discuss: "Let's Discuss",
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export const Leads: CollectionConfig = {
  slug: "leads",

  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "email", "service", "status", "createdAt"],
    group: "Sales",
  },

  access: {
    create: () => true,
    read: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },

  fields: [
    {
      name: "name",
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
      name: "company",
      type: "text",
      label: "Company / Organization",
    },
    {
      name: "service",
      type: "select",
      label: "Service Needed",
      options: [
        {
          label: "AI Chatbot",
          value: "ai-chatbot",
        },
        {
          label: "Agentic AI System",
          value: "agentic-ai",
        },
        {
          label: "RAG Application",
          value: "rag-application",
        },
        {
          label: "AI Automation",
          value: "ai-automation",
        },
        {
          label: "Custom Software",
          value: "custom-software",
        },
        {
          label: "Web Application",
          value: "web-application",
        },
        {
          label: "Other / Not Sure Yet",
          value: "other",
        },
      ],
    },
    {
      name: "budget",
      type: "select",
      label: "Estimated Budget",
      options: [
        {
          label: "Under $500",
          value: "under-500",
        },
        {
          label: "$500 – $1,500",
          value: "500-1500",
        },
        {
          label: "$1,500 – $5,000",
          value: "1500-5000",
        },
        {
          label: "$5,000+",
          value: "5000-plus",
        },
        {
          label: "Let's Discuss",
          value: "discuss",
        },
      ],
    },
    {
      name: "message",
      type: "textarea",
      required: true,
      label: "Project Details",
      admin: {
        description:
          "The client's message about what they want to build, improve, or automate.",
      },
    },
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "new",
      options: [
        {
          label: "New",
          value: "new",
        },
        {
          label: "Contacted",
          value: "contacted",
        },
        {
          label: "Qualified",
          value: "qualified",
        },
        {
          label: "Closed",
          value: "closed",
        },
        {
          label: "Not Interested",
          value: "not-interested",
        },
      ],
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "internalNotes",
      type: "textarea",
      label: "Internal Notes",
      admin: {
        position: "sidebar",
        description: "Private notes for the DevHatch Labs team.",
      },
    },
    {
      name: "source",
      type: "select",
      label: "Lead Source",
      defaultValue: "website",
      options: [
        {
          label: "Website Contact Form",
          value: "website",
        },
        {
          label: "WhatsApp",
          value: "whatsapp",
        },
        {
          label: "LinkedIn",
          value: "linkedin",
        },
        {
          label: "Referral",
          value: "referral",
        },
        {
          label: "Other",
          value: "other",
        },
      ],
      admin: {
        position: "sidebar",
      },
    },
  ],

  hooks: {
    afterChange: [
      async ({ doc, operation, req }) => {
        // Only send a notification for new website contact-form leads.
        if (operation !== "create" || doc.source !== "website") {
          return doc;
        }

        const name = doc.name || "Unknown visitor";
        const email = doc.email || "Not provided";
        const company = doc.company || "Not provided";
        const service = doc.service
          ? serviceLabels[doc.service] || doc.service
          : "Not selected";
        const budget = doc.budget
          ? budgetLabels[doc.budget] || doc.budget
          : "Not selected";
        const message = doc.message || "No project details provided";

        try {
          await req.payload.sendEmail({
            to:
              process.env.CONTACT_NOTIFICATION_EMAIL ||
              "hello@devhatchlabs.com",
            replyTo: email,
            subject: `New Project Inquiry — ${name}`,
            text: `
New project inquiry received from the DevHatch Labs website.

Name: ${name}
Email: ${email}
Company: ${company}
Service Needed: ${service}
Estimated Budget: ${budget}

Project Details:
${message}
            `.trim(),
            html: `
              <div style="margin:0;padding:24px;background:#F6F9FF;font-family:Arial,sans-serif;color:#061A45;">
                <div style="max-width:680px;margin:0 auto;background:#FFFFFF;border:1px solid #D9E6FA;border-radius:18px;overflow:hidden;">
                  <div style="padding:26px 30px;background:linear-gradient(135deg,#061A45,#1769FF);">
                    <p style="margin:0;color:#BBD9FF;font-size:11px;font-weight:700;letter-spacing:1.6px;">
                      DEVHATCH LABS
                    </p>
                    <h1 style="margin:10px 0 0;color:#FFFFFF;font-size:25px;">
                      New Project Inquiry
                    </h1>
                  </div>

                  <div style="padding:30px;">
                    <p style="margin:0 0 22px;color:#61708A;line-height:1.6;">
                      A new lead has been submitted through the DevHatch Labs contact form.
                    </p>

                    <table style="width:100%;border-collapse:collapse;font-size:14px;">
                      <tr>
                        <td style="padding:11px 0;width:165px;color:#61708A;font-weight:700;">Name</td>
                        <td style="padding:11px 0;color:#061A45;">${escapeHtml(name)}</td>
                      </tr>
                      <tr>
                        <td style="padding:11px 0;color:#61708A;font-weight:700;">Email</td>
                        <td style="padding:11px 0;color:#061A45;">${escapeHtml(email)}</td>
                      </tr>
                      <tr>
                        <td style="padding:11px 0;color:#61708A;font-weight:700;">Company</td>
                        <td style="padding:11px 0;color:#061A45;">${escapeHtml(company)}</td>
                      </tr>
                      <tr>
                        <td style="padding:11px 0;color:#61708A;font-weight:700;">Service</td>
                        <td style="padding:11px 0;color:#061A45;">${escapeHtml(service)}</td>
                      </tr>
                      <tr>
                        <td style="padding:11px 0;color:#61708A;font-weight:700;">Budget</td>
                        <td style="padding:11px 0;color:#061A45;">${escapeHtml(budget)}</td>
                      </tr>
                    </table>

                    <div style="margin-top:24px;padding:18px;background:#F6F9FF;border-radius:12px;">
                      <p style="margin:0 0 8px;color:#1769FF;font-size:11px;font-weight:700;letter-spacing:1px;">
                        PROJECT DETAILS
                      </p>
                      <p style="margin:0;color:#061A45;line-height:1.7;">
                        ${escapeHtml(message).replace(/\n/g, "<br />")}
                      </p>
                    </div>

                    <p style="margin:24px 0 0;color:#61708A;font-size:12px;">
                      Reply to this email to contact the person who submitted the inquiry.
                    </p>
                  </div>
                </div>
              </div>
            `,
          });
        } catch (error) {
          console.error("Contact-form notification email failed:", error);
        }

        return doc;
      },
    ],
  },
};