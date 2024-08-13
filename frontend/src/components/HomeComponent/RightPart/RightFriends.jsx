import React from 'react'
import { Link } from 'react-router-dom'
import { ReduceText } from '../../../functions/ReductText';

const RightFriends = () => {

  const orginal = "md mahabub rhamaknf kdfsd";
  const reducText = ReduceText(orginal,10);

  return (
    <div>
      <div className='flex items-center justify-between mb-7'>
        <div>
          <h4 className='font-gilroyBold text-lg text-black'>
            Friends Request
          </h4>
        </div>
        <div>
          <Link to="/friends" className='text-base font-gilroyMedium py-2 px-4 border-black text-black hover:bg-black transition-all ease-linear duration-100 hover:text-white rounded-full'>
          See All
          </Link>
        </div>
      </div>
      <div className=' flex items-center justify-between pb-1'>
          <div className=' flex items-center gap-x-3 pr-4'>
              <div className='w-12 h-12 bg-secondary_color rounded-full'></div>
              <div className='w-[62%]'>
                <h5 className='font-gilroySemibold text-base text-black leading-none'>
                  {reducText}
                </h5>
                <span className='font-gilroyLight text-sm text-secondary_color'>
                  2 hours age
                </span>
              </div>
          </div>
          <div className='flex items-center gap-x-2'>
            <button className='px-4 py-2 bg-black rounded-full text-white font-gilroy'>Accept</button>
            <button className='px-4 py-2 bg-red rounded-full text-white font-gilroy'>Delete</button>
          </div>
      </div>
      <div className=' flex items-center justify-between'>
          <div className=' flex items-center gap-x-3 pr-4'>
              <div className='w-12 h-12 bg-secondary_color rounded-full'></div>
              <div className='w-[62%]'>
                <h5 className='font-gilroySemibold text-base text-black leading-none'>
                  Reaz Hossain
                </h5>
                <span className='font-gilroyLight text-sm text-secondary_color'>
                  2 hours age
                </span>
              </div>
          </div>
          <div className='flex items-center gap-x-2'>
            <button className='px-4 py-2 bg-black rounded-full text-white font-gilroy'>Accept</button>
            <button className='px-4 py-2 bg-red rounded-full text-white font-gilroy'>Delete</button>
          </div>
      </div>
    </div>
  )
}

export default RightFriends
