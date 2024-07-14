import React from "react";
import { Container, Typography, Box, Button, createTheme, ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";

// Images
import DarkOura from "../assets/DarkOura.png"
import Dashboard from "../assets/sample.png"

export const theme = createTheme({
  palette: {
    primary: {
      main: '#9f73ab'
    },
  },
});

function P2() {
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

				<Typography sx={{ color: "#D2D4D5", pt: 5, justifyContent: "center" }}>
					<a href="https://oura-api-client.streamlit.app/" style={{color: "inherit"}}> 
						Dark Oura  
					</a>
					<br/>
					<a href="https://oura-api-client.streamlit.app/"> Check out the app here </a>
				</Typography>
				<br/>
				
					
				{/* 
					Here are the images and their explanations, really just a copy of what can...
					be found in the github for this project. This way it is all consolidated to...
					the portfolio site itself...
				*/}
				<Box sx={{ 
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					
				}}>

					<Typography variant="h6" sx={{ 
						color: "#D2D4D5", 
						fontSize: {xs: 18, sm: 18, md: 14, lg: 18, xl: 18}, 
						pt: 3,
						pb: 1
					}}> 
						Automated self service analytics pipeline using the 
						<a href="https://cloud.ouraring.com/v2/docs"> Oura Ring V2 API</a> and <a href="https://docs.streamlit.io/">Streamlit</a>.
						The user can obtain an API token from oura directly and generate using that. Secrets are used for the API
						call but are not stored in any way.
					</Typography>
					
					<Box component="img" src={DarkOura} sx={{ width: '80%', maxWidth: '80%' }} />			
						
					<Typography variant="h6" sx={{ 
						color: "#D2D4D5", 
						fontSize: {xs: 18, sm: 18, md: 14, lg: 18, xl: 18}, 
						pt: 3 ,
						pb: 1
					}}> 
						Biometric data is extracted via a custom package I made, <code style={{color: "green"}}>Ourapi.py</code>, that standardizes programattic extraction of data
						from the Oura Ring V2 API. This data is then processed using pandas and stored in memory within the Streamlit app. The data is visualized
						into 3 distinct categories, sleep, stress and activity. The user can define a time frame of data to pull upon extraction.
					</Typography>
					<Box component="img" src={Dashboard} sx={{ width: '80%', maxWidth: '80%' }} />			
				
				</Box>								      
			</Container>
		</ThemeProvider>
  );
}

export default P2;

