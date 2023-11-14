import {useEffect,useState} from "react";
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
  const [info,setInfo] = useState(props.info);
  
  useEffect(() => {
    setInfo(props.info);
  }, [props]);

    return (
        <>

        <Item sx={{minHeight:'350px'}} elevation="0">
            <Grid container spacing={2} sx={{marginTop:'10px'}}>
                <Grid xs={4}>
                <p><b>Overall width:</b></p>
                <p> - Mirrors folded: {info.MirrorsFolded.description}</p>
                <p> - Extended mirrors: {info.ExtendedMirrors.description}</p>
                </Grid>
                <Grid xs={4}>
                <p> - <b>Total length:</b> {info.TotalLength.description}</p>
                <p> - <b>Total height:</b> {info.TotalHeight.description}</p>
                <p> - <b>Ground clearance:</b> {info.GroundClearance.description}</p>
                </Grid>
                <Grid xs={4}>
                <p> - <b>Seats:</b> {info.Seats.description}</p>
                <p> - <b>Load:</b> {info.Load.description}</p>
                <p> - <b>Weight:</b> {info.Weight.description}</p>
                </Grid>
                
            </Grid>

        </Item>

        </>
  );
}

export default Dimensions;