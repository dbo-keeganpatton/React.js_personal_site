import React from 'react';
import { Container, Grid, Typography, Box  } from "@mui/material";
import Typewriters from "../components/typewriter.js";
import { Link } from 'react-router-dom';
import CustomCarousel from '../components/carousel.js';

// Images
import topLeftBorder from "../assets/LeftCorner.svg";
import webMailIcon from "../assets/mail.svg";
import linkedInIcon from "../assets/Linkedin.svg";
import gitHubIcon from "../assets/gitHub.svg";


// Projects
import { p1, p2, p3, p4 } from "../components/projects.js";

// This array will be used as an iterable to create... 
// Paper Squares for routing per project...
const projectsList = [ p1, p2, p3, p4 ]



function MainPage() {
  return (
    <Container sx={{ 
			bgcolor: "#1b2430", 
			minHeight: "100vh", 
	}}>

			
			{/* 
				This Grid consists of the top banners and link images..
				SVG's scale strangely despite identical dims...
				Link Images are sorted in a flex box due to space isses...
			*/}
			<Grid 
				container
				direction="row"
				justifyContent="space-between"
				alignItems="flex-start"
				paddingTop="20px"
				wrap="nowrap"
			>
				<img src={topLeftBorder} style={{ width: '20%' }} alt="Top Left Border" />

				{/* Links */}
				<Box sx={{ 
					display: 'flex', 
					flexDirection: 'row', 
					justifyContent: 'space-between',
					alignContent: 'center',
					marginRight: "-10%",
					paddingTop: "2%",
					width: { xs: "40%", sm: "30%", md: "30%", lg: "30%", xl: '30%' }
					
				  }}>
							<Link to="/contact">
								<img src={webMailIcon} style={{ width: '60%', padding: '0 1px' }} alt="Web Mail Icon" />
							</Link>
							<a href="https://www.linkedin.com/in/keeganpatton/" target="_blank" rel="noreferrer">
								<img src={linkedInIcon} style={{ width: '46%', padding: '0 0px' }} j alt="LinkedIn Icon" />
							</a>
							<a href="https://github.com/dbo-keeganpatton" target="_blank" rel="noreferrer">
								<img src={gitHubIcon} style={{ width: '55%', padding: '0 0px', marginLeft: '-30%' }} alt="GitHub Icon" />
							</a>
				</Box>

			</Grid>


			{/*
				I'm getting into a bad habit of using <Box> to nest elements and grids...
				but for some reason it is the only way I can get containers to be...
				horizontally oriented, for now it works, but this should be refined...
				when I know more about React and Material-UI...
			*/}	
			<Box sx={{
				display: "flex",
				flexDirection: "row",
				flexWrap: "wrap"
			}}>

				{/* Welcome Message & Bio */}
				<Grid
					Container
					direction="row"
					justifyContent="space-between"
					alignItems="flex-start"
					sx={{
						maxWidth: {xs: "100%", sm: "100%", md: "50%", lg: "50%", xl: "50%"}
				}}>
					
					<Typography variant="h6" sx={{ 
						color: "#D2D4D5",
						textAlign: { xs: "center", sm: "center", md: "left", lg: "left", xl: "left"},
						pl: {xs: 0, sm: 0, md: 15, lg: 20, xl: 20  },
						pb: {xs: 2, sm: 2, md: 2, lg: 5, xl: 2 },
						fontSize: { xs: 20, sm: 25, md: 30, lg: 30, xl: 30 }
					}}>
						{/* Here is the typewrite effect*/}
						<Typewriters /> 
					
					</Typography>

					<Typography variant="h2" sx={{ 
						color: "#9f73ab", 
						textAlign: { xs: "center", sm: "center", md: "left", lg: "left", xl: "left"},
						pl: {xs: 0, sm: 0, md: 15, lg: 20, xl: 20  },
						pb: {xs: 2, sm: 2, md: 2, lg: 2, xl: 2 },
						fontSize: { xs: 50, sm: 70, md: 80, lg: 80, xl: 80 } 
					}}> 
						Welcome.
					</Typography>
					

					{/* 
						The bio itself is placed in a box to add margin offset...
						for some reason the margin adjust only affected the 1st row...
						without placing the typography class in some container...
					*/}
					<Box sx={{ 
						display: 'flex', 
						marginLeft: { xs: '15%', sm: '10%', md: '30%', lg: '30%', xl: '30%' },
						width: { xs: "80%", sm: "80%", md: "80%", lg: "70%", xl: '70%' }
						
					}}>
						<Typography variant="h2" sx={{
							color: "#D2D4D5",
							fontSize: { xs: 15, sm: 20, md: 20, lg: 20, xl: 20 },
						}}>
							I am a Senior Data Analyst working for the largest retailer in the world, Walmart.
							<br/><br/> 
							In my free time I love to skateboard, experiment with new technologies and tinker with application design.
							<br/><br/>
							Check out my project portfolio here to see some of my work, and feel free to connect with me on linkedIn or message me privately via the mail icon above.

						</Typography>
					</Box>

				</Grid>
				
				{/*
					Moved Carousel logic to a component file for easier management...
					Check that out if changing..
				*/}
				<Box sx={{ 
					display: "flex", 
					flexDirection: "column",
					justifyContent: "space-evenly",
					width: {xs: '80%', sm: '80%', md: '40%', lg: '40%', xl: '40%'},
					pl: {xs: 5, sm: 8, md: 10, lg: 5, xl: 10  },
					pt: {xs: 5, sm: 8, md: 10, lg: 5, xl: 10  }

				}}>
					<Typography variant="h5" sx={{color: "#9f73ab", alignSelf: "center", p: 1 }}> Projects </Typography>
					<div><CustomCarousel items={projectsList} /></div>
				</Box>
					
			</Box>

		</Container>
  );
}

export default MainPage;

