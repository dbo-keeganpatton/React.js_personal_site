import React from 'react';
import Typewriters from "../components/typewriter.js";
import './MainPage.css';
import { Link } from 'react-router-dom';


// Image Asset Imports
import topCorner from "../assets/corner.svg"
import bottomCorner from "../assets/bottom_right_corner.svg"
import bioLine from "../assets/center_bio_line.svg"
import projectsCorner from "../assets/projects_border.svg"
import gitHubIcon from "../assets/gitHub.svg"
import linkedInIcon from "../assets/linkedin.svg"
import webMailIcon from "../assets/mail.svg"

function MainPage() {
  return (
		<div className="App">
				

				{/* Banner */}
				<div className='top-left-container'>
					<Typewriters />	
					<img src={topCorner} alt="hello" className="top-left-border"/>
				</div>	
				
				{/* Social Media Link section*/}
			
				<div className='links-container'>
					<Link to="/contact">
						<img src={webMailIcon} alt="" className='mail-link'/>
					</Link>
										<a href="https://www.linkedin.com/in/keeganpatton/" target="_blank" rel="noreferrer">
						<img src={linkedInIcon} alt="linkedin" className="linkedin-link"/>
					</a>
					<a href="https://github.com/dbo-keeganpatton" target="_blank" rel="noreferrer">
						<img src={gitHubIcon} alt="github" className="github-link"/>
					</a>

				</div>

				
				{/* Bio */}
				<div>
				<h1 className='bio-header'>Welcome.</h1>
				</div>
				<div className='bio-container'>
					<img src={bioLine} alt="" className="bio-line"/>
					<p className="bio-text">
					
					I currently work as a Senior Data Analyst for the largest retailer in the world, Walmart.<br/>
					<br/>
					In my personal time I'm an avid skateboarder and love to experiment with new technologies and develop my technical skillsets.<br/>
					<br/>
					Check out my project portfolio here to see some of my work, and feel free to connect with me on linkedIn or message me privately here.

					</p>

				</div>
				
				{/* Projects */}
				<div className='bottom-right-container'>
					
					<h1 className="projects-header">Projects</h1>
					<img src={projectsCorner} alt="hello" className="projects-border"/>
					
					<div className='projects-grid'>				
						<a href="https://oura-api-client.streamlit.app/" target="_blank" rel="noreferrer" className='dark-oura'>
						Dark Oura
						</a>
						<a href="https://branchlibrary-8478c72f5159.herokuapp.com/" target="_blank" rel="noreferrer" className='branch-library'>
						Branch Library
						</a>
						<a href="https://github.com/dbo-keeganpatton/thrasher_data_pipeline" target="_blank" rel="noreferrer" className='dbt-pipeline'>
						Thrasher NLP Data Pipeline
						</a>	
						<a href="https://github.com/dbo-keeganpatton/retail_data_pipeline" target="_blank" rel="noreferrer" className='retail-pipeline'>
						Automated Retail Data Pipeline
						</a>	
					</div>	

					<img src={bottomCorner} alt="yes" className="bottom-right-border"/>
				
				</div>	
		</div>
	
  );
}


export default MainPage;
