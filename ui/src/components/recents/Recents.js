import React from 'react';
import cardImage from "../../static/card.jpg";
import { Box, Grid } from "@mui/material";
import Card from '../card/Card';

const Recents = () => {
  return (
    <Box>
        <Grid container>
            <Grid item md={6} xs={12}>
              <Card cardImage={cardImage} />
            </Grid>
            <Grid item sx={{ background: "green" }}>
                Item2
            </Grid>
        </Grid>
    </Box>
  )
}

export default Recents