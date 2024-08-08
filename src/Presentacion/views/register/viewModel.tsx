import React, { useState } from "react";
import { RegisterScreen } from './Register';

const RegisterScreenViewModel = ()=>{
   const [values, setValues]= useState({
    name:"",
    lastname:'',
    phone:'',
    email:'',
    password:'',
    confimPassword:'',
   });
   const onChange = (property: string, value: any)=>{
    setValues({...values,[property]: value});
   }

   const register=()=>{
    console.log(JSON.stringify(values));
   }
   return{
    ...values,
    onChange,
    register,
   }

}

export default RegisterScreenViewModel