# auth.md — sagargohil.dev

Agent registration and authentication guide for sagargohil.dev APIs.

```json agent_auth
{
  "issuer": "https://www.sagargohil.dev",
  "skill": "https://www.sagargohil.dev/.well-known/agent-skills/auth-md/SKILL.md",
  "register_uri": "https://www.sagargohil.dev/oauth/register",
  "authorization_endpoint": "https://www.sagargohil.dev/oauth/authorize",
  "token_endpoint": "https://www.sagargohil.dev/oauth/token",
  "jwks_uri": "https://www.sagargohil.dev/.well-known/jwks",
  "claims_uri": "https://www.sagargohil.dev/oauth/userinfo",
  "revocation_uri": "https://www.sagargohil.dev/oauth/revoke",
  "supported_identity_types": ["jwk", "did"],
  "credential_types": ["bearer_token"],
  "scopes_supported": ["openid", "profile", "email"],
  "grant_types_supported": ["authorization_code", "client_credentials"],
  "code_challenge_methods_supported": ["S256"]
}
```

## Registration Flow

Complete these steps to register and authenticate as an agent:

### Step 1 — Register your agent

```http
POST https://www.sagargohil.dev/oauth/register
Content-Type: application/json

{
  "client_name": "<your-agent-name>",
  "identity_type": "jwk",
  "public_key": {
    "kty": "OKP",
    "crv": "Ed25519",
    "x": "<your-base64url-public-key>"
  }
}
```

Response:

```json
{
  "client_id": "<issued-client-id>",
  "client_secret": "<issued-client-secret>"
}
```

### Step 2 — Obtain an access token

```http
POST https://www.sagargohil.dev/oauth/token
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials
&client_id=<client-id>
&client_secret=<client-secret>
&scope=openid profile email
```

Response:

```json
{
  "access_token": "<bearer-token>",
  "token_type": "Bearer",
  "expires_in": 3600
}
```

### Step 3 — Call protected APIs

```http
GET https://www.sagargohil.dev/api/internal/<path>
Authorization: Bearer <access-token>
```

### Step 4 — Revoke token when done

```http
POST https://www.sagargohil.dev/oauth/revoke
Content-Type: application/x-www-form-urlencoded

token=<access-token>
```

## Supported Identity Types

- `jwk` — Ed25519 or RSA JSON Web Key
- `did` — Decentralized Identifier

## Credential Types

- `bearer_token` — OAuth 2.0 bearer token (`Authorization: Bearer <token>`)

## Scopes

| Scope | Description |
| --- | --- |
| `openid` | OpenID Connect identity |
| `profile` | Basic profile information |
| `email` | Email address |

## Contact

Agent access questions: [connect@sagargohil.dev](mailto:connect@sagargohil.dev)
