import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.10.3", "192.168.10.8", "192.168.10.10"],
};

export default withPayload(nextConfig);