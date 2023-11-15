/* eslint-disable react/prop-types */

import {useState} from 'react';

function CarCompareInfo({info}) {
    const [equipment] = useState(info.equipment);
    const [motorInfo] = useState(info.motorInfo);
    const [dimensions] = useState(info.dimensions);
    

    console.log("CompareInfo Page");
    //console.log(info);
    return (
        <>
            <center>
                <h1 >{info.brand} {info.model}</h1>

                <div>
                  <img src={info.photo} style={{ height: "auto", width: "100%" }}/>
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