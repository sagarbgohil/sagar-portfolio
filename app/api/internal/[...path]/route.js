import { NextResponse } from "next/server";

const API_BASE = process.env.API_URL;

const passthrough = async (req, method, path) => {
  const originalUrl = new URL(req.url);
  const queryString = originalUrl.search;

  const url = `${API_BASE}/api/v1/${path.join("/")}${queryString}`;
  const headers = new Headers(req.headers);

  const body = ["GET", "HEAD"].includes(method) ? undefined : await req.text();

  const response = await fetch(url, {
    method,
    headers,
    body,
  });

  const contentType =
    response.headers.get("Content-Type") || "application/json";
  const responseBody = await response.text();

  return new NextResponse(responseBody, {
    status: response.status,
    headers: {
      "Content-Type": contentType,
    },
  });
};

// Handle GET
export async function GET(req, { params }) {
  const { path } = await params;
  return passthrough(req, "GET", path);
}

// Handle POST
export async function POST(req, { params }) {
  const { path } = await params;
  return passthrough(req, "POST", path);
}

// Handle PUT
export async function PUT(req, { params }) {
  const { path } = await params;
  return passthrough(req, "PUT", path);
}

// Handle PATCH
export async function PATCH(req, { params }) {
  const { path } = await params;
  return passthrough(req, "PATCH", path);
}

// Handle DELETE
export async function DELETE(req, { params }) {
  const { path } = await params;
  return passthrough(req, "DELETE", path);
}
