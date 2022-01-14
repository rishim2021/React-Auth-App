import React , { useState } from 'react'
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { Fab } from '@mui/material';
import { SkipNextOutlined } from '@mui/icons-material';
import { Visibility } from '@mui/icons-material';
import { VisibilityOff } from '@mui/icons-material';
import { InputAdornment } from '@mui/material';
import { FormControl } from '@mui/material';
import { IconButton } from '@mui/material';
import { Input } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Label } from '@mui/icons-material';
import { Checkbox } from '@mui/material';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './signup.css';

export const Signup = () => {

  const [ values,setValues ] = useState({
    email : "", 
    password : "",
    showPassword : false,
    errMsgEmail : "",
    conPassword : "",
    errCnfPassword : "",
    emailValidationForSubmit : false,
    passwordMatchForSubmit : false,
    errPassword :"",
    haveReferral : false
  });

  const navigate = useNavigate();

  const toggleVal = ()=>{
    setValues({ ...values, showPassword: !values.showPassword });    
  }

  const handlePasswordChange = (prop) => (event) => {
    if(event.target.value !== values.conPassword){
      setValues({ ...values, passwordMatchForSubmit:false,[prop]: event.target.value})
    }else{
      setValues({ ...values, password:event.target.value, [prop]: event.target.value });
    }

  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  

  const emailValidation = (event)=>{
    if(event.target.value == "" || null){
      setValues({ ...values, email:event.target.value , emailValidationForSubmit:false,  errMsgEmail : "Email must be required!" });
    }else{
      const rgxEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if(rgxEmail.test(event.target.value)){
        setValues({ ...values,email:event.target.value, emailValidationForSubmit:true,  errMsgEmail : "" });

      }else{
        setValues({ ...values, email:event.target.value,  emailValidationForSubmit:false,  errMsgEmail : "Vaild email must be required!" });
      }
    }
  }

  const passwordValidation =(event)=>{
    if(event.target.value !== values.password){
      setValues({ ...values, passwordMatchForSubmit:false, errCnfPassword:"Password not matched!" })
    }else{
      setValues({ ...values, passwordMatchForSubmit : true,errCnfPassword:"" })
    }

  }

  const refSubmit =()=>{
    setValues({...values,haveReferral:true})
  }

  const firstStep = ()=>{
    navigate('/otp-validate' ,{state:{email:values.email,password:values.password,referral:values.haveReferral}});

  }


  return (
    <>
      <Card className="signUp" sx={{ maxWidth: 345 }}>
        <CardContent>
         <div >
            <h1>
                SIGNUP
            </h1>
            <Avatar className="usrImg" src="/user.jpg" />  
          <div>
          <div>

          <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
          <Input type="text" value={ values.email } onChange={ emailValidation} />
          <small className="errMsg">{values.errMsgEmail}</small>
          </FormControl>
          </div> 
          <div>
           { values.email.length > 0 ?          <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel >Password</InputLabel>
          <Input 
            type= { values.showPassword ? "text" : "password" }
            onChange = {handlePasswordChange("password")}
            value = { values.password }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                onClick={toggleVal}  onMouseDown={handleMouseDownPassword}
                >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}

                </IconButton>
              </InputAdornment>
            }
           />
          <small>
            { values.password.length>2 &&  5>values.password.length? "Weak" :""}
            { values.password.length>=5 &&  8>values.password.length? "Medium" :""}
            { values.password.length>=8 ? "Strong" :""}
           </small>
          { values.password.length>2 ? <div>
            <Label className={ values.password.length>2 ? "passStn" : ""}/> <Label className={ values.password.length>5 ? "passStn" : ""}/> 
            <Label className={ values.password.length>8 ? "passStn" : ""}/>
          </div> : ""}
          </FormControl> : ""} 

          </div>
          <div>
          {values.password.length>0 ?<FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Confirm Password</InputLabel>
          <Input name="conPassword" type="password" onChange={passwordValidation}/>
          <small className="errMsg">{values.errCnfPassword}</small>
          </FormControl> : ""}
          </div>
          </div> 
        </div>
        <div>
          <p>Are you have referral code?
            <Checkbox onClick={refSubmit}/>
          </p>
          { values.emailValidationForSubmit && values.passwordMatchForSubmit ? 
           <Fab variant="extended" color="primary" onClick={firstStep} aria-label="add">
           <SkipNextOutlined  sx={{ mr: 1 }} />
           Next
         </Fab> : ""  
          }        
        </div>
        </CardContent>
     </Card>
    </>
  )
}
