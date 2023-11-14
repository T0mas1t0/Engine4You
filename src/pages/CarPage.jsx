
import React, { useState ,useEffect} from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CarSpecsTabs from '../components/CarPage/CarSpecsTabs';
import carPhoto1 from '../assets/TeslaModel3_LR.png';
import carPhoto2 from '../assets/VOLVO_EX30.png';

import {Car1,Car2} from '../mockData/mockData';

import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { useParams } from 'react-router-dom';

const fabStyle = {
    position: 'fixed',
    bottom: 16,
    left: 16,
  };


function CarPage() {

    const {id} = useParams();
    const [car,setCar] = useState(Car1);

    useEffect(() => {

        console.log("ID: "+id);
        if(id==1){
            setCar(Car1);
        }
        else{
            setCar(Car2);
        }
        console.log(car);
    
      }, [car,id]);





    return (
        <>

        <div>
            <center>
                <h1>{car.model} ({car.price} €)</h1>
            </center>

            <Box sx={{ flexGrow: 1, marginTop: 10 }}>
                <Grid container spacing={2}>
                <Grid xs={12} md={6} lg={6}>
                    <center>
                        {
                            id==1?
                            <img src={carPhoto1} width={"80%"}/>
                            :
                            <img src={carPhoto2} width={"80%"}/>
                        }
                    </center>
        
                </Grid>
                <Grid xs={12} md={6} lg={6}>
                    <CarSpecsTabs info={car}/>
                </Grid>
                </Grid>
            </Box>
        </div>

        <Fab sx={fabStyle} variant="extended">
            <AddIcon sx={{ mr: 1 }} />
            Add to compare
        </Fab>

        </>
  );
}

export default CarPage;