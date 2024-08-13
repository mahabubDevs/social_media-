
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import SettingOptions from "./SettingOptions";
import OutSideClick from "../../../functions/click";


const LeftHomeData = ({data}) => {
  const [show,setShow] = useState(false);

  const clickOutSide = useRef(null);
  const ItemIcon = data.icon;

  OutSideClick(clickOutSide,()=>{
    setShow(false);
  });

  const SettingSeparation = data.title === "Settings" &&(
    <>
      <div className="relative">
          <div  className={`flex w-10 h-10 xl:w-auto xl:h-auto justify-center xl:justify-normal items-center xl:items-center xl:gap-x-6 lg:mb-5 xl:mb-7 hover:bg-black xl:py-3 xl:px-6 rounded-full cursor-pointer group transition-all ease-linear duration-100 ${show && 'bg-black'}`} onClick={()=>setShow(true)}>
          <div className={`group-hover:text-white transition-all ease-linear duration-100 ${show && "text-white"}`}>
            <ItemIcon/>
          </div>
          <div className="hidden xl:block">
            <p className={`font-gilroyMedium text-xl text-black group-hover:text-white transition-all ease-linear duration-100 ${show && "text-white"}`}>{data.title}</p>
          </div>
        </div>
        <div className="absolute top-12 -left-2/4 -translate-x-2/4 xl:top-16 lg:left-36  " ref={clickOutSide}>
        {show && <SettingOptions/>}
        </div>
      </div>
    
    </>
  )

  return (
    <>
    {SettingSeparation ? (SettingSeparation):(
      <NavLink to={data.to} className="flex w-10 h-10 xl:w-auto xl:h-auto justify-center xl:justify-normal items-center xl:items-center xl:gap-x-6 xl:mb-7 hover:bg-black xl:py-3 xl:px-6 rounded-full cursor-pointer group transition-all ease-linear duration-100">
      <div className="group-hover:text-white transition-all ease-linear duration-100">
        <ItemIcon/>
      </div>
      <div className="hidden xl:block">
        <p className="font-gilroyMedium text-xl text-black group-hover:text-white transition-all ease-linear duration-100">{data.title}</p>
      </div>
      </NavLink>
    )}
      
    </>
  )
}

export default LeftHomeData
