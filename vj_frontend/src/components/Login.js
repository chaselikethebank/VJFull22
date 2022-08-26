import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import { Typography } from "@mui/material";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import { sizing } from "@mui/system";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation
      }),
    }).then((r) => {
      setIsLoading(false); 
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div>
      <CssVarsProvider>
        <Sheet
          sx={{
            maxWidth: 400,
            mx: "auto", // margin left & right
            my: 4,
            mb: 15, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: "flex",
            flexDirection: "column",
            gap: 4,
            borderRadius: "sm",
            boxShadow: "sm",
          }}
          variant="outlined"
        >
          <div>
            <div>
              <Typography variant="h2" sx={{ color: "black" }}>
                New here?
              </Typography>
            </div>

            <TextField
              // html input attribute
              name="username"
              type="text"
              placeholder=""
              value={username}
              label="Username"
              sx={{ mb: 2 }}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              name="password"
              type="password"
              placeholder=""
              label="Password"
              value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
            />
            <TextField
              name="password"
              type="password"
              placeholder=""
              label="Password"
              value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
            />
          </div>

          <Button
            onClick={handleSubmit}
            sx={{
              mt: 1,
              mb: 3,
            }}
            
          >{isLoading ? "Loading..." : "Sign Up"}
          </Button>
        </Sheet>
        <Sheet
          sx={{
            maxWidth: 400,
            mx: "auto", // margin left & right
            my: 4,
            mb: 15, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: "flex",
            flexDirection: "column",
            gap: 4,
            borderRadius: "sm",
            boxShadow: "sm",
          }}
          variant="outlined"
        >
          <div>
            <div>
              <Typography variant="h2" sx={{ color: "black" }}>
                Been here?
              </Typography>
            </div>

            <TextField
              // html input attribute
              name="email"
              type="email"
              placeholder=""
              // pass down to FormLabel as children
              label="Email"
              sx={{ mb: 2 }}
            />
            <TextField
              name="password"
              type="password"
              placeholder=""
              label="Password"
            />
          </div>

          <Button
            sx={{
              mt: 1,
              mb: 3,
            }}
          >
            Login
          </Button>
        </Sheet>
      </CssVarsProvider>
    </div>
  );
}

export default Login;
