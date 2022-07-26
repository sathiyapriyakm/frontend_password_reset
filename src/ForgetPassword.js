import {
    Typography,
    Button,
    
  } from '@mui/material'
  
  import React from 'react'
  import { useFormik } from 'formik'
  import * as Yup from "yup";
  
  import TextField from '@mui/material/TextField'
  import { useNavigate } from 'react-router-dom'
  import { API } from './global.js';
  import { useState } from 'react';
  import {Link} from 'react-router-dom';
  
  
  export function ForgetPassword() {
    
    const navigate=useNavigate();
    const[errorMsg,setErrorMsg]=useState("");
    const entry=()=>navigate("/");
  
    const forgetUser =(emailDetail) => {
      fetch(`${API}/forgetUser`,{
      method: "POST",
      body: JSON.stringify(emailDetail),
      headers: {
        "Content-Type" : "application/json",
      },
    }).then((data)=>data.json())
    .then((data1)=>{
        console.log(data1);
        if(data1.message==="successful login"){
            entry();}
        else {
            setErrorMsg(data1.message);
        }
    });
    

    };
    const initialValues = {
      Email: '',
    }
    const userValidationSchema = Yup.object({
      Email: Yup.string().email("Must be a valid email").required('Required'),
    })
    
    const {handleBlur,handleChange,handleSubmit,values,errors,touched}=useFormik({
      initialValues:initialValues,
      validationSchema:userValidationSchema ,
      onSubmit:(emailDetail)=>{
        console.log("onSubmit",emailDetail);
        forgetUser(emailDetail);
      },
    });
    
    return <div className="add-user-container">
    <form  
    onSubmit={handleSubmit}
    className="add-user-form" >
      <Typography variant="h4" pb={2}
    sx={{
      textAlign: 'center',
    }}>
     E-mail Details
    </Typography>
      
    <TextField
      className="add-user-name"
      label="Enter Registered Email - example:john@abc.com"
      type="Email"
      value={values.Email} 
      name="Email"
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched.Email&&errors.Email?true:false}
      helperText={touched.Email&&errors.Email?errors.Email:""}
      />
       <Button className="add-user-btn" 
        color="primary"
      type="submit"
      variant="contained">submit</Button>
      <div className="text-center" style={{color:"red"}}>
    {errorMsg}
    </div>
      <div className="text-center" style={{color:"blue"}}>
      <Link to="/Register">Create  Account!</Link>
      <br/>
      <br/>
     <Link to="/Login">I can remember my password now!</Link>
    </div>
   </form> 
  </div>;
  }
  
  