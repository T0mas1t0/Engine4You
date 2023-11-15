
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Search from '../components/Search/Search';
import CarouselSearch from '../components/CarrousselSearch';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function Home() {
    return (
        <Box sx={{ flexGrow: 1, marginTop:"100px" }}>
          <Grid container spacing={2}>
            <Grid xs={12} md={4}>

              <Search/>

            </Grid>
            <Grid xs={12} md={8}>

             <CarouselSearch/>
              
            </Grid>
            
          </Grid>
        </Box>
    );
}

export default Home;