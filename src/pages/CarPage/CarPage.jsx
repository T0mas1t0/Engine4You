import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CarSpecsTabs from '../../components/CarSpecsTabs';
import carPhoto from '../../assets/TeslaModel3_LR.png';

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function CarPage() {

    return (
        <>

        <div>
            <center>
                <h1>Tesla Model 3 LR (48.600 €)</h1>
            </center>

            <Box sx={{ flexGrow: 1, marginTop: 10 }}>
                <Grid container spacing={2}>
                <Grid xs={10} md={6}>
                    <center>
                        <img src={carPhoto} width={"80%"}/>
                    </center>
        
                </Grid>
                <Grid xs={10} md={5}>
                    <CarSpecsTabs/>
                </Grid>
                </Grid>
            </Box>
        </div>

        </>
  );
}

export default CarPage;