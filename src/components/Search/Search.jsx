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

const GroupHeader = St('div')(({ theme }) => ({
  position: 'sticky',
  top: '-8px',
  padding: '4px 10px',
  color: theme.palette.primary.main,
  backgroundColor:
    theme.palette.mode === 'light'
      ? lighten(theme.palette.primary.light, 0.85)
      : darken(theme.palette.primary.main, 0.8),
}));

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
    color: theme.palette.primary.main,
    backgroundColor:
      theme.palette.mode === 'light'
        ? lighten(theme.palette.primary.light, 0.85)
        : darken(theme.palette.primary.main, 0.8),
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

  

    return (
      <>
        <Box sx={{ flexGrow: 1}}>
          <center>
          <Card sx={{ backgroundColor:"#e0e0eb",width:"380px" }}>
            <CardContent sx={{height:"350px"}}>

              <Autocomplete
                id="grouped-demo"
                options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                groupBy={(option) => option.firstLetter}
                getOptionLabel={(option) => option.brand+" "+option.model}
                sx={{ m: 1, width:"90%" }}
                renderInput={(params) => <TextField {...params} label="Search Car" />}
                renderGroup={(params) => (
                  <li key={params.key}>
                    <GroupHeader>{params.group}</GroupHeader>
                    <GroupItems>{params.children}</GroupItems>
                  </li>
                )}
              />
            </CardContent>

            <CardActions  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',margin:2 }}>
              <Button variant="outlined" onClick={handleClickOpen}>
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