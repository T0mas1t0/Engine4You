
import { useState ,useEffect} from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import CarSpecsTabs from '../components/CarPage/CarSpecsTabs';
import carPhoto1 from '../assets/TeslaModel3_LR.png';
import carPhoto2 from '../assets/VOLVO_EX30.png';

import {Car1,Car2} from '../mockData/mockData';

import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { useParams } from 'react-router-dom';
import SimpleSnackbar from "../components/SimpleSnackbar";

const fabStyle = {
    position: 'fixed',
    bottom: 16,
    left: 16,
  };


function CarPage() {

    const {id} = useParams();
    const [car,setCar] = useState(Car1);

    const [open, setOpen] = useState(false);
    const [txt, setText] = useState("");
    const [severityType, setSeverityType] = useState("");

    const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

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


    function addToCompare(){
        
        

        var list = localStorage.getItem("compareList");
        if(list==null){
            console.log(car);
            localStorage.setItem("compareList",JSON.stringify([car]));
        }
        else{
            var oldlist = JSON.parse(localStorage.getItem("compareList"));
            var tmp= [];
            if(tmp.length==4){
                setText("A lista encontra-se cheia! (max.: 4 carros) ");
                setOpen(true);
                setSeverityType("error");
            }
            else{
                if(verifyList(oldlist)){
                    setText("Adicionado à Lista de comparação com Sucesso!");
                    setOpen(true);
                    setSeverityType("success");
                    oldlist.push(car);
                    localStorage.setItem("compareList",JSON.stringify(oldlist));
                }
                else{
                    setText("Carro já se encontra na lista!");
                    setOpen(true);
                    setSeverityType("error");
                }
            }
            
        }
        console.log(car);
    }

    function verifyList(oldlist){
        for(var i = 0;i<oldlist.length;i++){
            if(oldlist[i].id==car.id){
                return false;
            }
        }
        
        return true;
    }


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
                    <CarSpecsTabs car={car}/>
                </Grid>
                </Grid>
            </Box>
        </div>

        <Fab sx={fabStyle} variant="extended" onClick={addToCompare}>
            <AddIcon sx={{ mr: 1 }} />
            Add to compare
        </Fab>
        <SimpleSnackbar text={txt} handleClose={handleClose} open={open} severityType={severityType}/>
        </>
  );
}

export default CarPage;