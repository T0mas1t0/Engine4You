/* eslint-disable react/prop-types */
import {useState,useEffect} from "react";
import { styled } from '@mui/material/styles';
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
  
    const [info,setInfo] = useState(props.info);

    useEffect(() => {
        setInfo(props.info);
      }, [props]);

    return (
        <>

        <Item sx={{minHeight:'350px'}} elevation="0">
            <Grid container spacing={2} sx={{marginTop:'10px',marginBottom:'10px'}}>
                <Grid xs={1} md={0}></Grid>
                <Grid xs={10} md={12}>
                    <Item sx={{height:"100px",borderRadius:"25px"}} elevation="3">


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
                        <span><b>{info.motor.description}</b></span>
                    </Grid>
                    <Grid xs={4}>
                        <span><b>{info.gearBox.description}</b></span>
                    </Grid>
                    <Grid xs={4}>
                        <span><b>{info.traccion.description}</b></span>
                    </Grid>
                    </Grid>

                    </Item>
                </Grid>
                <Grid xs={1} md={0}></Grid>
            </Grid>

            <Grid>
                <Grid container spacing={2}>
                    <Grid xs={4}>{info.Range.description}</Grid>
                    <Grid xs={4}>{info.Consumption.description}</Grid>
                    <Grid xs={4}>{info.CO2emissions.description}</Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid xs={4}><b>Range</b></Grid>
                    <Grid xs={4}><b>Consumption</b></Grid>
                    <Grid xs={4}><b>CO2 emissions</b></Grid>
                </Grid>
            </Grid>

            <Grid>
                <Grid container spacing={2}>
                    <Grid xs={4}>{info.aceleration.description}</Grid>
                    <Grid xs={4}>{info.Power.description}</Grid>
                    <Grid xs={4}>{info.TopSpeed.description}</Grid>
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