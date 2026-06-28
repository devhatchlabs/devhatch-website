import { notFound } from "next/navigation";
import { getPayload } from "payload";
import config from "../../../../../payload.config";
import ApplicationForm from "@/components/careers/ApplicationForm";

export const dynamic = "force-dynamic";

type ApplyPageProps = {
  searchParams: Promise<{
    job?: string | string[];
  }>;
};

export default async function ApplyPage({ searchParams }: ApplyPageProps) {
  const params = await searchParams;
  const jobID = Array.isArray(params.job) ? params.job[0] : params.job;

  if (!jobID) {
    notFound();
  }

  const payload = await getPayload({ config });

  try {
    const job = await payload.findByID({
      collection: "job-positions",
      id: jobID,
      depth: 0,
    });

    if (!job || job.status !== "open") {
      notFound();
    }

    return (
      <ApplicationForm
        job={{
          id: String(job.id),
          title: job.title,
          department: job.department,
          employmentType: job.employmentType,
          workMode: job.workMode,
          location: job.location,
        }}
      />
    );
  } catch {
    notFound();
  }
}
