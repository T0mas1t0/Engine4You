/* eslint-disable react/prop-types */

import {useState} from 'react';
import carPhoto1 from '../../assets/TeslaModel3_LR.png';
import carPhoto2 from '../../assets/VOLVO_EX30.png';


function CarCompareInfo({info}) {
    const [equipment] = useState(info.equipment);
    const [motorInfo] = useState(info.motorInfo);
    const [dimensions] = useState(info.dimensions);
    

    console.log("CompareInfo Page");
    //console.log(info);
    return (
        <>
            <center>
                <h1 >{info.model}</h1>

                <div>
                  {
                      (info.photo==="TeslaModel3_LR.png")?
                      <img src={carPhoto1} style={{ height: "auto", width: "100%" }}/>
                      :
                      <img src={carPhoto2} style={{ height: "auto", width: "100%" }}/>
                  }
                </div>

                

                {Object.keys(motorInfo).map((category) => (
                    <>
                  
                    <p>
                      <b>{motorInfo[category].title}:</b><br/>{motorInfo[category].description}
                    </p>
                  
                  </>
                ))}

                {Object.keys(equipment).map((category) => (
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

                {Object.keys(dimensions).map((category) => (
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