import "./App.css";
import ButtonAppBar from "./components/OldNav";
import ButtonAppBarTwo from "./components/NavAgain";
import Home from "./components/Home";
import Nigol from "./components/Login";
import Releases from "./components/Releases";
import Box from "@mui/material/Box";
import Build from './components/Build'
import { Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import { useState, useEffect } from 'react';
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import { Typography } from "@mui/material";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import { sizing } from "@mui/system";




function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />

  return (
    <div className="App">
      <Box m={10} pt={3}>
        {/* <ButtonAppBar/> */}
        <ButtonAppBarTwo user={user} setUser={setUser}/>
        <div className="body" style={null}>
        <Routes>
          <Route exact path="/" element={ <Home />}>
          </Route>
          
            <Route exact path="/Releases" element={ <Releases />}>
            </Route>
            <Route exact path="/Nigol" element={ <Login onLogin={setUser}/>}>
            </Route>
            <Route exact path="/Build" element={ <Build onLogin={setUser}/>}>
            </Route>

          </Routes>
          
          {/* <About />
          <Releases /> */}
          {/* <Nigol /> */}
          {/* <Build /> */}
          
        </div>
      </Box>
    </div>
  );
}

export default App;


        //   <Switch>
        //   <Route exact path="/">
        //     <Home />
        //   </Route>
        //   <Route path="/projects/new">
        //     <ProjectForm onCreateProject={onCreateProject} />
        //   </Route>
        //   <Route path="/projects/:id/edit">
        //     <ProjectEditForm onUpdateProject={onUpdateProject} />
        //   </Route>
        //   <Route path="/projects/:id">
        //     <ProjectDetail onUpdateProject={onUpdateProject} />
        //   </Route>
        //   <Route path="/projects">
        //     <ProjectList 
        //       projects={projects} 
        //       onDeleteProject={onDeleteProject}
        //       onUpdateProject={onUpdateProject}
        //     />
        //   </Route>        
        // </Switch>