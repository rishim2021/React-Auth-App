import React, { useState } from 'react'
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { TextField } from '@mui/material';
import { Fab } from '@mui/material';
import { Check } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import './referral.css';
export const Referral = () => {

  const [ values, setValues ] = useState({
    referralCode : ""
  })

  const {state} = useLocation();
  const {email} = state;

  const navigate = useNavigate();

  const valueChange = (event)=>{
    console.log(event.target.value);
    setValues({referralCode : event.target.value})
  }

  const onSucess =()=>{
    navigate('/sucess',{state: {email: email, referralCode : values.referralCode}})
  }

  return (
    <>
    <Card className="referralCard" sx={{ maxWidth: 345 }}> 
      <CardContent>
        <div>
          <h1>
            Referral Code 
          </h1>
        </div>
        <TextField
            type="text"
            maxLength="1"
            onChange={valueChange}
            id="demo-helper-text-aligned1"
          />
          <div>
            <br></br>
            <Fab variant="extended" color="primary" onClick={onSucess} aria-label="add">
                <Check  sx={{ mr: 1 }} />
                  Submit
            </Fab>
          </div>          
      </CardContent>
    </Card>
    </>
  
  )
}
