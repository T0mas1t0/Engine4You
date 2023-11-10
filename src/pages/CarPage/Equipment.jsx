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

function Equipment() {

    return (
        <>

        <Item sx={{minHeight:'350px'}} elevation="0">
            <Grid container spacing={2} sx={{marginTop:'10px'}}>
                <Grid xs={1}></Grid>
                <Grid xs={1}></Grid>
                
            </Grid>
                <h3>Infotainment System</h3>
                <hr/>
                <p>Front Display 15,4"</p>
                <p>Rear Display 8''</p>
                <p>Google Maps</p>
                <p>Netflix, Disney Plus, ...</p>
                <p>Spotify</p>
                
                <h3>Sound System</h3>
                <hr/>
                <p>Premium Sound</p>
                <p>17 speakers</p>

                <h3>Driving support system</h3>
                <hr/>
                <p>Auto Pilot Sound</p>

                <h3>passenger compartment</h3>
                <hr/>
                <p>Heated and Ventilated seats</p>
                <p>Wireless charging</p>
                
        </Item>

        </>
  );
}

export default Equipment;