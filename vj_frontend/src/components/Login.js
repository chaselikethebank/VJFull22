import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import { Typography } from "@mui/material";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import { sizing } from "@mui/system";
import { Box } from "@mui/system";

function Login() {
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
          <Typography variant="h2" sx={{ color: "black"}}>
            <div>Create an account</div>
          </Typography>
          <Typography variant="h6" sx={{ color: "gray" }}>
            <div>Let's get you all set up here</div>
          </Typography>
          <div>
            <TextField
              // html input attribute
              name="name"
              type="name"
              placeholder=""
              // pass down to FormLabel as children
              label="Name"
              sx={{ mb: 2 }}
            />
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
          <div>
            <Typography align="center">
              <Button
                sx={{
                  mt: 1,
                }}
              >
                Create account
              </Button>
            </Typography>
          </div>
          <div>
            <Typography align="center" level="body2">
              Already have an account? Login
            </Typography>
          </div>
        </Sheet>
      </CssVarsProvider>
    </div>
  );
}

export default Login;