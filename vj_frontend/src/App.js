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
import { useState } from 'react';



function App() {
const [currentUser, setCurrentUser] = useState(false)

const updateUser = (user => setCurrentUser(user))

  return (
    <div className="App">
      <Box m={10} pt={3}>
        {/* <ButtonAppBar/> */}
        <ButtonAppBarTwo />
        <div className="body" style={null}>
        <Routes>
          <Route exact path="/" element={ <Home />}>
          </Route>
          
            <Route exact path="/Releases" element={ <Releases />}>
            </Route>
            <Route exact path="/Nigol" element={ <Login updateUser={updateUser}/>}>
            </Route>
            <Route exact path="/Build" element={ <Build updateUser={updateUser}/>}>
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