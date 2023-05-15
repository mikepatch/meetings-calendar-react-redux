const rootURL = "http://localhost:3005/meetings";

const _fetch = (options = { method: "GET" }, additionalPath = "") => {
  const url = rootURL + additionalPath;

  return fetch(url, options).then((response) => {
    if (response.ok) return response.json();

    throw new Error("Network error!");
  });
};

export const load = () => _fetch();

export const add = (data) => {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  };

  return _fetch(options);
};

export const remove = (id) => _fetch({ method: "DELETE" }, `/${id}`);