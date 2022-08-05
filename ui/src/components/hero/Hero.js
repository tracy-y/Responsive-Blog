import react from 'react';
import {Box, Typography} from '@mui/material';
import AndreyImage from "../../static/AndreyImage.jpg";

const Hero = () => {
  return (
   <Box> 
    <Typography align="center" variant="h3" sx={{ fontWeight: 900}}>Fashions<b style={{color:'red'}}>Blog</b></Typography>
    <Typography mb={1} align="center" variant="body2" sx={{ fontWeight: 100}}>
      We make you look the better of you!
      </Typography>
     <Box sx={{
      // position: "absolute",
      backgroundImage:`url(${AndreyImage})`,
      backgroundRepeat: "no-repeat",
      backgroundColor: "black",
      backgroundPosition: " center ",
      backgroundSize: "Cover",
      height: 800,
      width: "100%",
      // clip: "rect(200px, 100%, 800px, 0)",
     }}></Box>
     </Box>
  )
}

export default Hero