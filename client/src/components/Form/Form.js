import { Button } from "../Buttons/Button";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FormContainer, Label, TextContainer, TextField } from "./FormStyle";
import { Modal } from "../Modal/Modal";
import axios from "axios";
import { useAuth, AuthConsumer } from "../../hooks/useAuth";

export const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [signupVisibility, setSignupVisibility] = useState(true);
  const [shown, setShown] = useState(false);
  const { authStatus, setAuthStatus } = useAuth();
  const { visible, setVisible } = useAuth();

  let navigate = useNavigate();

  function toggleSignupVisibility() {
    // setSignupVisibility(!signupVisibility);
    console.log(visible);
    setVisible(!visible);
  }

  //signup functionality
  const signUp = () => {
    const data = { username: username, email: email, password: password };
    axios.post("http://localhost:3001/auth", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        console.log(data);
        toggleSignupVisibility();
      }
    });
  };

  //login functionality
  const login = () => {
    const data = { username: username, password: password };
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data.token);
        // setAuthStatus(true);
        console.log(response.data);
        setAuthStatus({ ...authStatus, isAuth: true });
        navigate("/discussion");
      }
    });
  };

  useEffect(() => {
    console.log(authStatus.isAuth);
  }, []);

  return (
    <>
      <AuthConsumer>
        {({ isAuth = authStatus.isAuth }) => (
          <div>
            {!isAuth ? (
              <>
                {visible ? (
                  <>
                    <FormContainer>
                      <Label>Username</Label>
                      <TextField
                        type="text"
                        onChange={(event) => {
                          setUsername(event.target.value);
                        }}
                      />
                      <Label>Email</Label>
                      <TextField
                        type="email"
                        onChange={(event) => {
                          setEmail(event.target.value);
                        }}
                      />
                      <Label>Password</Label>
                      <TextField
                        type="password"
                        onChange={(event) => {
                          setPassword(event.target.value);
                        }}
                      />
                      <Button
                        label="Sign up"
                        onClick={() => {
                          signUp();
                        }}
                      ></Button>

                      <p>
                        By clicking "Sign up" you agree to out{" "}
                        <span>terms of service</span>,
                        <span>privacy policy</span>,and{" "}
                        <span>cookie policy.</span>
                      </p>
                    </FormContainer>
                    <TextContainer>
                      <p>
                        Already have an account?{" "}
                        <span onClick={toggleSignupVisibility}>Login</span>
                      </p>
                    </TextContainer>
                  </>
                ) : (
                  <>
                    <FormContainer>
                      <Label>Username</Label>
                      <TextField
                        type="text"
                        onChange={(event) => {
                          setUsername(event.target.value);
                        }}
                      />

                      <Label>Password</Label>
                      <TextField
                        type={shown ? "text" : "password"}
                        onChange={(event) => {
                          setPassword(event.target.value);
                        }}
                      />
                      {/* <button
                        onClick={() => setShown(!shown)}
                        styles={`width:14px`}
                      >
                        Show/Hide
                      </button> */}

                      <Button label="Login" onClick={login}>
                        {/* <Ripple color="#b7cadb" /> */}
                      </Button>

                      <p>
                        By clicking "Sign up" you agree to out{" "}
                        <span>terms of service</span>,
                        <span>privacy policy</span>,and
                        <span>cookie policy.</span>
                      </p>
                    </FormContainer>
                    <TextContainer>
                      <p>
                        Dont have an account?
                        <span onClick={toggleSignupVisibility}>Sign up</span>
                      </p>
                    </TextContainer>
                  </>
                )}
              </>
            ) : (
              <></>
            )}
          </div>
        )}
      </AuthConsumer>
    </>
  );
};
