import React from "react";
import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";

function Release({ link, release }) {
  // console.log(link);

  // console.log(link.cat.name);
  // console.log(link.artist.name);
  // console.log(release.cat);

  return (
    <Box m={1} pt={1} align="left" sx={{ fontFamily: 'Arial', textTransform: 'uppercase', fontWeight: 'bold', fontOpticalSizing: 'auto'  }}>
      <ul>
        <li>
          <a href={`${release.link}`}>
            {release.cat} // {release.name} // {release.title}
          </a>
        </li>
      </ul>
    </Box>
  );
}

export default Release;
