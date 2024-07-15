import React from "react";
import { Container, Typography, Box, Button, createTheme, ThemeProvider, Paper } from "@mui/material";
import { Link } from "react-router-dom";

// Images
import PipeLine from "../assets/etl.png"
import Dashboard from "../assets/etldashboard.png"

export const theme = createTheme({
  palette: {
    primary: {
      main: '#9f73ab'
    },
  },
});

function P3() {
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

				<Typography variant="h6" sx={{ color: "#D2D4D5", pt: 5, justifyContent: "center", textAlign: "center" }}>
						AWS Web Scraping Data Pipeline & Streamlit Dashboard
					<br/>
					<a href="https://github.com/dbo-keeganpatton/retail_data_pipeline"> Git Repo </a>
					<br/>
					<a href="https://skateshoeretail.streamlit.app/"> Dashboard </a>
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
					<Box sx={{ display: "flex", flexDirection: { xs: 'column', md: 'row' }, alignItems: {xs: 'center', md: 'row' }, p: 1}}>
						<Typography variant="h6" sx={{ 
							color: "#D2D4D5", 
							fontSize: {xs: 18, sm: 18, md: 14, lg: 18, xl: 18}, 
							pt: 3,
							pb: 1
						}}> 
							An automated data pipeline which uses Selenium and BeautifulSoup to gather retail data from two prominent websites. This script is 
							executed procedurally via a cron job running in an EC2 instance. The data is then stored in a Postgres instance within AWS RDS. AWS
							Secret manager is used to securely manage secrets across applicable microservices used for this pipeline.
						</Typography>
						
						<Box component="img" src={PipeLine} sx={{ maxWidth: {xs: "90%", md: "40%"}, pl: {xs: 0, md: 6} }} />			
					</Box>

					<Typography variant="h6" sx={{ 
						color: "#D2D4D5", 
						fontSize: {xs: 18, sm: 18, md: 14, lg: 18, xl: 18}, 
						pt: 3 ,
						pb: 1
					}}> 
						The compiled data stored in our RDS database is then used to create a front end dashboard utilizing the Streamlit library. This allows for 
						efficent tracking of price tends and other common metrics related to retail items.
					</Typography>
					
					<Paper elevation={6} sx={{
						bgcolor: "#1b2430",
						margin: "2%",
						maxWidth: {xs: "100%", md: "70%"}
					}}>

					<Box component="img" src={Dashboard} sx={{ maxWidth: '100%' }} />			
					</Paper>

				</Box>								      
			</Container>
		</ThemeProvider>
  );
}

export default P3;

