# Auth.md Agent Registration Skill

This skill enables AI agents to discover and use the agent registration flow for sagargohil.dev.

## Skill Metadata

```json
{
  "name": "auth-md",
  "version": "1.0.0",
  "type": "auth",
  "description": "Agent registration and authentication via auth.md for sagargohil.dev",
  "site": "https://www.sagargohil.dev"
}
```

## Registration Flow

1. Fetch `/auth.md` for the full agent_auth metadata block
2. POST to `register_uri` with your agent identity (JWK or DID)
3. Exchange credentials at `token_endpoint` for a bearer token
4. Use the bearer token in `Authorization: Bearer <token>` on API calls
5. Revoke tokens at `revocation_uri` when done

## Machine-Readable Metadata

Full agent_auth metadata is available at:
- `/.well-known/oauth-authorization-server` — `agent_auth` block
- `/auth.md` — embedded `json agent_auth` fenced block

## Endpoints

| Field                  | Value                                                        |
|------------------------|--------------------------------------------------------------|
| `register_uri`         | https://www.sagargohil.dev/oauth/register                    |
| `token_endpoint`       | https://www.sagargohil.dev/oauth/token                       |
| `revocation_uri`       | https://www.sagargohil.dev/oauth/revoke                      |
| `claims_uri`           | https://www.sagargohil.dev/oauth/userinfo                    |
| `jwks_uri`             | https://www.sagargohil.dev/.well-known/jwks                  |

## Supported Identity Types

- `jwk` — Ed25519 or RSA JSON Web Key
- `did` — Decentralized Identifier

## Credential Types

- `bearer_token` — OAuth 2.0 bearer token
