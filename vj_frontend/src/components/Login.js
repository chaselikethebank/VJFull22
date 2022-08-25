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

function Login() {
  const ArtistAPI = "http://localhost:3000/artists";
  const [artist, setArtist] = useState([]);

  function getArtist() {
    fetch(ArtistAPI)
      .then((rest) => rest.json())
      .then((data) => setArtist(data));
  }
  useEffect(getArtist, []);
  console.log(artist);

  const [formArtist, setFormArtist] = useState({
    name: "",
    cat: "",
    title: "",
    link: "",
  });

  const handleArtist = (e) => {
    const { name, value } = e.target;
    setFormArtist({ ...formArtist, [name]: value });
  };
  console.log(formArtist);

  function onArtist(e) {
    // setFormArtist({name: "", cat: "", title: "", link: ""})
    fetch(
      "http://localhost:3000/artists",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formArtist }),
      },
      console.log(formArtist)
    ).then((res) => {
      if (res.ok) {
        res.json().then(console.log("full create circle"));
      } else {
        //Display errors
        res
          .json()
          .then((data) =>
            setErrors(Object.entries(data.errors).map((e) => `${e[0]} ${e[1]}`))
          );
      }
    });
  }

  function deleteArtist(e) {
    const found = artist.find((element) => {
      return element.cat === formArtist.cat;
    });
    console.log(found.id);

    fetch(`http://localhost:3000/artists/${found.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    // .then(res => {
    //   if(res.ok){
    //     deleteArtist(id)
    //     artist.push('/')
    //   } else {
    //     res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
    //   }
    // })
  }

  //find thin the formArtist by name that holds the id in a variable called params.id

  const [formCreate, setFormCreate] = useState({
    artist: "",
    cat: "",
    link: "",
  });
  const [errors, setErrors] = useState([]);

  const handleCreate = (e) => {
    const { name, value } = e.target;
    setFormCreate({ ...formCreate, [name]: value });
  };
  // console.log(formCreate)

  function onCreate(e) {
    fetch("http://localhost:3000/releases", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formCreate }),
    }).then((res) => {
      if (res.ok) {
        res.json().then(console.log("full circle"));
      } else {
        //Display errors
        res
          .json()
          .then((data) =>
            setErrors(Object.entries(data.errors).map((e) => `${e[0]} ${e[1]}`))
          );
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
          <Typography variant="h2" sx={{ color: "black" }}>
            Edit Artist
          </Typography>
          <TextField
            value={formArtist.name}
            onChange={handleArtist}
            name="name"
            type="text"
            placeholder=""
            // pass down to FormLabel as children
            label="Artist"
            sx={{ mb: 2 }}
          />
          <TextField
            value={formArtist.cat_num}
            onChange={handleArtist}
            name="cat"
            type="text"
            placeholder=""
            // pass down to FormLabel as children
            label="Catalog #"
            sx={{ mb: 2 }}
          />
          <TextField
            value={formArtist.title}
            onChange={handleArtist}
            name="title"
            type="text"
            placeholder=""
            // pass down to FormLabel as children
            label="Release title"
            sx={{ mb: 2 }}
          />
          <TextField
            value={formArtist.link}
            onChange={handleArtist}
            name="link"
            type="text"
            placeholder=""
            // pass down to FormLabel as children
            label="Link"
            sx={{ mb: 2 }}
          />
          <div>
            <Button
              onClick={onArtist}
              sx={{
                mt: 1,
                mb: 1,
                mr: 4,
              }}
            >
              Create
            </Button>
            <Button
              onClick={deleteArtist}
              sx={{
                mt: 1,
                mb: 1,
                mr: 4,
              }}
            >
              Delete
            </Button>
          </div>
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
            Create a release
          </Typography>
          <TextField
            value={formCreate.artist}
            onChange={handleCreate}
            name="artist"
            type="text"
            placeholder=""
            // pass down to FormLabel as children
            label="Artist"
            sx={{ mb: 2 }}
          />
          <TextField
            value={formCreate.cat}
            onChange={handleCreate}
            name="cat"
            type="text"
            placeholder=""
            label="Catalog #"
          />
          <TextField
            value={formCreate.link}
            onChange={handleCreate}
            name="link"
            type="text"
            placeholder=""
            label="Link"
          />
          <Button
            onClick={onCreate}
            sx={{
              mt: 1,
              mb: 1,
              mr: 4,
            }}
          >
            Create
          </Button>
        </Sheet>
        {errors
          ? errors.map((e) => (
              <h2 style={{ color: "red" }}>{e.toUpperCase()}</h2>
            ))
          : null}
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
