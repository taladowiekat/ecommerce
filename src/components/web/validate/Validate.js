import * as yup from 'yup';
export const validationSchema=yup.object  ({
    userName:yup.string().required("username is required").min(3,"must be at least 3 char").max(30,"max is 30 characters"),
    email:yup.string().required("email is required").email(),
    password:yup.string().required("username is required").min(3,"must be at least 3 char").max(30,"max is 30 characters")
  })

export const loginSchema=yup.object({
  email:yup.string().required("email is required").email(),
  password:yup.string().required("username is required").min(3,"must be at least 3 char").max(30,"max is 30 characters")
})