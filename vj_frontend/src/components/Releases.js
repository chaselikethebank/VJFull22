import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import Release from "./Release";

function Releases() {
  const API = "http://localhost:3000/artists";
  const [releases, setReleases] = useState([]);

  function getLinks() {
    fetch(API)
      .then((rest) => rest.json())
      .then((data) => setReleases(data));
  }
  useEffect(getLinks, []);

  // console.log(releases.cat);

  // console.log(releases)
  const renderLinks = releases.sort( (a,b) => a.id > b.id ? 1 : -1 )
    .map
    ((release) => (
    <Release key={release.id} release={release}/>
  ))
  console.log(renderLinks)

  return (
    <div className="App">
      <Box m={1} pt={3}></Box>
      <ul>{renderLinks}</ul>
    </div>
  );
}

export default Releases;

// let filter = data.filter((item) => {
//   console.log(item.name)
//   console.log(search)
//   return (
//     item.name.toLowerCase().includes(search.toLowerCase())
//   )
// })
