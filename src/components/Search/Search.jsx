import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import SearchAdvanced from './SearchAdvanced';
import {Cars} from '../../mockData/mockData';
import Autocomplete from '@mui/material/Autocomplete';
import { styled as St, lighten, darken } from '@mui/system';
import { NavLink } from "react-router-dom"


function Search() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const GroupHeader = styled('div')(({ theme }) => ({
    position: 'sticky',
    top: '-8px',
    padding: '4px 10px',
    color: theme.palette.primary.contrastText,
    backgroundColor:
      theme.palette.mode === 'light'
        ? lighten(theme.palette.primary.light, 0.9)
        : darken(theme.palette.primary.main, 0.2),h
  }));
  
  const GroupItems = styled('ul')({
    padding: 0,
  });

  const options = Cars.map((option) => {
    const firstLetter = option.brand.toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  function getId(nomeModelo){

    return Cars.find((car) => `${car.brand} ${car.model}` === nomeModelo).id;
  
  }
 

  const [selectedCar, setSelectedCar] = useState(null);

  const handleCarSelect = (event, value) => {
    setSelectedCar(value);
  };
  

    return (
      <>
        <Box sx={{ flexGrow: 1}}>
          <center>
          <Card id="FindMyCar" sx={{ maxWidth: 350, margin: 'auto' , border: '6px solid #555', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'}}>
            <CardContent /*sx={{height:"350px"}}*/>
              <h2>Find your car</h2>

              <Autocomplete
                id="grouped-demo"
                freeSolo
                options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                groupBy={(option) => option.firstLetter}
                getOptionLabel={(option) => option.brand+" "+option.model}
                sx={{ m: 1, width:"90%" }}
                onChange={handleCarSelect}
                renderInput={(params) => (
                    <TextField {...params} label="Search Car" sx={{ paddingRight: '40px' }} />
                )}
                renderGroup={(params) => (
                  <li key={params.key}>
                    <GroupHeader>{params.group}</GroupHeader>
                    <NavLink  to={"/carPage/"+getId(params.children[0].key)} sx={{ textDecoration:"none !important",my: 2, color: 'white', display: 'block', mr:10 }}>
                      <GroupItems style={{ textDecoration: "none", display: 'inline-block', color:'black' }}>{params.children}</GroupItems>
                    </NavLink>
                    
                  </li>
                )}
              />
            </CardContent>

            <CardActions  sx={{  display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              
            {
              selectedCar==null || selectedCar=={} || selectedCar==undefined?
                <Button variant="outlined" size="large" sx={{ marginTop: '0px' , width: '250px',minHeight: '40px',
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white',
                '&:hover': {
                  backgroundColor: 'white',
                  color: 'black',
                },}}>
                  Search
                </Button>
              :
              <NavLink  to={"/carPage/"+selectedCar.id} >
                <Button variant="contained" color="primary" size="large" sx={{ marginTop: '0px' , width: '250px' }}>
                  Search
                </Button>
              </NavLink>
            }
                  
              <Button variant="outlined" size="large" onClick={handleClickOpen} sx={{ marginTop: '10px',minHeight: '40px',
                width: '250px',
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white',
                '&:hover': {
                  backgroundColor: 'white',
                  color: 'black',
                }, }}>
                Advanced Search
              </Button>
            </CardActions>
          </Card>
          </center>
        </Box>
        <SearchAdvanced open={open} handleClose={handleClose}/>
        </>
    );
}

export default Search;

//