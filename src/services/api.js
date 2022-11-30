//peticiones
// const API_URL = "http://192.168.10.82:7206/api";
const API_URL = "http://192.168.10.82:7206/api";

export const fetchLogin = (credentials) => {
  return fetch(`${API_URL}/zoonosis/Auth/createtoken`, {
    method: "POST",
    body: JSON.stringify({
      userName: credentials.userName,
      password: credentials.password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const fetchDogsTable = async (token) => {
  const response = await fetch(`${API_URL}/zoonosis/Ficha`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  return response.json();
};

export const fetchDataDog = async (payload) => {
  const response = await fetch(`${API_URL}/zoonosis/Ficha/${payload.dogId}`, {
    headers: {
      Authorization: "Bearer " + payload.token,
    },
  });

  return response.json();
};

export const fetchStatusDog = async (payload) => {
  const response = await fetch(`${API_URL}/zoonosis/Ficha/status`, {
    method: "PUT",
    body: JSON.stringify({
      estado: payload.state,
      id: payload.dogId,
    }),
    headers: {
      Authorization: "Bearer " + payload.token,
      "Content-Type": "application/json",
    },
  });
  return response.text();
};

export const fetchForm = async (payload) => {
  const response = await fetch(`${API_URL}/zoonosis/Ficha`, {
    method: "POST",
    body: JSON.stringify({
      //
    }),
    headers: {
      Authorization: "Bearer " + payload.token,
      "Content-Type": "application/json",
    },
  });
  return response.text();
};
