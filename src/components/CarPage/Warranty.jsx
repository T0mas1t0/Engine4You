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

function Warranty(props) {
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
                      <b>{info[category].title}:</b><br/>{info[category].description}
                    </p>
                  </Grid>
                  </>
              ))}

            </Grid>
        </Item>

        </>
  );
}

export default Warranty;