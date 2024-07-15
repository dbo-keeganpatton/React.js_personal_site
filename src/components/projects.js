import React from "react";
import { Typography, Container, List, Box, ListItem, Button, ThemeProvider } from "@mui/material";
import { theme } from "../pages/p1.js"
import { Link } from "react-router-dom";


{/* Styles */} 
const HeaderStyle = { 
	color: "#9f73ab",
	fontSize: { xs: 15, sm: 20, md: 20, lg: 20, xl: 20 },
	pt: 1
}

const ParagraphStyle = { 
	color: "#D2D4D5",
	fontSize: { xs: 15, sm: 20, md: 20, lg: 20, xl: 20 },
}

const ListStyle = {
	color: "#a6d189",
	display: "flex",
	flexDirection: "column",
	maxHeight: "10%",
	fontSize: { xs: 15, sm: 20, md: 10, lg: 10, xl: 12 }
}



{/* Actual Pages */}
const p1 = (
	<ThemeProvider theme={theme}>
	<Container>
		
		<Box sx={{ display: "flex",  justifyContent: "center" }}>
		<Link to="p1" sx={{ p: "10px" }}>
			<Button variant="outlined" size="small" sx={{ 
					fontSize: 14, 
					height: 25,
					p: "10px",
					m: "10px",
			}}> 
				Branch Library 
			</Button>
		</Link>
		</Box>

		<Typography variant="h2" sx={ParagraphStyle}> 
			A web development project written in Python and developed with Flask.
		</Typography>
	
		<Typography>
		<List sx={ListStyle}>
			<ListItem> // Full Stack Development </ListItem>
			<ListItem> // Python </ListItem>
			<ListItem> // SQLAlchemy </ListItem>
			<ListItem> // Jinja </ListItem>

		</List>
		</Typography>

	</Container>
	</ThemeProvider>
);




const p2 = (
	<ThemeProvider theme={theme}>
	<Container>
		
		<Box sx={{ display: "flex",  justifyContent: "center" }}>
		<Link to="p2" sx={{ p: "10px" }}>
			<Button variant="outlined" size="small" sx={{ 
					fontSize: 14, 
					height: 25,
					p: "10px",
					m: "10px",
			}}> 
				Dark Oura 
			</Button>
		</Link>
		</Box>	
		
		<Typography variant="h2" sx={ParagraphStyle}> 
			Automated Self Service Analytics for Oura Ring Biometrics.
		</Typography>
	
		<Typography>
		<List sx={ListStyle}>
			<ListItem> // Process Automation </ListItem>
			<ListItem> // Data Visualization </ListItem>
			<ListItem> // ETL Processing </ListItem>
			<ListItem> // Preprocessing </ListItem>

		</List>
		</Typography>

	</Container>
	</ThemeProvider>);



const p3 = (
	<ThemeProvider theme={theme}>
	<Container>
		
		<Box sx={{ display: "flex",  justifyContent: "center" }}>	
		<Link to="p3" sx={{ p: "10px" }}>
			<Button variant="outlined" size="small" sx={{ 
					fontSize: 14,
					height: {xs: 50, md: 25},
					p: "10px",
					m: "10px",
			}}> 
				AWS Web Scraping Pipeline 
			</Button>
		</Link>
		</Box>
		
		<Typography variant="h2" sx={ParagraphStyle}> 
			Web scraping pipeline using AWS services for compute and storage, and Dashboard created in Streamlit.
		</Typography>
	
		<Typography>
		<List sx={ListStyle}>
			<ListItem> // AWS (EC2, RDS, Secret Manager) </ListItem>
			<ListItem> // Web Automation & HTML Parsing </ListItem>
			<ListItem> // Data Visualization (Streamlit) </ListItem>
			<ListItem> // Linux </ListItem>

		</List>
		</Typography>

	</Container>
	</ThemeProvider>
);



const p4 = (
	<ThemeProvider theme={theme}>
	<Container>
		
		<Box sx={{ display: "flex",  justifyContent: "center" }}>	
		<Link to="p4" sx={{ p: "10px" }}>
			<Button variant="outlined" size="small" sx={{ 
					fontSize: 14,
					height: {xs: 45, md: 35},
					p: "10px",
					m: "10px",
			}}> 
				NLP Data Pipeline	
			</Button>
		</Link>
		</Box>
		
		<Typography variant="h2" sx={ParagraphStyle}> 
			Robust NLP pipeline leveraging Apache Airflow for orchestration, DBT for schema management, and Postgres DB for storage. NLTK
			is used for language processing & Sentiment Analysis.
		</Typography>
	
		<Typography>
		<List sx={ListStyle}>
			<ListItem> // Natural Language Processing </ListItem>
			<ListItem> // Data Orchestration </ListItem>
			<ListItem> // Data Warehousing </ListItem>
			<ListItem> // Text Mining </ListItem>
			<ListItem> // Automation </ListItem>

		</List>
		</Typography>

	</Container>
	</ThemeProvider>);



export { p1, p2, p3, p4 };
