/* eslint-disable react/prop-types */

import {useState,useEffect} from 'react';
import StarRateIcon from '@mui/icons-material/StarRate';


function CarCompareInfo({info,starsList}) {
    const [equipment] = useState(info.equipment);
    const [motorInfo] = useState(info.motorInfo);
    const [dimensions] = useState(info.dimensions);

    const renderStarsInfo = (category, motorInfo, info, starsList) => {
      if (category === "Power" || category === "TopSpeed" || category==="Range") {
        if (starsList[category].min.id === info.id) {
          return (
            <p>
              <StarRateIcon color="error" />
              <b>{motorInfo[category].title}:</b>
              <br />
              {motorInfo[category].description}
            </p>
          );
        } else if (starsList[category].max.id === info.id) {
          return (
            <p>
              <StarRateIcon color="success" />
              <b>{motorInfo[category].title}:</b>
              <br />
              {motorInfo[category].description}
            </p>
          );
        } else {
          return (
            <p>
              <StarRateIcon color="warning" />
              <b>{motorInfo[category].title}:</b>
              <br />
              {motorInfo[category].description}
            </p>
          );
        }
      }
      else {
        return (
          <p>
            <b>{motorInfo[category].title}:</b>
            <br />
            {motorInfo[category].description}
          </p>
        );
      }
    };
    
    
    

  
    return (
        <>
            <center>
                
            <div >
                <div style={{height:"100px"}}>
                  <h2 id="TitlesCompare">{info.brand} {info.model}</h2>
                  <h3 id="PriceCompare">{info.price} €</h3>
                </div>
                <div >
                  <img id="carPhoto" src={info.photo} />
                </div>
            </div>
                

            {Object.keys(motorInfo).map((category) => (
              <>
                {renderStarsInfo(category, motorInfo, info, starsList)}
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