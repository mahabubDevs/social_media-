
import { useEffect, useRef, useState } from 'react';
import { SearchIcon } from '../../../../svg/SearchIcon'

const SearchBox = () => {
    const [iconVisible, setIconVisible] = useState(true);
    const inputBox = useRef(null);

    useEffect(()=>{
        inputBox.current.focus();
    },[]);
  return (
    <div className='w-[300px]   left-[-27px] lg:w-[334px] p-7 box-border bg-white shadow-md rounded-md min-h-[400px] max-h-[70vh]'>
      <div className="flex items-center gap-x-3 border-secondary_color border  py-[10px] px-4 rounded-full" >
            {iconVisible && (
                <div className="text-secondary_color cursor-pointer" onClick={()=>inputBox.current.focus()}>
                <SearchIcon/>
            </div>
            )

            }
            <div>
                <input
                ref={inputBox} 
                type="text" 
                placeholder="Search" 
                className="focus:outline-none font-gilroy text-base"
                onFocus={()=>setIconVisible(false)}
                onBlur={()=>setIconVisible(true)}
                />
            </div>
        </div>
        <div className='mt-1 font-gilroySemibold'>
          <h3>Recent Searching</h3>
        </div>
    </div>
  )
}

export default SearchBox
