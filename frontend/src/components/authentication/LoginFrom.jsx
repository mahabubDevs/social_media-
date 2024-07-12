

import {Link, useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import { signIn } from "../../validation";
import { useLoginUserMutation } from "../../features/api/authApi";
import { useDispatch } from "react-redux";
import { loggedInUsers } from "../../features/users/authSlice";





const initialState = {
  
    email: "",
    password: "",
   
}




const LoginFrom = ({toast}) => {

  const [loginUser,{isLoading}] = useLoginUserMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = async()=>{
    const useLoginUserMutation = await loginUser({
       
        email: formik.values.email,
        password: formik.values.password,
      
    });

    // if(useLoginUserMutation?.data){
    //   toast.success(useLoginUserMutation?.data?.message,{
    //     position:"top-right",
    //     autoClose:2000,
    //     hideProgressBar:true,
    //     pauseOnHover:false,
    //     theme:"light",
    //   })
    // }else 
    if (useLoginUserMutation?.error){
      toast.error(useLoginUserMutation?.error?.data?.message,{
        position:"top-right",
        autoClose:2000,
        hideProgressBar:true,
        pauseOnHover:false,
        theme:"light",
      })
        return
    }

    const {message, ...rest} = useLoginUserMutation.data;
    localStorage.setItem("user",JSON.stringify(rest));
    dispatch(loggedInUsers(rest))
    navigate("/")
    // console.log(useLoginUserMutation.data);
  }
        const formik = useFormik({
            initialValues:initialState,
            validationSchema:signIn,
            onSubmit:()=>{
              login();
              formik.resetForm();
                console.log("login successfully")
                
                
            },
        });

        const {errors,touched} = formik;

  return (
    <div>
      <div className='w-full rounded-md shadow-md p-4 lg:px-11 lg:py-7 box-border'>
        <div>
            <form onSubmit={formik.handleSubmit}>
                
                
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
                

                
               
                <div className="sm:flex justify-between items-center mt-4 sm:mt-2">
                    <button type="submit" className="px-6 py-2 bg-secondary_bg rounded-full text-white font-gilroy">Login</button>
                    <p className="font-gilroy 2xl:text-base xl:text-sm mt-2 lg:mt-0 ">Create a new account? 
                         <Link to='/registration' className="text-primary_color underline">Sign Up</Link>  
                         {/* <span className="text-primary_color underline">Sign IN</span> */}
                    </p>
                </div>
                
            </form>
        </div>
      </div>
    </div>
  )
}

export default LoginFrom




