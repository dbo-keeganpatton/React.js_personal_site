
import React from 'react';
import { Container, Grid, Typography, Box } from "@mui/material";
import Typewriters from "../components/typewriter.js";
import { Link } from 'react-router-dom';

// Images
import topRightBorder from "../assets/rightCorner.svg";
import topLeftBorder from "../assets/LeftCorner.svg";
import webMailIcon from "../assets/mail.svg";
import linkedInIcon from "../assets/Linkedin.svg";
import gitHubIcon from "../assets/gitHub.svg";

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
					marginRight: "-5%",
					width: { xs: "40%", sm: "50%", md: "50%", lg: "50%", xl: '50%' }
					
				  }}>
							<Link to="/contact">
								<img src={webMailIcon} style={{ width: '60%', padding: '0 5px' }} alt="Web Mail Icon" />
							</Link>
							<a href="https://www.linkedin.com/in/keeganpatton/" target="_blank" rel="noreferrer">
								<img src={linkedInIcon} style={{ width: '46%', padding: '0 5px' }} alt="LinkedIn Icon" />
							</a>
							<a href="https://github.com/dbo-keeganpatton" target="_blank" rel="noreferrer">
								<img src={gitHubIcon} style={{ width: '55%', padding: '0 5px', marginLeft: '-30%' }} alt="GitHub Icon" />
							</a>
				</Box>

				<img src={topRightBorder} style={{ width: '20%' }} alt="Top Right Border" />
			</Grid>



			{/* Welcome Message & Bio */}
			<Typography variant="h3" sx={{ 
				color: "#9f73ab", 
				textAlign: { xs: "center", sm: "center", md: "left", lg: "left", xl: "left"},
				pl: {xs: 0, sm: 0, md: 20, lg: 20, xl: 20  },
				pt: {xs: 5, sm: 10, md: 0, lg: 0, xl: 0 },
				fontSize: { xs: 50, sm: 80, md: 80, lg: 80, xl: 80 } 
			}}> 
				Welcome.
			</Typography>

			<Typography sx={{ 
				color: "white",
				textAlign: { xs: "center", sm: "center", md: "left", lg: "left", xl: "left"},
				pl: {xs: 0, sm: 0, md: 22, lg: 22, xl: 22  },
				pt: {xs: 2, sm: 5, md: 0, lg: 0, xl: 0 }
			}}>
				{/* Here is the typewrite effect*/}
				<Typewriters /> 
			
			</Typography>

		</Container>
  );
}

export default MainPage;

