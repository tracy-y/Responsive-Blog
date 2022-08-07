import { Box, CardMedia, Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';
import cardImage from "../../static/card.jpg";
import womenImage from "../../static/women2.jpg";
import Rightbar from '../rightbar/Rightbar';



const Details = () => {
  return (
    <Box>
        <Box
        sx={{
          backgroundImage:`url(${cardImage})`,
          backgroundPosition: " center ",
          backgroundSize: "Cover",
          height: "250px",
        }}>
        <Typography variant="h2" color="black" align="center" sx={{ fontWeight: 900, padding: 10 }}>
          Clicked Post Title
        </Typography>
        </Box>
        <Container>
         <hr />
         <Stack direction={{xs:"column", md:"row"}} spacing={{ xs: 1, sm: 2, md: 8 }} mt={8}>
            <Box flex={3} sx={{ padding: "18px 100px 100px 100px"}}>
                <Typography variant="body1" align="center" color="gray" m={4}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                    </Typography>
                    <CardMedia
                            component="img"
                            height="300px"
                            image={womenImage}
                            alt="fashion icon"
                        />
                    <Typography variant="h4"  align="center" mt={4}>
                wait for it wait
                </Typography>
                <Typography variant="body1" align="center" color="gray" sx={{ fontweight: 900 }}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                    </Typography>
            </Box>
            <Box flex={1}>
                <Rightbar/>
            </Box>
         </Stack>
        </Container>
    </Box>
  );
};

export default Details