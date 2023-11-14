import {useEffect,useState} from "react";import { styled } from '@mui/material/styles';
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

function Charging(props) {
  const [info,setInfo] = useState(props.info);
  
  useEffect(() => {
    setInfo(props.info);
  }, [props]);
  
    return (
        <>

        <Item sx={{minHeight:'350px'}} elevation="0">
            <Grid container spacing={4} sx={{marginTop:'10px'}}>
            
              {Object.keys(info).map((category, index) => (
                <>
                  <Grid xs={4} key={index}>
                    <p>
                      <b>{info[category].name}:</b><br/>{info[category].data}
                    </p>
                  </Grid>
                  </>
              ))}

            </Grid>
        </Item>

        </>
  );
}

export default Charging;

/*

<Grid xs={4}>
                <p> <b>Max Charging Power:</b> <br/>{info.MaxChargingPower}</p>
                </Grid>
                <Grid xs={4}>
                <p> <b>Charging speed:</b> <br/>{info.ChargingSpeed}</p>
                </Grid>
                <Grid xs={4}>
                <p> <b>Type of payment: </b> <br/>{info.TypeOfPayment}</p>
                </Grid>
                */