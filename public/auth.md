# auth.md — sagargohil.dev

This document describes how AI agents and automated clients can register and authenticate with the sagargohil.dev API.

## Agent Registration

To register as an agent, send a POST request to the registration endpoint with your agent identity:

```
POST https://www.sagargohil.dev/oauth/register
Content-Type: application/json

{
  "client_name": "your-agent-name",
  "identity_type": "jwk",
  "public_key": { ... }
}
```

## Supported Identity Types

- `jwk` — JSON Web Key (Ed25519 or RSA public key)
- `did` — Decentralized Identifier

## Credential Types

- `bearer_token` — OAuth 2.0 bearer token via Authorization Code or Client Credentials flow

## Endpoints

| Purpose              | URL                                                              |
|----------------------|------------------------------------------------------------------|
| Authorization server | https://www.sagargohil.dev                                       |
| Authorization        | https://www.sagargohil.dev/oauth/authorize                       |
| Token                | https://www.sagargohil.dev/oauth/token                           |
| Registration         | https://www.sagargohil.dev/oauth/register                        |
| Revocation           | https://www.sagargohil.dev/oauth/revoke                          |
| JWKS                 | https://www.sagargohil.dev/.well-known/jwks                      |
| Discovery (OAuth)    | https://www.sagargohil.dev/.well-known/oauth-authorization-server |
| Discovery (OIDC)     | https://www.sagargohil.dev/.well-known/openid-configuration      |
| Protected resource   | https://www.sagargohil.dev/.well-known/oauth-protected-resource  |

## Scopes

| Scope     | Description                        |
|-----------|------------------------------------|
| `openid`  | OpenID Connect identity            |
| `profile` | Basic profile information          |
| `email`   | Email address                      |

## Token Revocation

To revoke a token:

```
POST https://www.sagargohil.dev/oauth/revoke
Content-Type: application/x-www-form-urlencoded

token=<token>
```

## Contact

For questions about agent access: connect@sagargohil.dev
