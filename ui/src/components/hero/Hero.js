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
      backgroundAttachment: "fixed",
      backgroundSize: "Cover",
      height: 800,
      width: "100%",
      display:"flex",
      // justifyContent:"center",
      // clip: "rect(200px, 100%, 800px, 0)",
     }}>
      <Box sx={{ width:{xs:"100%", sm:"50%", md:"40%"}, paddingTop: {sx:5, sm:4, md:20}, paddingLeft: {sx:18, sm: 22, md:100}}}>
      {/* <Box  sx={{ width:{xs:"100%", sm:"50%", md:"40%"}, padding: {sx: 3, sm: 2, md: 20} }}> */}
       <Box sx = {{background: "white", opacity: "0.7"}}>
        <Typography variant="h6" color="tomato" align="center" pt={6}>
          Trending Styles
        </Typography>
        <Typography variant="h4" align="center" >
          Life is Boring without Fashion!
        </Typography>
        <Typography variant="h6" align="center" pb={6} >
          We love to change your style home ipsum
        </Typography>
       </Box>
       </Box>
      </Box>
     </Box>
  )
}

export default Hero