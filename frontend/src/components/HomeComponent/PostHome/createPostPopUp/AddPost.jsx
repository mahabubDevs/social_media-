import React from 'react'
import { Media } from '../../../../svg/Media'
import { LiveIcon } from '../../../../svg/Live'
import { CircleProfileIcon } from '../../../../svg/Circleprofile'

const AddPost = () => {
  return (
    <div className='px-2 py-1 border border-line_color rounded-md flex justify-between items-center'>
          <span className='font-gilroySemibold text-black text-base'>Add to your post</span>
          <div className='flex items-center gap-x-3'>
              <div className='w-10 h-10 rounded-full cursor-pointer transition-all ease-liner duration-100 hover:bg-[#ececec] flex items-center justify-center'>
                  <Media/>
              </div>
              <div className='w-10 h-10 rounded-full cursor-pointer transition-all ease-liner duration-100 hover:bg-[#ececec] flex items-center justify-center'>
                  <LiveIcon/>
              </div>
              <div className='w-10 h-10 rounded-full cursor-pointer transition-all ease-liner duration-100 hover:bg-[#ececec] flex items-center justify-center'>
                  <CircleProfileIcon/>
              </div>
          </div>
    </div>
  )
}

export default AddPost
