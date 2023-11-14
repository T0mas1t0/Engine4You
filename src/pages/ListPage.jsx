import React, { useState, useEffect } from 'react';
import {Cars} from '../mockData/mockData';
import carPhoto1 from '../assets/TeslaModel3_LR.png';
import carPhoto2 from '../assets/VOLVO_EX30.png';
import carPhoto3 from '../assets/GOLF_2.0_245_GTI.jpg';
import './List.css';

const List = () => {
    return (
    <div className='list-container'>
        <h1>Car List</h1>
        <table className="table-container">
          <tbody>
            {Cars.map((car) => (
              <tr key={car.id}  className='table-row'>
                <td className="table-cell">
                {car.id === "0" && <img src={carPhoto1} alt={car.model} className='table-image' />}
                {car.id === "1" && <img src={carPhoto2} alt={car.model} className='table-image' />}
                {car.id === "2" && <img src={carPhoto3} alt={car.model} className='table-image' />}
                
                <div className="table-text" >
                  <h2>{car.model} </h2>
                  <p>Price: ${car.price}</p>
                  {/* Display other information as needed */}
                </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default List;