const STATIC_PUBLIC_KEY = {
  kty: "OKP",
  crv: "Ed25519",
  kid: "sagargohil-dev-1",
  use: "sig",
  alg: "EdDSA",
  x: "N9juDvS34dThTQQ_vogofqVrS2mdEAlMLE2srWEVhoA",
};

export async function GET() {
  const keys = [STATIC_PUBLIC_KEY];

  return Response.json(
    { keys },
    {
      headers: {
        "Cache-Control": "public, max-age=3600",
      },
    }
  );
}
