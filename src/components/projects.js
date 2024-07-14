import React from "react";
import { Typography, Container, List, ListItem, Button, ThemeProvider } from "@mui/material";
import { theme } from "../pages/p1.js"
import { Link } from "react-router-dom";


// Styles 
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



// Actual Pages 
const p1 = (
	<ThemeProvider theme={theme}>
	<Container>
		
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
		
		<Typography variant="h2" sx={ParagraphStyle}> 
			A web development project written in Python and developed with Flask.
		</Typography>
		
		<List sx={ListStyle}>
			<ListItem> // Full Stack Development </ListItem>
			<ListItem> // Python </ListItem>
			<ListItem> // SQLAlchemy </ListItem>
			<ListItem> // Jinja </ListItem>

		</List>
	
	</Container>
	</ThemeProvider>
);




const p2 = (
	<ThemeProvider theme={theme}>
	<Container>
		
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
		
		<Typography variant="h2" sx={ParagraphStyle}> 
			Automated Self Service Analytics for Oura Ring Biometrics.
		</Typography>
		
		<List sx={ListStyle}>
			<ListItem> // Process Automation </ListItem>
			<ListItem> // Data Visualization </ListItem>
			<ListItem> // ETL Processing </ListItem>
			<ListItem> // Preprocessing </ListItem>

		</List>
	
	</Container>
	</ThemeProvider>);



const p3 = (
	<Typography variant="h1" sx={HeaderStyle}>
	This is the third project
	</Typography>
);



const p4 = (
	<Typography variant="h1" sx={HeaderStyle}>
	This is the fourth project
	</Typography>
);



export { p1, p2, p3, p4 };
