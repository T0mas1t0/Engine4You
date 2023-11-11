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
    const [equipment, setEquipment] = React.useState(props.info.equipment);
    const [motorInfo, setMotorInfo] = React.useState(props.info.motorInfo);
    const [dimensions, setDimensions] = React.useState(props.info.dimensions);
    

    console.log("CompareInfo Page");
    //console.log(info);
    return (
        <>
            <center>
                <h1 >{props.info.model}</h1>

                <div>
                  {
                      (props.info.photo==="TeslaModel3_LR.png")?
                      <img src={carPhoto1} style={{ height: "auto", width: "100%" }}/>
                      :
                      <img src={carPhoto2} style={{ height: "auto", width: "100%" }}/>
                  }
                </div>

                

                {Object.keys(motorInfo).map((category, index) => (
                    <>
                  
                    <p>
                      <b>{motorInfo[category].title}:</b><br/>{motorInfo[category].description}
                    </p>
                  
                  </>
                ))}

                {Object.keys(equipment).map((category, index) => (
                    <>
                  
                    <p>
                      <b>{equipment[category].name}:</b>
                    </p>
                    <p>
                      {equipment[category].list.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </p>
                  
                  </>
                ))}

                {Object.keys(dimensions).map((category, index) => (
                    <>
                  
                    <p>
                      <b>{dimensions[category].title}:</b><br/>{dimensions[category].description}
                    </p>
                  
                  </>
                ))}

               
                
            </center>
        </>
      );
}

export default CarCompareInfo;