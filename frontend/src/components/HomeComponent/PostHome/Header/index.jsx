import { useRef, useState } from "react"
import { SearchIcon } from "../../../../svg/SearchIcon"
import SearchBox from "./SearchBox";
import OutSideClick from "../../../../functions/click";
import { LeftData } from "../../LeftPart/Data";
import { Link } from "react-router-dom";
import LeftHomeData from "../../LeftPart/LeftHomeData";


const Header = () => {
    const [show, setShow] = useState(false);
    const clickOutSide = useRef(null);
    OutSideClick(clickOutSide,()=>{
      setShow(false);
    })
  return (
    <div className="flex items-center justify-between">
      <div className="font-gilroyBold text-2xl text-black hidden lg:block">Feeds</div>
      <div className="lg:hidden mt-2  w-14 h-14 rounded-full bg-cryan_100 ml-5 "></div>

      <div className="lg:hidden justify-center flex gap-x-3 items-center"> 
          {
            LeftData.map((data, index) => (
              <LeftHomeData key={index} data={data} />
            ))
          }
      </div>

      <div className="w-10 mr-5 lg:mr-0 lg:w-[30%] relative">
          <div className="flex w-12 h-12 lg:h-auto lg:w-auto justify-center  items-center gap-x-3 border-secondary_color border  py-[10px] px-4 rounded-full" onClick={()=>setShow(true)} >
              <div className="text-secondary_color cursor-pointer">
                  <SearchIcon/>
              </div>
              <div className="hidden lg:block">
                  <input type="text" placeholder="Search" className="focus:outline-none font-gilroy text-base w-full" />
              </div>
          </div>
          <div className="absolute -top-7 -right-6 xl:left-[-27px] z-10" ref={clickOutSide}>
              {show && <SearchBox/>}
          </div>
      </div>
      
    </div>
  )
}

export default Header
