import React, { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";
//create the context

const AuthContext = createContext("");

export const AuthProvider = ({ children }) => {
  //using the useState hook to keep track of
  // the value authed(if a user is logged in)
  const [authStatus, setAuthStatus] = useState({
    username: "",
    id: 0,
    isAuth: true,
  });
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          console.log("Error: " + response.data.error);
          setAuthStatus({ ...authStatus, isAuth: false });
        } else {
          setAuthStatus({
            username: response.data.username,
            id: response.data.id,
            isAuth: true,
          });
          console.log(authStatus.isAuth);
        }
      });
  }, []);

  return (
    <AuthContext.Provider
      value={{ authStatus, setAuthStatus, visible, setVisible }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//authConsumer
const AuthConsumer = AuthContext.Consumer;
export { AuthConsumer, AuthContext };

//finally creating the custom hook

export const useAuth = () => useContext(AuthContext);
