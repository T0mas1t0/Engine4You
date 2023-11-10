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

function MotorInfo(props) {
  
    const [info, setInfo] = React.useState(props.info);

    return (
        <>

        <Item sx={{minHeight:'350px'}} elevation="0">
            <Grid container spacing={2} sx={{marginTop:'10px',marginBottom:'10px'}}>
                <Grid xs={1}></Grid>
                <Grid xs={10}>
                    <Item sx={{height:"100px"}} elevation="12">


                    <Grid container spacing={2}>
                    <Grid xs={4}>
                        <img src={motor} />
                    </Grid>
                    <Grid xs={4}>
                        <img src={gearBox} />
                    </Grid>
                    <Grid xs={4}>
                        <img src={traccion} />
                    </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                    <Grid xs={4}>
                        <span><b>{info.motor}</b></span>
                    </Grid>
                    <Grid xs={4}>
                        <span><b>{info.gearBox}</b></span>
                    </Grid>
                    <Grid xs={4}>
                        <span><b>{info.traccion}</b></span>
                    </Grid>
                    </Grid>

                    </Item>
                </Grid>
                <Grid xs={1}></Grid>
            </Grid>

            <Grid>
                <Grid container spacing={2}>
                    <Grid xs={4}>{info.Range}</Grid>
                    <Grid xs={4}>{info.Consumption}</Grid>
                    <Grid xs={4}>{info.CO2emissions}</Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid xs={4}><b>Range</b></Grid>
                    <Grid xs={4}><b>Consumption</b></Grid>
                    <Grid xs={4}><b>CO2 emissions</b></Grid>
                </Grid>
            </Grid>

            <Grid>
                <Grid container spacing={2}>
                    <Grid xs={4}>{info.aceleration}</Grid>
                    <Grid xs={4}>{info.Power}</Grid>
                    <Grid xs={4}>{info.TopSpeed}</Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid xs={4}><b>0-100 km/h</b></Grid>
                    <Grid xs={4}><b>Power</b></Grid>
                    <Grid xs={4}><b>Top Speed</b></Grid> 
                </Grid>
            </Grid>
            
        </Item>

        </>
  );
}

export default MotorInfo;