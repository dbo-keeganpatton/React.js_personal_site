import React from 'react';
import './App.css';
import Typewriters from "./components/typewriter.js"

// Image Asset Imports
import topCorner from "./assets/corner.svg"
import bottomCorner from "./assets/bottom_right_corner.svg"

function App() {
  return (
    <div className="App">
			
			<Typewriters />	
			
			<img src={topCorner} alt="hello" className="top-left-border"/>
			<img src={bottomCorner} alt="yes" className="bottom-right-border"/>
	</div>
  );
}

export default App;

