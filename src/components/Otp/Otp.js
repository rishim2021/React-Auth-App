import React  from 'react'
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { Fab } from '@mui/material';
import { SkipNextOutlined } from '@mui/icons-material';
import { Check } from '@mui/icons-material';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './otp.css';

export const Otp = () => {

  const {state} = useLocation();
  const { email, password, referral  } = state;
  console.log(email,password,referral);

  const navigate = useNavigate();

  const onSucess = ()=>{
    navigate('/sucess',{state:{email:email,referralCode:null}})
  }

  const onNext = ()=>{
    navigate('/referral',{state:{email:email}})
  }

  return (
    <div>
      <Card className="otpCard" sx={{ maxWidth: 345 }}> 
        <CardContent>
          <div>
            <h1>
              OTP
            </h1>
          </div>
          <div>
          <TextField className="forOtp"
            type="text"
            maxLength="1"
            id="demo-helper-text-aligned1"
          />
          <TextField className="forOtp"
            type="text"
            maxLength="1"
            id="demo-helper-text-aligned2"
          />
          <TextField className="forOtp"
            type="text"
            maxLength="1"
            id="demo-helper-text-aligned3"
          />
          <TextField className="forOtp"
            type="text"
            maxLength="1"
            id="demo-helper-text-aligned4"
          />
          <br></br>
          </div>

          <div>
            <br></br>
            <br></br>
            { referral === false ?
              <Fab variant="extended" color="primary" onClick={onSucess} aria-label="add">
               <Check  sx={{ mr: 1 }} />
                  Submit
               </Fab> : <Fab variant="extended" onClick={onNext} color="primary" aria-label="add">
               <SkipNextOutlined  sx={{ mr: 1 }} />
                  Next
               </Fab>
             }
          </div>    
        </CardContent>
      </Card>
    </div>
  )
}