import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import { Typography } from "@mui/material";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import { sizing } from "@mui/system";
import { Box } from "@mui/system";
import { useState } from "react";

function Login() {
  const [formCreate, setFormCreate] = useState({
    name: "",
    cat_num: "",
    link: "",
  });

  const [errors, setErrors] = useState([])

  const handleCreate = (e) => {
    const { name, value } = e.target
    setFormCreate({...formCreate, [name]: value})
    console.log(formCreate)
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
          <Typography variant="h2" sx={{ color: "black" }}>
            Create a release
          </Typography>
          <TextField
            value={formCreate.name} onChange={handleCreate} 
            name="name"
            type="text"
            placeholder=""
            // pass down to FormLabel as children
            label="Artist"
            sx={{ mb: 2 }}
          />
          <TextField
            name="cat_num"
            type="cat_num"
            placeholder=""
            label="Catalog #"
          />
          <TextField name="link" type="link" placeholder="" label="Link" />
            <Button
              sx={{
                mt: 1,
                mb: 1,
                mr: 4,
              }}
            >
              Create
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
            <Typography variant="h2" sx={{ color: "black" }}>
            Edit a release
          </Typography>
          <TextField
            // html input attribute
            name="name"
            type="name"
            placeholder=""
            // pass down to FormLabel as children
            label="Artist"
            sx={{ mb: 2 }}
          />
          <TextField
            name="cat_num"
            type="cat_num"
            placeholder=""
            label="Catalog #"
          />
          <TextField name="link" type="link" placeholder="" label="Link" />
            <Button
              sx={{
                mt: 1,
                mb: 1,
                mr: 4,
              }}
            >
              Edit
            </Button></Sheet>
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
            <Typography variant="h2" sx={{ color: "black" }}>
            Delete a release
          </Typography>
          <TextField
            name="cat_num"
            type="cat_num"
            placeholder=""
            label="Catalog #"
          />
          <Button
              sx={{
                mt: 1,
                mb: 1,
                mr: 4,
              }}
            >
              Delete
            </Button>
           
        </Sheet>
      </CssVarsProvider>

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
          </Button></Sheet>
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
