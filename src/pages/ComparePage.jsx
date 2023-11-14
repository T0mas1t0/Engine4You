import {useEffect,useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CarCompareInfo from '../components/ComparePage/CarCompareInfo';
import Tooltip from '@mui/material/Tooltip';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const fabStyle = {
  position: 'fixed',
  bottom: 16,
  right: 16,
};


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



function ComparePage() {

  const [compareList,setCompareList] = useState([]);

  useEffect(() => {

    var oldlist = JSON.parse(localStorage.getItem("compareList"));
    console.log("var list");
    console.log(oldlist);
    if(oldlist!=null){
      setCompareList(oldlist);
    }

  }, []);

    return (
        <>
        <center>
            <h1>Car Comparator</h1>
        </center>
        <Box sx={{ marginTop:"20px"}}>
        
          <Grid container spacing={2}> 
            {
                compareList.map((item, itemIndex) => (
                    <>
                    <Grid xs={3} md={3}>
                        <Item>
                            <CarCompareInfo info={item}/>
                        </Item>
                    </Grid>
                    </>
            ))}
          

          </Grid>
          
        </Box>
        <Tooltip title="Add Car to Compare" placement="top">
            <Fab sx={fabStyle} aria-label='Add' variant="extended">
                <AddIcon />
            </Fab>
        </Tooltip>
            
        </>
      );
}

export default ComparePage;