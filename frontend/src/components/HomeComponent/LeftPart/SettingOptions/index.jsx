import { useState } from "react"
import { Logout } from "../../../../svg/Logout"
import { Moon } from "../../../../svg/Moon"
import Darkmode from "./Darkmode";

const SettingOptions = () => {
  const [visiblity,setVisiblity] = useState(false);

  if(visiblity){
    return <Darkmode/>;
  }

  return (
    <div className="bg-white w-[300px] shadow-md rounded-md p-4">
      <ul>
      <li className="flex items-center gap-x-3 group cursor-pointer mb-3" onClick={()=>setVisiblity(true)} >
       <div className="w-10 h-10 rounded-full bg-[#e7e6e6] flex items-center justify-center">
        <Moon/>
       </div>
        <div>
          <p className="font-gilroyBold text-base text-black group-hover:text-secondary_color transition-all ease-linear duration-75" >Display & Accessability</p>
        </div>
      </li>
      <li className="flex items-center gap-x-3 group cursor-pointer">
       <div className="w-10 h-10 rounded-full bg-[#e7e6e6] flex items-center justify-center">
        <Logout/>
       </div>
        <div>
          <p className="font-gilroyBold text-base text-black group-hover:text-secondary_color transition-all ease-linear duration-75">LogOut</p>
        </div>
      </li>
      </ul>
    </div>
  )
}

export default SettingOptions
