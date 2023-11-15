
/* eslint-disable react/prop-types */

import {useState,useEffect} from 'react'
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

import Tooltip from '@mui/material/Tooltip';
import { NavLink } from "react-router-dom"

import Grid from '@mui/material/Unstable_Grid2';


import VisibilityIcon from '@mui/icons-material/Visibility';
import ClearIcon from '@mui/icons-material/Clear';



export default function ComparatorDrawerInfo({anchor,toggleDrawer}) {

  const [list, setList] = useState([]);

  function handleRemoveCar(index){

    var oldlist = JSON.parse(localStorage.getItem("compareList"));
    var tmp = oldlist;
    tmp.splice(index, 1);
    localStorage.setItem("compareList",JSON.stringify(tmp));
    setList(tmp);

  }

  
  useEffect(() => {
    var list = localStorage.getItem("compareList");
    if(list!=null){
      setList(JSON.parse(list));
    }


  }, []);


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
                    
                          <img src={list[category].photo} height={"90%"} width={"100%"}/>
                          
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
