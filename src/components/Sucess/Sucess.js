import React from 'react'
import { Card } from '@mui/material'
import { CardContent } from '@mui/material';
import './sucess.css';
import { Beenhere } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
export const Sucess = () => {

  const {state} = useLocation();
  const { email,referralCode } = state;
  

  return (

    <>
     <Card className="sucessCard" sx={{ maxWidth: 600 }}> 
     <CardContent>
       <div>
         <h1>
           Your Profile Sucessfully Created!!
         </h1>
         
         <p> <Beenhere sx={{ mr: 1}} className="right"/>Email : {email} 
         {referralCode !== null ? <div>Referral Code : {referralCode} </div>:  ""}
         </p>
         

       </div>
       </CardContent>
       </Card>
    </>    
  )
}
