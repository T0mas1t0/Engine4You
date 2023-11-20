import {useEffect,useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CarCompareInfo from '../components/ComparePage/CarCompareInfo';
import Tooltip from '@mui/material/Tooltip';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ClearIcon from '@mui/icons-material/Clear';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function ComparePage() {

  const [compareList,setCompareList] = useState([]);
  const [starsList,setStarsList] = useState({Power:null,TopSpeed:null});

  function handleRemoveCar(index){

    var oldlist = JSON.parse(localStorage.getItem("compareList"));
    var tmp = oldlist;
    tmp.splice(index, 1);
    localStorage.setItem("compareList",JSON.stringify(tmp));
    setCompareList(tmp);

  }

  useEffect(() => {

    var oldlist = JSON.parse(localStorage.getItem("compareList"));
    console.log("var list");
    console.log(oldlist);
    if(oldlist!=null){
      setCompareList(oldlist);
  
      var tmp = {Power:getQualification(oldlist,"Power"),TopSpeed:getQualification(oldlist,"TopSpeed"),Range:getQualification(oldlist,"Range")}
      setStarsList(tmp);
      console.log(starsList.power);
    }
    
  }, [compareList]);

  function getQualification(cars, property) {
    if (cars.length === 0) {
      return { max: null, min: null };
    }
    if(cars.length === 1){
      return { max: cars[0], min: cars[0] };
    }
  
    let maxCar = cars[0];
    let minCar = cars[0];
  
    for (let i = 1; i < cars.length; i++) {
      console.log();
      if (parseInt(cars[i].motorInfo[property].description.split(" ")[0]) > parseInt(maxCar.motorInfo[property].description.split(" ")[0])) {
        maxCar = cars[i];
      }

      if (parseInt(cars[i].motorInfo[property].description.split(" ")[0]) < parseInt(minCar.motorInfo[property].description.split(" ")[0])) {
        minCar = cars[i];
      }
    }
  
    return { max: maxCar, min: minCar };
  }


    return (
        <>
        <div className="center-container">
            <h1>Car Comparator</h1>
            
        </div>
        {
          compareList.length!=0?
          <Box sx={{ marginTop:"20px"}}>
        
          <Grid container spacing={2}> 
            {
                compareList.map((item, itemIndex) => (
                    <>
                    <Grid xs={3} md={3}>
                    <div style={{background:"#f3f2f1"}}>
                        
                         
                          <div>
                              <Tooltip title="Remove from list">

                                <Button onClick={()=>handleRemoveCar(itemIndex)} >
                                  <ClearIcon color="error" />
                                </Button>

                              </Tooltip>

                              <Tooltip title="Car page">

                                <NavLink key={itemIndex} to={"/carPage/"+item.id}>
                                  <Button>
                                    <VisibilityIcon/>
                                  </Button>
                                </NavLink>
                                
                              </Tooltip>

                              
                          </div>
                    
                        </div>
                        <Item>
                            <CarCompareInfo info={item} starsList={starsList}/>
                        </Item>
                    </Grid>
                    </>
            ))}
          

          </Grid>
          
        </Box>
        :
        <div 
        style={{
            position: 'fixed',
            
            left: 0,
            width: '100%',
            height: '80%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#ffffff', // Cor de fundo da div
          }}>
                  <div style={{justifyContent: 'center'}}>
                    <h3> Comparation List is empty!</h3>
                    
                  </div>
                  
        </div>
        }
        
            
        </>
      );
}

export default ComparePage;