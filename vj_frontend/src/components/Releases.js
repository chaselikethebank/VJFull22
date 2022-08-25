import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import Release from "./Release";

function Releases() {
  const API = "http://localhost:3000/releases";
  const [links, setLinks] = useState([]);

  function getLinks() {
    fetch(API)
      .then((rest) => rest.json())
      .then((data) => setLinks(data));
  }
  useEffect(getLinks, []);

  // console.log(links);

  // console.log(releases)
  const renderLinks = links.map((link) => (
    <Release key={link.id} link={link} releases={links}/>
  ));

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
