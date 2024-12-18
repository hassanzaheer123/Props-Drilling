import React from 'react'

const SingleShape = ({shape}) => {
    let Square=false;
    let Circle=false;
    let Triangle=false;
    let Rectangle=false;
    if (shape==="Square") {
        Square=true;
    }
    else if (shape==="Circle") {
        Circle=true;
    }else if (shape==="Triangle") {
        Triangle=true;
    }
    else if (shape==="Rectangle") {
        Rectangle=true;
    }
  return (
    <>
      {Square && <img style={{width:'100px',height:'100px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/2048px-Square_-_black_simple.svg.png" alt="" />}
      {Circle && <img style={{width:'100px',height:'100px'}} src="https://png.pngtree.com/png-clipart/20200801/ourmid/pngtree-black-ring-png-image_2319165.png" alt="" />}
      {Triangle && <img style={{width:'100px',height:'100px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/800px-Regular_triangle.svg.png" alt="" />}
      {Rectangle && <img style={{width:'100px',height:'100px'}} src="https://images.vexels.com/media/users/3/139257/isolated/preview/b8fa8f291632f8fe68842e4fb100d8e0-square-rectangle-shape.png" alt="" />}
    </>
  )
}

export default SingleShape
