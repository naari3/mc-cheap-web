const host = process.env.REACT_APP_API_HOST;
const getToken = async (): Promise<string> => {
  let token = "";
  token = JSON.parse(window.localStorage["token"] || "null");
  if (!token) {
    const res = await fetch(`${host}/token`, {
      mode: "cors",
      credentials: "include"
    });
    if (res.status === 200) {
      token = (await res.json()).token;
      window.localStorage["token"] = JSON.stringify(token);
    } else {
      throw "token failed";
    }
  }
  return token;
};

const client = async (path: string, init?: RequestInit): Promise<Response> => {
  if (!init) {
    init = {};
  }
  init.mode = "cors";
  init.headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${await getToken()}`
  };
  return await fetch(host + path, init);
};

export default client;
