import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

export default function ButtonAppBar() {

  const headLinks = [ 'Shop', 'Releases', 'About', 'Login'];

  return (
    <Box sx={{ flexGrow: 1, }}>
      <AppBar position="fixed" >
        <Toolbar >
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h2" component="div" sx={{ color: 'black', flexGrow: 100, fontFamily: 'Arial', textTransform: 'uppercase', fontWeight: 'bold' }}>
          # very jazzed ® 
          </Typography >
          <Typography sx={{ flexGrow: 1, fontFamily: 'Arial', textTransform: 'uppercase', fontWeight: 'bold' }}>
          <Box sx={{ flexGrow: 1, display: { md: 'flex' } }}>
            {headLinks.map((link) => (
              <Button
                key={link}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                <Link>
                {link}
                </Link>
                
              </Button>
            ))}
          </Box>
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
