const BASE = "https://www.sagargohil.dev";

const metadata = {
  resource: `${BASE}/api/internal`,
  authorization_servers: [`${BASE}`],
  jwks_uri: `${BASE}/.well-known/jwks`,
  scopes_supported: ["openid", "profile", "email"],
  bearer_methods_supported: ["header"],
  resource_signing_alg_values_supported: ["EdDSA"],
};

export async function GET() {
  return Response.json(metadata, {
    headers: {
      "Cache-Control": "public, max-age=3600",
    },
  });
}
