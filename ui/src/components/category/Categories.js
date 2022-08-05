import React from 'react';
import kidsImage from "../../static/kids.jpg";
import menImage from "../../static/men.jpg";
import womenImage from "../../static/women.jpg";
import { Box, Stack, styled, Typography } from '@mui/material';


const StyledBox = styled(Box)({
 height: 200,
 width: "100%",
 cursor: "pointer",
})

const StyledTypography = styled(Typography)({
    margin: "25% 50px 25% 50px",
    backgroundColor: "white",
    opacity: "0.8"
})

const Categories = () => {
  return (
    <Box>
        <Stack direction="row" spacing={4}>
          <StyledBox sx={{backgroundImage: `url(${kidsImage})`}}>
            <StyledTypography align="center" variant="h3">
                kids
             </StyledTypography>
          </StyledBox>
          <StyledBox sx={{backgroundImage: `url(${menImage})`}}>
            <StyledTypography align="center" variant="h3">
                Men
                </StyledTypography>
                </StyledBox>
          <StyledBox sx={{backgroundImage: `url(${womenImage})`}}>
            <StyledTypography align="center" variant="h3">
                Women
                </StyledTypography>
                </StyledBox>
        </Stack>
    </Box>
  )
}

export default Categories