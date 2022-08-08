import React from 'react';
import { Box, CardMedia, CardContent, Typography, Link } from '@mui/material';
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
  } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Card = ({ cardImage }) => {
  return (
    <Box>
        <Link href="http://fashionblog.s3-website-ap-southeast-2.amazonaws.com/" sx={{ textDecoration: "none"}}>
        <CardMedia
            component="img"
            height="100%"
            image={cardImage}
            alt="fashion icon"
        />
        <CardContent sx={{color:"black"}}>
            <ThemeProvider theme={theme}>
                <Typography gutterBottom variant="body1" align="center" component="div" color={"tomato"}>
                    Fashion Icon
                </Typography>
                <Typography gutterBottom variant="h5" align="center" component="div" >
                    Be yourself and make everyone love you
                </Typography>
                <Typography gutterBottom variant="body2" align="center" component="div" >
                    It's women love
                </Typography>
                <Typography variant="body1" align="center" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                </Typography>
            </ThemeProvider>
        </CardContent>
        </Link>
    </Box>
  )
}

export default Card