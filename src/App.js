import React from 'react';
import './App.css';
import Typewriters from "./components/typewriter.js"

// Image Asset Imports
import topCorner from "./assets/corner.svg"
import bottomCorner from "./assets/bottom_right_corner.svg"
import projectsCorner from "./assets/projects_border.svg"
import familyPic from "./assets/family.jpg"


function App() {
  return (
    <div className="App">
			
			<Typewriters />	
			
			<img src={topCorner} alt="hello" className="top-left-border"/>
			<img src={bottomCorner} alt="yes" className="bottom-right-border"/>
			<img src={familyPic} alt="hey" className="vignette"/>

			<h1 className="projects-header">Projects</h1>
			<img src={projectsCorner} alt="hello" className="projects-border"/>

	
	</div>
  );
}

export default App;

