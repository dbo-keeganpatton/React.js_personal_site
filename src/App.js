import React from 'react';
import { StrictMode } from 'react';
import './App.css';
import Typewriters from "./components/typewriter.js";


// Image Asset Imports
import topCorner from "./assets/corner.svg"
import bottomCorner from "./assets/bottom_right_corner.svg"
import bioLine from "./assets/center_bio_line.svg"
import projectsCorner from "./assets/projects_border.svg"
import gitHubIcon from "./assets/gitHub.svg"
import linkedInIcon from "./assets/linkedin.svg"


function App() {
  return (
	<StrictMode>

		<div className="App">
				

				{/* Banner */}
				<div className='top-left-container'>
					<Typewriters />	
					<img src={topCorner} alt="hello" className="top-left-border"/>
				</div>	
				
				{/* Social Media Link section*/}
			
				<div className='links-container'>
					<a href="https://github.com/dbo-keeganpatton" target="_blank" rel="noopener">
						<img src={gitHubIcon} alt="github" className="github-link"/>
					</a>
					<a href="https://www.linkedin.com/in/keeganpatton/" target="_blank" rel="noopener">
						<img src={linkedInIcon} alt="linkedin" className="linkedin-link"/>
					</a>
				</div>

				
				{/* Bio */}
				<div className='bio-container'>
					<h1 className='bio-header'>Welcome.</h1>
					<img src={bioLine} alt="" className="bio-line"/>
					<p className="bio-text">
					
					I am a Senior Data Analyst working for the largest retailer in the world, Walmart.<br/>
					In this role I utilize my knowledge of Data Structures, ETL Pipelines,<br/> 
					Process Automation, Business Intelligence and Data Visualization to <br/>
					help drive value for our customers and enable them to <br/> 
					Save Money and Live Better.
					<br/>
					<br/>
					In my free time I am an avid skateboarder and love learning new <br/>
					skills and technologies to expand my technical expertise.

					</p>

				</div>
				
				{/* Projects */}
				<div className='bottom-right-container'>
					
					<h1 className="projects-header">Projects</h1>
					<img src={projectsCorner} alt="hello" className="projects-border"/>
					
								
					<a href="https://oura-api-client.streamlit.app/" target="_blank" rel="noopener" className='dark-oura'>
					Dark Oura
					</a>
					<a href="https://branchlibrary-8478c72f5159.herokuapp.com/" target="_blank" rel="noopener" className='branch-library'>
					Branch Library
					</a>
					<a href="https://github.com/dbo-keeganpatton/thrasher_data_pipeline" target="_blank" rel="noopener" className='dbt-pipeline'>
					Thrasher NLP Data Pipeline
					</a>	
					<a href="https://github.com/dbo-keeganpatton/retail_data_pipeline" target="_blank" rel="noopener" className='retail-pipeline'>
					Automated Retail Data Pipeline
					</a>	
					

					<img src={bottomCorner} alt="yes" className="bottom-right-border"/>
				
				</div>	
		</div>
	
	</StrictMode>
  );
}


export default App;
