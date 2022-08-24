import './App.css';
import ButtonAppBar from './components/OldNav'
import ButtonAppBarTwo from './components/NavAgain'
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login'
import Releases from './components/Releases'
import Box from '@mui/material/Box';

function App() {
  return (
    <div className="App">
      <Box m={10} pt={3}>
      {/* <ButtonAppBar/> */}
      <ButtonAppBarTwo/>
      <div className="body" style={null} >
        <Releases />
      <Home />
      
      <About />
      <Login />
      
      </div>
      </Box>
    </div>
  );
}

export default App;
