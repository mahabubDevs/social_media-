
import LeftAuth from "../../components/authentication/LeftAuth"
import { RegistrationIcon } from "../../svg/Registration"
import RegistrationFrom from "../../components/authentication/RegistrationFrom"


const Registration = () => {
  return (
    <div className="relative">
      <div className="w-[500px] h-[500px] bg-purple_100 rounded-full absolute -top-[150px] -left-[150px]"></div>
      <div className="container flex gap-x-6 justify-center items-center h-screen">
        <div className="w-[45%]">
          <LeftAuth 
          icon={<RegistrationIcon/>}
          title="Start Your Journi" 
          description="Lorem is doler sit amet conten.Lorem is doler sit amet conten.Lorem is doler sit amet conten.Lorem is doler sit amet conten.Lorem is doler sit amet conten.Lorem is doler sit amet conten" />
        </div>
        <div className="w-[45%]">
        <RegistrationFrom/>
      </div>
      </div>
      
    </div>
  )
}

export default Registration
