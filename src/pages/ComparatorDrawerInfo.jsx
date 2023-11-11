import React from 'react'
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

import carPhoto1 from '../assets/TeslaModel3_LR.png';
import carPhoto2 from '../assets/VOLVO_EX30.png';
import Tooltip from '@mui/material/Tooltip';

import Grid from '@mui/material/Unstable_Grid2';


import VisibilityIcon from '@mui/icons-material/Visibility';
import ClearIcon from '@mui/icons-material/Clear';



export default function ComparatorDrawerInfo({anchor,toggleDrawer,comparatorList}) {
  

  return (
    <>
    <Box
      sx={{ width: "600px" }}
      
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
     
      <center>

      <h1>Comparator List</h1>
      </center>
      <Divider />
      <List>
      
        {Object.keys(comparatorList).map((category, index) => (


          <>
                <Grid container spacing={2}>
                
                    <Grid xs={5}>
                    
                        {
                            (comparatorList[category].photo==="TeslaModel3_LR.png")?
                            <img src={carPhoto1} height={"90%"} width={"100%"}/>
                            :
                            <img src={carPhoto2} height={"90%"} width={"100%"}/>
                        }
                    
                    </Grid>
                    <Grid xs={4}>

                      <Stack spacing={0}>
                        <b>{comparatorList[category].model}</b>
                        <p>{comparatorList[category].price} €</p>
                        {comparatorList[category].motorInfo.motor.description}
                      </Stack>
                    
                    </Grid>
                    <Grid xs={3}>
                      <Stack spacing={0}>
                      <Tooltip title="More info">
                        <Button><VisibilityIcon/></Button>
                      </Tooltip>
                      <Tooltip title="Remove from List">
                      <Button color="error"><ClearIcon/></Button>
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
