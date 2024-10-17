import { useState } from 'react'
import './App.css'
import { TextField,Stack,Button } from '@mui/material'

function App(){

  const [interest,setInterest] = useState(0)
  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)
  const[InvalidPrinciple,setInvalidPrinciple] = useState(false)
  const[Invalidrate,setInvalidrate] = useState(false)
  const[Invalidyear,setInvalidyear] = useState(false)

  const validateInputs = (inputTag)=>{
console.log(typeof inputTag);
const{name,value} = inputTag
console.log(name,value);
console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
console.log(!!value.match(/^\d*\.?\d+$/));
if(name=="principle"){
  setPrinciple(value)
  if (!!value.match(/^\d*\.?\d+$/)){
    setInvalidPrinciple(false)
  }else{
    setInvalidPrinciple(true)
  }
  }else if(name=="rate"){
    setRate(value)
    if (!!value.match(/^\d*\.?\d+$/)){
      setInvalidrate(false)
    }else{
      setInvalidrate(true)
    }
    }else if(name=="year"){
      setYear(value)
      if (!!value.match(/^\d*\.?\d+$/)){
        setInvalidyear(false)
      }else{
        setInvalidyear(true)
      }
      }
  
}

const handlecalculate = (e)=>{
  e.preventDefault()
  console.log("Inside Handle Calculate");
  if(principle && rate && year){
    setInterest(principle*rate*year/100)
  }else{
    alert("Please fill the form completely!!!")
  }
  
}
const handleReset = ()=>{
setInterest(0)
setPrinciple(0)
setRate(0)
setYear(0)
setInvalidPrinciple(false)
setInvalidrate(false)
setInvalidyear(false)
}



  return(
    <div style={{width: '100%',minHeight:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
     <div style={{width:'600px'}} className='bg-light rounded p-5'> 
      <h3>Simple Interest App</h3>
      <p>Calculate Your Simple Interest Easily!!</p>
      <div className='bg-warning p-5 text-light text-center rounded'>
        <h1>₹ {interest}</h1>
        <p className='fw-bolder'>Total Simple Interest</p>
      </div>
      <form className='mt-5'>
        {/*principle*/}
        <div className='mb-5'>
          <TextField value={principle || ""} name='principle' onChange={(e)=>validateInputs(e.target)} className='w-100' id='outlined-principle' label="₹ Principle Amount" variant='outlined'/>
        </div>

        {/*Invalid principle*/ }
        {InvalidPrinciple && <div className='mb-3 text-danger fw-bolder'>Invalid principle amount !!! </div>}

         {/*rate*/}
         <div className='mb-5'>
          <TextField value={rate || ""} name='rate' onChange={(e)=>validateInputs(e.target)}  className='w-100' id='outlined-rate' label="Rate of Interest(%)" variant='outlined'/>
        </div>

        {/*Invalid principle*/ }
        {Invalidrate && <div className='mb-3 text-danger fw-bolder'>Invalid Rate of interest !!! </div>}

         {/*Year*/}
         <div className='mb-5'>
          <TextField value={year || ""} name='year' onChange={(e)=>validateInputs(e.target)}  className='w-100' id='outlined-Year' label="Time Period(yr)" variant='outlined'/>
        </div>

         {/*Invalid principle*/ }
         {Invalidyear && <div className='mb-3 text-danger fw-bolder'>Invalid Year !!! </div>}

        <Stack direction="row" spacing={2}>
        <Button type='submit' onClick={handlecalculate} disabled={InvalidPrinciple||Invalidrate||Invalidyear}
         variant="contained" style={{width:'50%',height:'70px'}} className='bg-warning'>Calculate</Button>
        <Button onClick={handleReset} variant="outlined" style={{width:'50%',height:'70px'}} className='border border-dark text-dark'>Reset</Button>

        </Stack>
      </form>

      </div>
    </div>
  )
}
export default App