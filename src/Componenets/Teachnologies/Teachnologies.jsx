import React from 'react';
import BallCanvas from '../Ball';
import "./Teachnologies.css";

import css from "../../assets/tech/css.png";
import aws from "../../assets/tech/aws.png";
import figma from "../../assets/tech/figma.png";
import acc from "../../assets/tech/acc.png";
import html from "../../assets/tech/html.png";
import javascript from "../../assets/tech/javascript.png";
// import wp from "../../assets/tech/wp.png";
// import py from "../../assets/tech/py.png";
import reactjs from "../../assets/tech/reactjs.png";
import redux from "../../assets/tech/redux.png";
import tailwind from "../../assets/tech/tailwind.png";
// import typescript from "../../assets/tech/typescript.png";

const imageUrls = [
    css,
    aws,
    figma,
    acc,
    html,
    javascript,
    // wp,
    // py,
    reactjs,
    redux,
    tailwind,
    // typescript
  ];


const Teachnologies = () => {
  return (
    <div className='teachnologies'>
        <div className="teachnology">
        {imageUrls.map((image, index) => (            
            <BallCanvas  key={index} icon={image}/>
        ))}
        </div>
    </div>
  )
}

export default Teachnologies
