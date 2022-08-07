import React from 'react'
import { Box, Stack, Typography, styled } from '@mui/material'
import {Facebook, Instagram, Twitter} from '@mui/icons-material/';

const SocialBox = styled(Box)({
    display: "flex",
    gap: 10,
    color: "white",
  });

const Footer = () => {
  return (
    <Box sx={{ background:"black", height:"300px" }}>
        <Stack direction={{xs:"row", md:"row"}} p={8} >
            <Box flex={1} >
                <Typography v align="center"  color="white" sx={{ lineHeight:5 }}>
                        PRODUCTS
                    </Typography>
                    <Typography v align="center" variant="body2" color="white">
                        Bag
                    </Typography>
                    <Typography v align="center" variant="body2"  color="white">
                        Shoe
                    </Typography>
                    <Typography v align="center" variant="body2"  color="white">
                        Clothes
                    </Typography>
            </Box>
            <Box flex={1}>
                <Typography v align="center"  color="white" sx={{ lineHeight:5 }}>
                        EXPAND & Learn
                    </Typography>
                    <Typography v align="center" variant="body2"  color="white">
                        Partners
                    </Typography>
                    <Typography v align="center" variant="body2"  color="white">
                        Culture
                    </Typography>
                    <Typography v align="center" variant="body2"  color="white">
                        Enterprise services
                    </Typography>
            </Box>
            <Box flex={1}>
                <Typography v align="center"  color="white" sx={{ lineHeight:5 }}>
                        ABOUT BLOG
                    </Typography>
                    <Typography v align="center" variant="body2"  color="white">
                        Company
                    </Typography>
                    <Typography v align="center" variant="body2"  color="white">
                        Contact Us
                    </Typography>
                    <Typography v align="center" variant="body2"  color="white">
                        Events
                    </Typography>
            </Box>
        <Box>
        <Typography  align="center"  color="white" sx={{ lineHeight:5 }}>
           Follow us
          </Typography>
            <SocialBox>
            <Facebook/>
            <Instagram/>
            <Twitter/>
            </SocialBox>
        </Box>

        </Stack>
    </Box>
  )
}

export default Footer