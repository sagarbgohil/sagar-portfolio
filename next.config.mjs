/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["drh6po6q1h65p.cloudfront.net"],
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
              "</docs/api>; rel=\"service-doc\"",
            ].join(", "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
