export const fetchProxyV1 = async (url, options = {}) => {
  const isFormData =
    (typeof FormData !== "undefined" && options.body instanceof FormData) ||
    options.body?.constructor?.name === "FormData";

  let headers = {
    ...options.headers,
  };

  if (!isFormData) {
    headers["Content-Type"] = "application/json";
  }

  let res = await fetch(`/api/internal${url}`, {
    ...options,
    method: options.method || "GET",
    headers,
    body: options.body,
  });

  return res;
};
