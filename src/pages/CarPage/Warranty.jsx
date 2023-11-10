import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import motor from '../../assets/motor.png';
import traccion from '../../assets/Traccion.png';
import gearBox from '../../assets/caixa_vel.png';


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Warranty() {

    return (
        <>

        <Item sx={{minHeight:'350px'}} elevation="0">
            <Grid container spacing={2} sx={{marginTop:'10px'}}>
              <Grid xs={4}>
                <p> <b>Vehicle basics:</b> <br/>4 years or 80,000 km, whichever comes first</p>
                </Grid>
                <Grid xs={4}>
                <p> <b>Battery and drive unit:</b> <br/>8 years or 192,000 km, whichever comes first</p>
                </Grid>
                <Grid xs={4}>
                
                </Grid>
                
            </Grid>


          
        
                
        </Item>

        </>
  );
}

export default Warranty;