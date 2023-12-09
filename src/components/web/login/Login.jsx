import React from 'react'
import { useFormik } from 'formik';
import Inputs from '../../pages/Inputs.jsx'
import {loginSchema} from '../validate/Validate.js'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Login() {
const navigate = useNavigate();

  const initialValues= {
    email: '',
    password: '',
  };



  const onSubmit =async users=>{
    const {data}=await axios.post(`https://ecommerce-node4.vercel.app/auth/signin` , users);
    console.log(data);
    if (data.message=='success'){
      localStorage.getItem("userToken",data.token);
      
      toast("login successfully",{
        position: 'buttom-center',
        autoClose :5000 ,
        hideProggressBar :false,
        closeOnClick : true,
        pauseOnHover : true,
        draggable : true,
        progress: undefined,
        theme:"light",
      });
      navigate('/home');
      } 

    
    }


  // const onSubmit= values => {
  //   console.log(values);
  // }


    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema:loginSchema
    });

    const inputs = [
        {   id:'email',
            type:'email',
            name:'email',
            title:'User Email',
            value:formik.values.email,
        },
        {   id:'password',
            type:'password',
            name:'password',
            title:'User Password',
            value:formik.values.password,
        },

    ];

    const renderInputs = inputs.map((input,index)=>
    <Inputs 
    type={input.type}
    key={index}
    id={input.id}
    name={input.name} 
    title={input.title}
    value={input.value}
    onChange={formik.handleChange}
    errors={formik.errors}
    onBlur={formik.handleBlur}
    touched={formik.touched}
    />
    )

    return (
    <>
    <div className="container">
    <h2>
        Login
    </h2>
    <form onSubmit={formik.handleSubmit}>
        {renderInputs}
        <button type='submit' disabled={!formik.isValid}>Login</button>
    </form>
    </div>

    </>
  )
}

export default Login