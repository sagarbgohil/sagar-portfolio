const JWKS = {
  keys: [
    {
      kty: "OKP",
      crv: "Ed25519",
      kid: "sagargohil-dev-1",
      use: "sig",
      alg: "EdDSA",
      x: "N9juDvS34dThTQQ_vogofqVrS2mdEAlMLE2srWEVhoA",
    },
  ],
};

export async function GET() {
  return Response.json(JWKS, {
    headers: {
      "Cache-Control": "public, max-age=3600",
    },
  });
}
