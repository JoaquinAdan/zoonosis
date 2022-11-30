import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { fetchLogin } from "../../services/api";

const DEFAULT_CONTEXT = {
  loading: false,
  status: 0, // 0 -> nothing  1 -> error 2 -> success
  token: null,
  userName: null,
};

let initialAuth = {};
const storage = localStorage.getItem("session");
if (storage) {
  let user = JSON.parse(storage);
  initialAuth = {
    token: user.token,
    userName: user.userName,
  };
}

export const AdminAuthContext = React.createContext();

export default function AdminAuthProvider({ children }) {
  const [auth, setAuth] = useState({ ...DEFAULT_CONTEXT, ...initialAuth });

  const saveAuthInStorage = (data) => {
    // console.log(data)
    localStorage.setItem(
      "session",
      JSON.stringify({
        token: data.token,
        userName: data.userName,
      })
    );
  };

  const {mutate, isError, isLoading} = useMutation({
    mutationFn: fetchLogin,
    onMutate: () => {
      setAuth({ ...auth, loading: true });
    },
    onSuccess: async (res) => {
      let data = await res.json();
      if (res.ok) {
        setAuth({
          loading: false,
          status: 2,
          token: data.token,
          userName: data.userName,
        });
        saveAuthInStorage(data);
      } else {
        setAuth({
          ...DEFAULT_CONTEXT,
          loading: false,
          status: 1,
        });
      }
    },
    onError: (error) => {
      console.error(error);
      setAuth(DEFAULT_CONTEXT);
    },
  });
  const login = (credentials) => {
    mutate(credentials);
  };
  const logout = () => {
    setAuth(DEFAULT_CONTEXT);
    localStorage.removeItem("session");
  };
  
  return (
    <AdminAuthContext.Provider value={{ auth, login, logout, serverError: isError, isLoading }}>
      {children}
    </AdminAuthContext.Provider>
  );
}
