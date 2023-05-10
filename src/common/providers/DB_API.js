class DB_API {
  constructor() {
    this.rootURL = "http://localhost:3005/meetings";
  }

  load = () => this._fetch();

  add = (data) => {
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    };

    return this._fetch(options);
  };

  _fetch = (options = { method: "GET" }) =>
    fetch(this.rootURL, options).then((response) => {
      if (response.ok) return response.json();

      throw new Error("Network error!");
    });
}

export default DB_API;
