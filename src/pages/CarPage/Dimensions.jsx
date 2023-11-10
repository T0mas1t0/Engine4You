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

function Dimensions(props) {
  const [info, setInfo] = React.useState(props.info);
  console.log(info);
    return (
        <>

        <Item sx={{minHeight:'350px'}} elevation="0">
            <Grid container spacing={2} sx={{marginTop:'10px'}}>
                <Grid xs={4}>
                <p><b>Overall width:</b></p>
                <p> - Mirrors folded: {info.OverallWidth.MirrorsFolded}</p>
                <p> - Extended mirrors: {info.OverallWidth.ExtendedMirrors}</p>
                </Grid>
                <Grid xs={4}>
                <p> - <b>Total length:</b> {info.MirrorsFolded}</p>
                <p> - <b>Total height:</b> {info.TotalHeight}</p>
                <p> - <b>Ground clearance:</b> {info.GroundClearance}</p>
                </Grid>
                <Grid xs={4}>
                <p> - <b>Seats:</b> {info.Seats}</p>
                <p> - <b>Load:</b> {info.Load}</p>
                <p> - <b>Weight:</b> {info.Weight}</p>
                </Grid>
                
            </Grid>


          
        
                
        </Item>

        </>
  );
}

export default Dimensions;