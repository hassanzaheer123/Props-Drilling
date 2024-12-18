import React from 'react'
import SingleShape from './SingleShape';

const ShapesGenerator = ({shape,number}) => {
    const shapesArray = new Array();
    for (let i = 0; i < number; i++) {
      shapesArray.push(shape);
      
    }
    
    
  return (
    <>
      {shapesArray.map((shape,index)=>{
        return (
            <SingleShape key={index} shape={shape} />
        )
      })}
    </>
  )
}

export default ShapesGenerator
