/** @type {import("next").NextConfig} */
import withBundleAnalyzer from "@next/bundle-analyzer"

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})

const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
}

export default bundleAnalyzer(nextConfig)
