import * as Yup from 'yup'

export const signUp = Yup.object({
    fname: Yup.string().min(3).max(15).required("Please Enter Your Fisrt Name"),
    lname: Yup.string().min(3).max(15).required("Please Enter Your Last Name"),
    email: Yup.string().email().required("Please Enter Valid Email"),
    password: Yup.string().min(8).required("Please Enter Password"),
    gender: Yup.string().required("Please Enter Gender"),
})
export const signIn = Yup.object({
    email: Yup.string().email().required("Please Enter Valid Email"),
    password: Yup.string().min(8).required("Please Enter Password"),
   
})