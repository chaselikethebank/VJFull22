import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function ButtonAppBarTwo({ setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    // const bandcamp = "https://veryjazzed.bandcamp.com/"

    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        elevation={0}
        style={{ background: "white", color: "black" }}
      >
        <Toolbar>
          <Typography
            variant="h2"
            component="div"
            sx={{
              fontFamily: "Arial",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontOpticalSizing: "auto",
            }}
          >
            #veryjazzed{" "}
          </Typography>{" "}
          <Typography variant="body1: 'p'"> ®</Typography>
          <Typography
            variant="h7"
            component="div"
            sx={{
              justifyContent: "flex-end",
              fontOpticalSizing: "auto",
              flexGrow: 100,
              // display: 'flex', flexDirection: 'row-reverse',
              fontFamily: "Arial",
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            <Link
              //   style={{ textdecoration: 'none'}}
              m={2}
              pt={3}
              to={`/`}
              variant="body1: 'p'"
              color="black"
              sx={{
                fontFamily: "Arial",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              {" "}
              HQ{" "}
            </Link>
            <a target="shop" href="https://veryjazzed.bandcamp.com/">
              {" "}
              Shop{" "}
            </a>
            <Link
              to={`/Releases`}
              underline="none"
              variant="h6"
              color="inherit"
              sx={{
                fontFamily: "Arial",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              {" "}
              Releases{" "}
            </Link>
            {/* <Link
              to={`/Build`}
              underline="none"
              variant="h6"
              color="inherit"
              sx={{
                fontFamily: "Arial",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              {" "}
              Build{" "}
            </Link> */}
            {/* <Link
              to={`/Nigol`}
              underline="none"
              variant="h6"
              color="inherit"
              sx={{
                fontFamily: "Arial",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              {" "}
              Login
            </Link> */}
            <Button variant="outline" onClick={handleLogoutClick}></Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
