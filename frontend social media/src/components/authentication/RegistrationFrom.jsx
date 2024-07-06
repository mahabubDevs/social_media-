
import {Link} from "react-router-dom";
import {useFormik} from "formik";
import { signUp } from "../../validation";
import DateofBirth from "./DateofBirth";
import Gender from "./Gender";

import {useAddUserMutation} from '../../features/api/authApi'




const initialState = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    bYear: new Date().getFullYear(),
    bMonth: new Date().getMonth(),
    bDay: new Date().getDate,
    gender: "",
}

const RegistrationFrom = () => {

    const [addUser] = useAddUserMutation();
    const registration = async()=>{
        const signUpMutation = await addUser({
            fname: formik.values.fname,
            lname: formik.values.lname,
            email: formik.values.email,
            password: formik.values.password,
            bYear: new Date().getFullYear(),
            bMonth: new Date().getMonth(),
            bDay: new Date().getDate,
            gender: formik.values.gender,
        })
        console.log("ami kaj kori nai")
        console.log(signUpMutation.data);
    }

        const formik = useFormik({
            initialValues:initialState,
            validationSchema:signUp,
            onSubmit:()=>{
                console.log("hello sign up")
                registration();
            }
        })

        
const tempYears = new Date().getFullYear();
const years = Array.from(new Array(105), (val, index) => tempYears - index);
const month = Array.from(new Array(12), (val, index) => 1+ index);
const day=()=>{
    return new Date(formik.values.bYear,formik.values.bMonth,0).getDate()
};
const getDates = Array.from(new Array(day()),(val,index)=>1+index)

    


        const {errors,touched} = formik;

  return (
    <div>
      <div className='w-full rounded-md shadow-md p-4 lg:px-11 lg:py-7 box-border'>
        <div>
            <form onSubmit={formik.handleSubmit}>
                <input 
                
                className={
                    errors.fname ? 
                    'w-full px-4 py-2 border border-line_color rounded-md  focus:outline-none'
                    :
                    'w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none'

                } 
                placeholder='Frist Name'
                type="text"
                onChange={formik.handleChange}
                autoComplete="off"
                value={formik.values.fname}
                onBlur={formik.handleBlur}
                name="fname"
                />
                {
                    errors.fname && touched.fname && <p className="font-gilroy text-sm text-red my-2 mx-3">{errors.fname}</p>
                }
                <input
                 className={
                    errors.lname ? 
                    'w-full px-4 py-2 border border-line_color rounded-md  focus:outline-none'
                    :
                    'w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none'

                }
                  placeholder='Last Name'
                  type="text"
                    onChange={formik.handleChange}
                    autoComplete="off"
                    value={formik.values.lname}
                    onBlur={formik.handleBlur}
                    name="lname"
                  />
                  {
                    errors.lname && touched.lname && <p className="font-gilroy text-sm text-red my-2 mx-3">{errors.lname}</p>
                }
                <input 
                className={
                    errors.email ? 
                    'w-full px-4 py-2 border border-line_color rounded-md  focus:outline-none'
                    :
                    'w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none'

                } 
                placeholder='Email Address'
                type="email"
                onChange={formik.handleChange}
                autoComplete="off"
                value={formik.values.email}
                onBlur={formik.handleBlur}
                name="email"
                />
                {
                    errors.email && touched.email && <p className="font-gilroy text-sm text-red my-2 mx-3">{errors.email}</p>
                }
                <input 
                className={
                    errors.password ? 
                    'w-full px-4 py-2 border border-line_color rounded-md  focus:outline-none'
                    :
                    'w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none'

                }
                placeholder='Password'
                type="password"
                onChange={formik.handleChange}
                autoComplete="off"
                value={formik.values.password}
                onBlur={formik.handleBlur}
                name="password"
                />
                {
                    errors.password && touched.password && <p className="font-gilroy text-sm text-red my-2 mx-3">{errors.password}</p>
                }
                <DateofBirth  formik={formik} years={years} month={month} getDates={getDates} errors={errors}/>
                <Gender formik={formik} errors={errors} touched={touched}/>
                <div className="sm:flex justify-between items-center mt-4 sm:mt-2">
                    <button type="submit" className="px-6 py-2 bg-secondary_bg rounded-full text-white font-gilroy">Submit</button>
                    <p className="font-gilroy 2xl:text-base xl:text-sm mt-2 lg:mt-0 ">Already have an account? 
                         <Link to='/' className="text-primary_color underline"> Sign In</Link>  
                         {/* <span className="text-primary_color underline">Sign IN</span> */}
                    </p>
                </div>
                
            </form>
        </div>
      </div>
    </div>
  )
}

export default RegistrationFrom
