import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import axios from "axios";

import Discussion from "./Pages/Discussion";
import Ask from "./Pages/Ask";
import QuestionDetails from "./Pages/QuestionDetails";
import Profile from "./Pages/Profile";
import { GlobalStyle } from "./styles/globals";
import { AuthProvider } from "./hooks/useAuth";
import ProtectedRoute from "./routes/ProtectedRoute";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { authStatus, setAuthStatus } = useAuth();

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/auth/auth", {
  //       headers: {
  //         accessToken: localStorage.getItem("accessToken"),
  //       },
  //     })
  //     .then((response) => {
  //       if (response.data.error) {
  //         console.log("Error: " + response.data.error);
  //         setAuthStatus({ ...authStatus, isAuth: false });
  //       } else {
  //         setAuthStatus({ ...authStatus, isAuth: true });
  //         console.log("Authstatus in App.js: " + authStatus.isAuth);
  //       }
  //     });
  // }, []);

  return (
    <>
      <div className="App">
        <GlobalStyle />
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/ask"
                element={
                  <ProtectedRoute>
                    <Ask />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/question/:id"
                element={
                  <ProtectedRoute>
                    <QuestionDetails />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />

              <Route path="/discussion" element={<Discussion />} />
              <Route path="*" element={<Discussion />} />
            </Routes>
          </Router>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
