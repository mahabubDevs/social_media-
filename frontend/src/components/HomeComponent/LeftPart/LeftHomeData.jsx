
import { useState } from "react";
import { NavLink } from "react-router-dom";
import SettingOptions from "./SettingOptions";


const LeftHomeData = ({data}) => {
  const [show,setShow] = useState(false);

  const ItemIcon = data.icon;
  const SettingSeparation = data.title === "Settings" &&(
    <>
      <div className="relative">
          <div  className="flex items-center gap-x-6 mb-7 hover:bg-black py-3 px-6 rounded-full cursor-pointer group transition-all ease-linear duration-100" onClick={()=>setShow(true)}>
          <div className="group-hover:text-white transition-all ease-linear duration-100">
            <ItemIcon/>
          </div>
          <div>
            <p className="font-gilroyMedium text-lg text-black group-hover:text-white transition-all ease-linear duration-100">{data.title}</p>
          </div>
        </div>
        <div className="absolute top-16 left-0 ">
        {show && <SettingOptions/>}
        </div>
      </div>
    
    </>
  )

  return (
    <>
    {SettingSeparation ? (SettingSeparation):(
      <NavLink to={data.to} className="flex items-center gap-x-6 mb-7 hover:bg-black py-3 px-6 rounded-full cursor-pointer group transition-all ease-linear duration-100">
      <div className="group-hover:text-white transition-all ease-linear duration-100">
        <ItemIcon/>
      </div>
      <div>
        <p className="font-gilroyMedium text-lg text-black group-hover:text-white transition-all ease-linear duration-100">{data.title}</p>
      </div>
      </NavLink>
    )}
      
    </>
  )
}

export default LeftHomeData
