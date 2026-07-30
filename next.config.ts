import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.10.3", "192.168.10.8", "192.168.10.10","172.23.224.1","172.20.64.1","172.19.160.1","172.19.160.1"],
};

export default withPayload(nextConfig);