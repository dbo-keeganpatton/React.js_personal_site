import React from "react";
import { Container, Typography, Box, Button, createTheme, ThemeProvider, Paper } from "@mui/material";
import { Link } from "react-router-dom";

// Images
import PipeLine from "../assets/dataFlow.png"
import Viz from "../assets/SentimentHistogram.png"

export const theme = createTheme({
  palette: {
    primary: {
      main: '#9f73ab'
    },
  },
});

function P4() {
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
						Natural Language Processing Pipeline
					<br/>
					<a href="https://github.com/dbo-keeganpatton/thrasher_data_pipeline"> Git Repo </a>
					<br/>
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
							Extracts Q&A text from interview articles on <a href="www.Thrashermagazine.com.">Thrasher Magazine</a>. This text is placed into a local Postgres database and 
							further transformed through two DBT models. These models prep the data for langauge processing by removing punctuation and single instances of letters. 
							The prepped data is then extracted and processed to remove stop words and prep for tokenization. 
						</Typography>
						
						<Box component="img" src={PipeLine} sx={{ maxWidth: {xs: "90%", md: "40%"}, pl: {xs: 0, md: 6} }} />			
					</Box>

					<Typography variant="h6" sx={{ 
						color: "#D2D4D5", 
						fontSize: {xs: 18, sm: 18, md: 14, lg: 18, xl: 18}, 
						pt: 3 ,
						pb: 1
					}}> 
						Using NLTK, tokens are then evaluated for sentiment using the SentimentIntensityAnalyzer method and assigned a value ranging -1 to 1. This data is aggregated to an average of all sentiment values contained between questions and answers in the interview.
					</Typography>
					
					<Paper elevation={6} sx={{
						bgcolor: "#1b2430",
						margin: "2%",
						maxWidth: {xs: "100%", md: "70%"}
					}}>

					<Box component="img" src={Viz} sx={{ maxWidth: '100%' }} />			
					</Paper>

				</Box>								      
			</Container>
		</ThemeProvider>
  );
}

export default P4;
