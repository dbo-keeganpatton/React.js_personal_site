import React from "react";
import { Container, Grid, Typography } from "@mui/material";

function P1() {
  return (


		<Container sx={{
			display: "flex",
			flexDirection: "column"
		}}>

			
			<Grid 
				container
				direction="row"
				justifyContent="space-between"
				alignItems="flex-start"
				paddingTop="20px"
				sx={{flexDirection: { xs: "column", sm: "column", md: "row", lg: "row", xl: "row" }}}
			>
			
				<Typography sx={{ color: "#D2D4D5" }}> Branch Library </Typography>
			

				{/* 
					I want to embed my projects that are apps when I can..
					Honestly not sure if this is the best approach as I am...
					not entirely familiar with the disadvantages of using Iframes...
					This may change in future project implementations..
				*/}
				<iframe
					src="https://branchlibrary-8478c72f5159.herokuapp.com/"
					title="Branch Library"
					style={{ borderRadius: 20, width: "100%", height: "70vh" }}
					allowFullScreen
				/>

			</Grid>
			
		</Container>
  

  )

};




export default P1;

