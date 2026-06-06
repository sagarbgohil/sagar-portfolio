const BASE = "https://www.sagargohil.dev";

const metadata = {
  issuer: BASE,
  authorization_endpoint: `${BASE}/oauth/authorize`,
  token_endpoint: `${BASE}/oauth/token`,
  jwks_uri: `${BASE}/.well-known/jwks`,
  scopes_supported: ["openid", "profile", "email"],
  response_types_supported: ["code"],
  grant_types_supported: ["authorization_code", "client_credentials"],
  token_endpoint_auth_methods_supported: [
    "client_secret_post",
    "private_key_jwt",
  ],
  code_challenge_methods_supported: ["S256"],
  revocation_endpoint: `${BASE}/oauth/revoke`,
  agent_auth: {
    skill:
      "https://isitagentready.com/.well-known/agent-skills/auth-md/SKILL.md",
    register_uri: `${BASE}/oauth/register`,
    identity_types_supported: ["identity_assertion", "anonymous"],
    identity_assertion: {
      assertion_types_supported: [
        "urn:ietf:params:oauth:token-type:id-jag",
        "verified_email",
      ],
      credential_types_supported: ["bearer_token"],
      claim_uri: `${BASE}/oauth/userinfo`,
    },
    anonymous: {
      credential_types_supported: ["bearer_token"],
      claim_uri: `${BASE}/oauth/userinfo`,
    },
    revocation_uri: `${BASE}/oauth/revoke`,
    events_supported: ["token_revocation"],
  },
};

export async function GET() {
  return Response.json(metadata, {
    headers: {
      "Cache-Control": "public, max-age=3600",
    },
  });
}
