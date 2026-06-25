import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.10.7", "192.168.10.8"],
};

export default withPayload(nextConfig);