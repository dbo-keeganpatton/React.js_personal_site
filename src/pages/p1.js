import React from "react";
import { Container, Grid, Typography, Box, Button, createTheme, ThemeProvider } from "@mui/material";
import Dag from "../assets/version_ctrl.png"
import Database from  "../assets/db_model.png"
import { Link } from "react-router-dom";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#9f73ab'
    },
  },
});

function P1() {
  return (
		<ThemeProvider theme={theme}>
		<Container>
			
			{/* Return to main button... */}
			<Box display="flex" justifyContent="center" alignItems="center" sx={{
					mb: { xs: "10px", sm: "0px", md: "10px", lg: "-40px", xl: "0px"}
			}}>	
				<Link to="/">
					<Button variant="outlined" color="primary"> Return </Button>
				</Link>
			</Box>
			
			<Grid 
				container
				direction="row"
				justifyContent="space-between"
				alignItems="flex-start"
				spacing={2}
			>

				<Grid item xs={12} md={4}>
					<Box sx={{ 
						display: 'flex', 
						flexDirection: 'column', 
						justifyContent: 'space-between',
						alignItems: 'center',
						width: '100%',
					}}>
					
						<Typography sx={{ color: "#D2D4D5", pt: 5 }}>
							<a href="https://branchlibrary-8478c72f5159.herokuapp.com" style={{color: "inherit"}}> 
								Branch Library 
							</a>
						</Typography>
						
						
						{/* 
							Here are the images and their explanations, really just a copy of what can...
							be found in the github for this project. This way it is all consolidated to...
							the portfolio site itself...
						*/}
						<Box sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: "center",
							alignItems: "center",
							padding: '10%',
							width: "100%",
							gap: 1,
							'& img': {
								width: '100%', 
								height: 'auto'
							  }
						}}>

							<Typography variant="h6" sx={{ color: "#D2D4D5", fontSize: {xs: 18, sm: 18, md: 14, lg: 18, xl: 18} }}> 
								User Version Control system flowchart. Users can edit and submit merge requests on other user content.
								Forks of stories can also be made and versioned individually. 							
							</Typography>
							<img src={Dag} alt="version_control_system" />
							
							<Typography variant="h6" sx={{ color: "#D2D4D5", fontSize: {xs: 18, sm: 18, md: 14, lg: 18, xl: 18} }}> 
								Database is implemented using SQLite. The schema consists of User credentials, Stories, their versions, and 
								merge requests. Database enables both the version control system and secure user authentication.
							</Typography>							
							<img src={Database} alt="database_schema"/>
						
						</Box>
					
					</Box>
				</Grid>
				
				
				{/* 
					This is the embedded app itself...
					It should be right aligned when the screen is full..
				*/}
				<Grid item xs={12} md={8}>
					<Box sx={{
						pt: {xs: "0%" , sm:"0%", md: "10%", lg: "20%", xl: "10%" },
						pl: {xs: "0%" , sm:"0%", md: "0%", lg: "10%", xl: "10%" }
					}}>
						<Typography sx={{ textAlign: "center", color: "#D2D4D5" }}> Explore with the App here! </Typography>
						<iframe
							src="https://branchlibrary-8478c72f5159.herokuapp.com/"
							title="Branch Library"
							style={{ borderRadius: 5, borderColor: "#9f73ab", borderWidth: 5, width: "100%", height: "70vh" }}
							allowFullScreen
						/>
					</Box>
				</Grid>
      
			</Grid>
    
		</Container>
		</ThemeProvider>
  );
}

export default P1;

