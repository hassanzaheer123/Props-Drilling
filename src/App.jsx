import React, { useState } from 'react'
import TsParicles from './TsParicles'
import toast, { Toaster } from 'react-hot-toast';
import ShapesGenerator from './ShapesGenerator';

const App = () => {
  const [shape, setShape] = useState('Circle');
  const [number,setNumber] = useState('');
  const [prnt, setPrnt] =useState('');
  const print = () => {
    setPrnt(number);
  }
  return (
    <>
      <div className="container my-4">
          <div className="col-lg-5 mx-auto p-4">
            <h1 style={{userSelect:'none'}} className="text-center">
              Prop Drilling
            </h1>
          </div>
          <div className="col-lg-9 mx-auto">
          <img src="https://chisellabs.com/glossary/wp-content/uploads/2023/08/flat-vs-HIERARCHAL-organization.png" alt="" />
          </div>
          <div className="col-lg-6 mx-auto border shadow mt-3 p-5 bg-dark rounded text-white">
              <form className=''>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput1">Number of Shapes</label>
                  <input value={number} 
                  onChange={(e)=>{
                    setNumber(e.target.value);
                  }} type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Number e.g 5" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect1">Select a color</label>
                  <select value={shape}
                  onChange={(e)=>{
                    setShape(e.target.value);
                  }}
                  className="form-control" id="exampleFormControlSelect1">
                      <option>Square</option>
                      <option>Circle</option>
                      <option>Triangle</option>
                      <option>Rectangle</option>
                      
                    </select>
                </div>
                <button onClick={print} type="button" className="btn btn-primary mt-2 mx-auto ">Print</button>

                


                
                

              </form>
          </div>
          
      </div>
      <div className="container d-flex flex-wrap">
      
      {prnt&&<ShapesGenerator shape={shape} number={prnt} />}
      
      </div>
      <Toaster />
      <TsParicles />
    </>
  )
}

export default App
