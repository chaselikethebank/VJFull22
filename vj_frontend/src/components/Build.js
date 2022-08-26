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

function Build() {
  const ArtistAPI = "http://localhost:3000/artists";
  const [artist, setArtist] = useState([]);

  function getArtist() {
    fetch(ArtistAPI)
      .then((rest) => rest.json())
      .then((data) => setArtist(data));
  }
  useEffect(getArtist, []);
//   console.log(artist);

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
//   console.log(formArtist);

  function onArtist(e) {
    // setFormArtist({name: "", cat: "", title: "", link: ""})
    fetch(
      "http://localhost:3000/artists",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formArtist }),
      }
      //   console.log(formArtist)
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

  function editArtist(e) {
    // setFormArtist({name: "", cat: "", title: "", link: ""})
    const found = artist.find((element) => {
      return element.cat === formArtist.cat;
    });
    fetch(
      `http://localhost:3000/artists/${found.id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formArtist }),
      },
      console.log(formArtist)
    ).then((res) => {
      if (res.ok) {
        res.json().then(console.log("full edit circle"));
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
    // console.log(found.id);

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

  //   const [formCreate, setFormCreate] = useState({
  //     artist: "",
  //     cat: "",
  //     link: "",
  //   });
  const [errors, setErrors] = useState([]);

  //   const handleCreate = (e) => {
  //     const { name, value } = e.target;
  //     setFormCreate({ ...formCreate, [name]: value });
  //   };
  //   // console.log(formCreate)

  //   function onCreate(e) {
  //     fetch("http://localhost:3000/releases", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ ...formCreate }),
  //     }).then((res) => {
  //       if (res.ok) {
  //         res.json().then(console.log("full circle"));
  //       } else {
  //         //Display errors
  //         res
  //           .json()
  //           .then((data) =>
  //             setErrors(Object.entries(data.errors).map((e) => `${e[0]} ${e[1]}`))
  //           );
  //       }
  //     });
  //   }

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
            Edit Release
          </Typography>
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
              onClick={editArtist}
              sx={{
                mt: 1,
                mb: 1,
                mr: 4,
              }}
            >
              Edit
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
      </CssVarsProvider>
    </div>
  );
}

export default Build;
