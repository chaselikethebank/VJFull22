import React from "react";
import logo from './VJParrontexture.png'
import { Box } from "@mui/system";
// import logo from "./shortEditsFromHandyCamVJ.mp4";

function Home() {
  return (
    <div className="App">
      <Box m={1} pt={3}>
      <video width="2400" autoPlay loop muted>
          <source
            src={logo}
            alt="Logo"
            style={{
              height: 100,
              flex: 1,
              width: null,
            }}
          />
        </video>
      </Box>
    </div>
  );
}

export default Home;
