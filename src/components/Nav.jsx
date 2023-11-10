import React from "react";
import { NavLink } from "react-router-dom"
import Empty from "../pages/Empty";
import Logo from "../assets/Logo.jpg"
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import ListAltIcon from '@mui/icons-material/ListAlt';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ClearIcon from '@mui/icons-material/Clear';

import {Car1,Car2} from '../mockData/mockData';
import carPhoto1 from '../assets/TeslaModel3_LR.png';
import carPhoto2 from '../assets/VOLVO_EX30.png';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function Nav() {
    const [state, setState] = React.useState({
        right: false,
      });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };

    const comparatorList=[Car1,Car2];
      console.log(comparatorList);
    const list = (anchor) => (
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
                          <Button><VisibilityIcon/></Button>
                          <Button color="error"><ClearIcon/></Button>
                          </Stack>
                        </Grid>
                        
                    </Grid>
          
                    
                    </>
            ))}
          </List>
        </Box>
      );

    return (
        <header>
            <img src={Logo} alt="logoFCT"/>
            <nav id="navBar">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/carPage"}>Cars</NavLink>
                <NavLink to={/*Put uri of page you want*/Empty}>More</NavLink>
                <NavLink to={/*Put uri of page you want*/Empty}>Help</NavLink>
                <NavLink to={/*Put uri of page you want*/Empty}>About</NavLink>
                <NavLink to={"/compare"}>Compare</NavLink>
                <NavLink to={/*Put uri of page you want*/Empty}>


  
                    <React.Fragment key={'right'}>

                    <Button onClick={toggleDrawer('right', true)}>
                        <ListAltIcon/>
                    </Button>

                    <Drawer
                        anchor={'right'}
                        open={state['right']}
                        onClose={toggleDrawer('right', false)}
                    >
                        {list('right')}
                    </Drawer>
                    </React.Fragment>




                </NavLink>
                
            </nav>
        </header>
    );
}

export default Nav;