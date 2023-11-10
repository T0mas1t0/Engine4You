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

function Dimensions() {

    return (
        <>

        <Item sx={{minHeight:'350px'}} elevation="0">
            <Grid container spacing={2} sx={{marginTop:'10px'}}>
                <Grid xs={4}>
                <p><b>Overall width:</b></p>
                <p> - Mirrors folded: 1933 mm</p>
                <p> - Extended mirrors: 2089 mm</p>
                </Grid>
                <Grid xs={4}>
                <p> - <b>Total length:</b> 4720mm</p>
                <p> - <b>Total height:</b> 1441mm</p>
                <p> - <b>Ground clearance:</b> 138mm</p>
                </Grid>
                <Grid xs={4}>
                <p> - <b>Seats:</b> 5 adults</p>
                <p> - <b>Load:</b> 682 liters</p>
                <p> - <b>Weight:</b> 1828 kg</p>
                </Grid>
                
            </Grid>


          
        
                
        </Item>

        </>
  );
}

export default Dimensions;