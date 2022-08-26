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
import { useHistory } from 'react';

function Login() {
 

  
  //find thin the formArtist by name that holds the id in a variable called params.id

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState([]);
  const {email, password} = formData
  const history = useHistory()

  function onSubmit(e) {
    e.preventDefault()
    const user = {email,
    password
  }

  fetch('/users',{
    method:'POST',
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringify(user)
  })
  .then(res=> {
    if(res.ok){
      res.json().then(user=> {
        history.push(`/users/${user.id}`)
      })
    }else {
      res.json().then(json => setErrors(Object.entries(json.errors    )))
    }
  })
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
            Sign up
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
