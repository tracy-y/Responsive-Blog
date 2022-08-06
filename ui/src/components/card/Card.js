import { Box, CardMedia, CardContent, Typography } from '@mui/material';
import React from 'react';
import cardImage from "../../static/card.jpg";

const card = () => {
  return (
    <Box>
                <CardMedia
                    component="img"
                    height="50%"
                    image={cardImage}
                    alt="fashion icon"
                />
                <CardContent>
                <Typography gutterBottom variant="body1" align="center" component="div" color={"tomato"}>
                    Fashion Icon
                </Typography>
                <Typography gutterBottom variant="h5" align="center" component="div" >
                    Be yourself and make everyone love you
                </Typography>
                <Typography gutterBottom variant="body2" align="center" component="div" >
                    It's women love
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                </Typography>
                </CardContent>
    </Box>
  )
}

export default card