import React from 'react'
import { useFormik } from 'formik';
import Inputs from '../../pages/Inputs.jsx'
import {validationSchema} from '../validate/Validate.js'
import axios from 'axios';
import { toast } from 'react-toastify';

function Register() {


  const initialValues= {
    userName: '',
    email: '',
    password: '',
    image:'',
  };
const handelFiled=event=>{
  
  formik.setFieldValue('image', event.target.files[0]);
}
  const onSubmit =async users=>{
    const formData =new FormData();
    formData.append("userName", users.userName);

    formData.append("email", users.email);

    formData.append("password", users.password);

    formData.append("image", users.image);

    const {data}=await axios.post(`https://ecommerce-node4.vercel.app/auth/signup` , formData)
    if (data.message=='success'){
      formik.resetForm();
      toast("acc created successfully , plz verify ur email to login",{
        position: 'buttom-center',
        autoClose :5000 ,
        hideProggressBar :false,
        closeOnClick : true,
        pauseOnHover : true,
        draggable : true,
        progress: undefined,
        theme:"light",
      });

      
    }
  }
  // const onSubmit= values => {
  //   console.log(values);
  // }


  const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema:validationSchema
      });

    const inputs = [
        {   id:'userName',
            type:'text',
            name:'userName',
            title:'User Name',
            value:formik.values.userName,
        },
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
        {   id:'image',
        type:'file',
        name:'image',
        title:'User image',
        onChange:handelFiled
    }
    ];

    const renderInputs = inputs.map((input,index)=>
    <Inputs 
    type={input.type}
    key={index}
    id={input.id}
    name={input.name} 
    title={input.title}
    value={input.value}
    onChange={input.onChange || formik.handleChange}
    errors={formik.errors}
    onBlur={formik.handleBlur}
    touched={formik.touched}
    />
    )

    return (
    <>
    <div className="container">
    <h2>
        create account
    </h2>
    <form onSubmit={formik.handleSubmit} encType='multipart/form-data'>
        {renderInputs}
        <button type='submit' disabled={!formik.isValid}>Register</button>
    </form>
    </div>

    </>
  )
}

export default Register