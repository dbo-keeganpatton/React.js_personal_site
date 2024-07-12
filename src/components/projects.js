import React from "react";
import { Typography } from "@mui/material";

{/*
<Link to="/contact">
<img src={webMailIcon} style={{ width: '60%', padding: '0 5px' }} alt="Web Mail Icon" />
</Link>
*/}


const style = { 
	color: "#D2D4D5",
	fontSize: { xs: 15, sm: 20, md: 20, lg: 20, xl: 20 }
}

const p1 = (
	<Typography variant="h1" sx={style}>
	This is the first project.
	</Typography>
);

const p2 = (
	<Typography variant="h1" sx={style}>
	This is the second project
	</Typography>
);

const p3 = (
	<Typography variant="h1" sx={style}>
	This is the third project
	</Typography>
);

const p4 = (
	<Typography variant="h1" sx={style}>
	This is the fourth project
	</Typography>
);



export { p1, p2, p3, p4 };
