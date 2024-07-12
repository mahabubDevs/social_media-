import { Helmet } from "react-helmet-async"
import LeftAuth from "../../components/authentication/LeftAuth"
import LoginFrom from "../../components/authentication/LoginFrom"
import { LoginIcon } from "../../svg/LoginIcon"
import {ToastContainer ,toast} from "react-toastify"


const Login = () => {
  return (
    <>
    <ToastContainer/>
      <Helmet>
      <title>Login</title>
    </Helmet>
      <div className="relative z-[1]">
      <div className=" hidden lg:block w-[500px] h-[500px] bg-purple_100 rounded-full absolute -top-[150px] -left-[150px] z-[-1]"></div>
      <div className="container flex gap-x-6 justify-center items-center h-screen">
        <div className="lg:w-[35%] xl:w-[40%] hidden lg:block">
          <LeftAuth  
          icon={<LoginIcon/>}
          title="Login to Access" 
          description="Lorem is doler sit amet conten.Lorem is doler sit amet conten.Lorem is doler sit amet conten.Lorem is doler sit amet conten.Lorem is doler sit amet conten.Lorem is doler sit amet conten" />
        </div>
        <div className="w-full lg:w-[55%] xl:w-[35%]">
        <LoginFrom toast={toast} />
      </div>
      </div>
      
    </div>
    </>
  )
}

export default Login
