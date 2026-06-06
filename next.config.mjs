/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["drh6po6q1h65p.cloudfront.net"],
    minimumCacheTTL: 86400,
    imageSizes: [16, 32, 48, 64, 96, 128, 160, 200, 256, 300, 384],
  },
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Link",
            value: [
              '</.well-known/api-catalog>; rel="api-catalog"',
              '</docs/api>; rel="service-doc"',
            ].join(", "),
          },
        ],
      },
      {
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
