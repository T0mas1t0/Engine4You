/* eslint-disable react/prop-types */
import {useState,useEffect} from "react";
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

function Equipment(props) {
  const [info,setInfo] = useState(props.info);
  
  useEffect(() => {
    setInfo(props.info);
  }, [props]);

    return (
        <>

        <Item sx={{minHeight:'350px'}} elevation="0">
            <Grid container spacing={2} sx={{marginTop:'10px'}}>
                <Grid xs={1}></Grid>
                <Grid xs={1}></Grid>
                
            </Grid>
            <div>
              {Object.keys(info).map((category, index) => (
                <section key={index}>
                  <h2>{info[category].name}</h2>
                  <hr/>
                  <p>
                    {info[category].list.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </p>
                </section>
              ))}
            </div>
                
                
        </Item>

        </>
  );
}

export default Equipment;
