const BASE = "https://www.sagargohil.dev";

const metadata = {
  issuer: BASE,
  authorization_endpoint: `${BASE}/oauth/authorize`,
  token_endpoint: `${BASE}/oauth/token`,
  jwks_uri: `${BASE}/.well-known/jwks`,
  scopes_supported: ["openid", "profile", "email"],
  response_types_supported: ["code"],
  grant_types_supported: ["authorization_code", "client_credentials"],
  token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt"],
  code_challenge_methods_supported: ["S256"],
  revocation_endpoint: `${BASE}/oauth/revoke`,
  agent_auth: {
    skill: `${BASE}/.well-known/agent-skills/auth-md/SKILL.md`,
    register_uri: `${BASE}/oauth/register`,
    auth_md_uri: `${BASE}/auth.md`,
    supported_identity_types: ["jwk", "did"],
    credential_types: ["bearer_token"],
    claims_uri: `${BASE}/oauth/userinfo`,
    revocation_uri: `${BASE}/oauth/revoke`,
  },
};

export async function GET() {
  return Response.json(metadata, {
    headers: {
      "Cache-Control": "public, max-age=3600",
    },
  });
}
