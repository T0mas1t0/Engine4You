/* eslint-disable react/prop-types */
import {Fragment,useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Unstable_Grid2';



export default function SearchAdvanced({open,handleClose}) {
  
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [value, setValue] = useState([500, 20000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Fragment>
      
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          Advanced Search
        </DialogTitle>
        <DialogContent sx={{minHeight:"300px"}}>
            <Box sx={{marginTop:5, marginBottom: 5}}>

            <Grid container spacing={2}>
              <Grid xs={3} sx={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                min: {value[0]} €
              </Grid>
                <Grid xs={6}>
                      <Slider
                      getAriaLabel={() => 'Price range'}
                      value={value}
                      onChange={handleChange}
                      min={500}
                      step={500}
                      max={100000}
                      valueLabelDisplay="auto"
                    />
                </Grid>
                <Grid xs={3} sx={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  max: {value[1]} €
                </Grid>

                </Grid>
            </Box>
            <FormControl>

              <FormLabel id="demo-row-radio-buttons-group-label">Engine type</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="Gasoline" control={<Radio />} label="Gasoline" />
                <FormControlLabel value="Diesel" control={<Radio />} label="Diesel" />
                <FormControlLabel value="Electric" control={<Radio />} label="Electric" />
                <FormControlLabel value="Plug-in" control={<Radio />} label="Plug-in" />
                <FormControlLabel value="Hybrid" control={<Radio />} label="Hybrid" />                
              </RadioGroup>

            </FormControl>



          <DialogContentText>
            Em desenvolvimento....
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose} autoFocus>
            Search
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}