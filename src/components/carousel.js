import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material'; 

const CustomCarousel = ({ items }) => {
    return (
        <Carousel sx={{ interval: "10000"}}>
            {items.map((item, i) => (
                <Paper elevation={6} sx={{
					bgcolor: "#1b2430",
					margin: "2%"	
				}}>
				   {item} 
                </Paper>
            ))}
        </Carousel>
    );
};

export default CustomCarousel;

