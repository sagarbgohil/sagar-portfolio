const BASE = "https://www.sagargohil.dev";

const metadata = {
  issuer: BASE,
  authorization_endpoint: `${BASE}/oauth/authorize`,
  token_endpoint: `${BASE}/oauth/token`,
  userinfo_endpoint: `${BASE}/oauth/userinfo`,
  jwks_uri: `${BASE}/.well-known/jwks`,
  scopes_supported: ["openid", "profile", "email"],
  response_types_supported: ["code"],
  grant_types_supported: ["authorization_code", "client_credentials"],
  subject_types_supported: ["public"],
  id_token_signing_alg_values_supported: ["EdDSA"],
  token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt"],
  code_challenge_methods_supported: ["S256"],
  claims_supported: ["sub", "iss", "name", "email"],
};

export async function GET() {
  return Response.json(metadata, {
    headers: {
      "Cache-Control": "public, max-age=3600",
    },
  });
}
