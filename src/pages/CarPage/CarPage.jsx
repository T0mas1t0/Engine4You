import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CarSpecsTabs from '../../components/CarSpecsTabs';
import carPhoto from '../../assets/TeslaModel3_LR.png';
import { Carpenter } from "@mui/icons-material";
import {Car1,Car2} from '../../mockData/mockData';

import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

const fabStyle = {
    position: 'fixed',
    bottom: 16,
    left: 16,
  };

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
                <h1>{Car1.model} ({Car1.price} €)</h1>
            </center>

            <Box sx={{ flexGrow: 1, marginTop: 10 }}>
                <Grid container spacing={2}>
                <Grid xs={12} md={6} lg={6}>
                    <center>
                        <img src={carPhoto} width={"80%"}/>
                    </center>
        
                </Grid>
                <Grid xs={12} md={6} lg={6}>
                    <CarSpecsTabs info={Car1}/>
                </Grid>
                </Grid>
            </Box>
        </div>

        <Fab sx={fabStyle} variant="extended">
            <AddIcon sx={{ mr: 1 }} />
            Add to compare
        </Fab>

        </>
  );
}

export default CarPage;