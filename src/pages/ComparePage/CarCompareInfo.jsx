import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import carPhoto1 from '../../assets/TeslaModel3_LR.png';
import carPhoto2 from '../../assets/VOLVO_EX30.png';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function CarCompareInfo(props) {
    const [info, setInfo] = React.useState(props.info.motorInfo);
    console.log("CompareInfo Page");
    console.log(info);
    return (
        <>
            <center>
                <h1>{info.model}</h1>
                
                {
                    (props.info.photo==="TeslaModel3_LR.png")?
                    <img src={carPhoto1} height={"150"} width={"250px"}/>
                    :
                    <img src={carPhoto2} height={"150"} width={"250px"}/>
                }
                

                {Object.keys(info).map((category, index) => (
                    <>
                  
                    <p>
                      <b>{info[category].title}:</b><br/>{info[category].description}
                    </p>
                  
                  </>
              ))}
                
            </center>
        </>
      );
}

export default CarCompareInfo;