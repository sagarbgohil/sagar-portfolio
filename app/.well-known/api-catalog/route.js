const BASE = "https://www.sagargohil.dev";

const catalog = {
  linkset: [
    {
      anchor: `${BASE}/api/internal`,
      "service-doc": [
        {
          href: `${BASE}/#hire-us`,
          type: "text/html",
        },
      ],
      status: [
        {
          href: `${BASE}/api/status`,
          type: "application/json",
        },
      ],
    },
  ],
};

export async function GET() {
  return Response.json(catalog, {
    headers: {
      "Content-Type": "application/linkset+json",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
