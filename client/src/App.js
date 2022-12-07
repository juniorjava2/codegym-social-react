import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";

import Discussion from "./Pages/Discussion";
import Ask from "./Pages/Ask";
import QuestionDetails from "./Pages/QuestionDetails";
import Profile from "./Pages/Profile";
import { GlobalStyle } from "./styles/globals";
import { AuthProvider } from "./hooks/useAuth";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
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
