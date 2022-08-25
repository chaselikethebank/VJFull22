import React from "react";
import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";

function Release({ key, link, releases }) {
  // console.log(link);

  // console.log(link.cat.name);
  // console.log(link.artist.name);
  // console.log(link.link);

  return (
    <Box m={1} pt={1} align="left" sx={{ fontFamily: 'Arial', textTransform: 'uppercase', fontWeight: 'bold', fontOpticalSizing: 'auto'  }}>
      <ul>
        <li>
          <a href={`${link.link}`}>
            {link.cat.name} // {link.artist.name}
          </a>
        </li>
      </ul>
    </Box>
  );
}

export default Release;
