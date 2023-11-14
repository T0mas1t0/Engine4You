
/* eslint-disable react/prop-types */

import {useState,useEffect} from 'react'
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

import carPhoto1 from '../assets/TeslaModel3_LR.png';
import carPhoto2 from '../assets/VOLVO_EX30.png';
import Tooltip from '@mui/material/Tooltip';
import { NavLink } from "react-router-dom"

import Grid from '@mui/material/Unstable_Grid2';


import VisibilityIcon from '@mui/icons-material/Visibility';
import ClearIcon from '@mui/icons-material/Clear';



export default function ComparatorDrawerInfo({anchor,toggleDrawer,comparatorList}) {

  const [list, setList] = useState([]);

  function handleRemoveCar(index){
    console.log("handleRemoveCar");
    console.log(list);
    console.log(index);
    var tmp = list;
    tmp.splice(index, 1);
    setList(tmp.splice(index, 1));
  }

  

  
  useEffect(() => {
    console.log("UseEffect");
    console.log(list);
    console.log(comparatorList);
    if(list.length==0){
      setList(comparatorList);
    }

  }, [list]);


  return (
    <>
    <Box
      sx={{ width: "600px" }}
      
      //onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
     
      <center>

      <h1>Comparator List</h1>
      </center>
      <Divider />
      <List>
      
        {Object.keys(list).map((category, index) => (


          <>
                <Grid container spacing={2}>
                
                    <Grid xs={5}>
                    
                        {
                            (list[category].photo==="TeslaModel3_LR.png")?
                            <img src={carPhoto1} height={"90%"} width={"100%"}/>
                            :
                            <img src={carPhoto2} height={"90%"} width={"100%"}/>
                        }
                    
                    </Grid>
                    <Grid xs={4}>

                      <Stack spacing={0}>
                        <b>{list[category].model}</b>
                        <p>{list[category].price} €</p>
                        {list[category].motorInfo.motor.description}
                      </Stack>
                    
                    </Grid>
                    <Grid xs={3}>
                      <Stack spacing={0}>
                      <Tooltip title="More info">
                        <Button>
                        <NavLink key={index} to={"/carPage/"+list[category].id} sx={{ my: 2, color: 'white', display: 'block', mr:10 }}>
                        <VisibilityIcon/>
                        </NavLink>
                        
                        
                        </Button>
                      </Tooltip>
                      <Tooltip title="Remove from List">
                      <Button color="error" onClick={() => handleRemoveCar(index)}><ClearIcon/></Button>
                      </Tooltip>
                      
                      </Stack>
                    </Grid>
                    
                </Grid>
      
                
                </>
        ))}
      </List>
    </Box>
    </>



  )
}
