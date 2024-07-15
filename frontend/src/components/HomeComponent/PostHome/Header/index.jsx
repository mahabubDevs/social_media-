import { useState } from "react"
import { SearchIcon } from "../../../../svg/SearchIcon"
import SearchBox from "./SearchBox";


const Header = () => {
    const [show, setShow] = useState(false);
  return (
    <div className="flex items-center justify-between">
      <div className="font-gilroyBold text-2xl text-black">Feeds</div>

    <div className="w-[30%] relative">
        <div className="flex items-center gap-x-3 border-secondary_color border  py-[10px] px-4 rounded-full" onClick={()=>setShow(true)} >
            <div className="text-secondary_color cursor-pointer">
                <SearchIcon/>
            </div>
            <div>
                <input type="text" placeholder="Search" className="focus:outline-none font-gilroy text-base" />
            </div>
        </div>
        <div className="absolute -top-7 left-[-27px]">
            {show && <SearchBox/>}
        </div>
    </div>
      
    </div>
  )
}

export default Header
