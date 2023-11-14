import * as React from 'react';
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

function Search() {
    return (
        <Box sx={{ flexGrow: 1}}>
          <center>
          <Card sx={{ backgroundColor:"#e0e0eb", height:"400px",width:"380px" }}>
            <CardContent>
              <TextField
                label="Search Bar"
                id="outlined-start-adornment"
                sx={{ m: 1, width:"90%" }}
                InputProps={{
                  startAdornment: 
                  <IconButton aria-label="delete">
                    <SearchIcon />
                  </IconButton>,
                }}
              />
            </CardContent>
            <CardActions>
              <Button size="small">Advanced Search</Button>
            </CardActions>
          </Card>
          </center>
        </Box>
    );
}

export default Search;