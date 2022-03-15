import React from "react";
import { Link } from 'react-router-dom'; 

const Recipe = ({title, image, url}) => {
    return(
       <div>
           <h1> {title}</h1>
           <a href={url}><img src= {image}/></a> 
       </div>
    );
}

export default Recipe; 
