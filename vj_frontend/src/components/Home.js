
import React from 'react';
// import Logo from './/Users/chasedemaster.tech/Downloads/VJParrontexture.png'
import { Box } from '@mui/system';
import logo from './VJParrontexture.png';


function Home() {
  return (
    <div className="App" >
                  <Box m={1} pt={3}></Box>

                  <img src={logo} alt="Logo" style={{
            height:1200,
            flex: 1,
            width: null,
          }}/>
    

    </div>
  );
}

export default Home; 