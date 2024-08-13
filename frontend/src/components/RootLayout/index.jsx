
import { Outlet } from 'react-router-dom'
import LeftPart from '../HomeComponent/LeftPart'
import Header from '../HomeComponent/PostHome/Header'
import RightPart from '../HomeComponent/RightPart'

const RootLayout = () => {
  return (
    <>
     <div className='mx-5 2xl:mx-20 grid grid-cols-1 lg:grid-cols-[70px,4fr] xl:grid-cols-[1fr,2.9fr,1.1fr] ml-2 mr-2 mt-5 xl:mt-10'>
      <div className=" hidden lg:block ">
        <LeftPart/>  
        </div>
      <div className='mx-9'>
        <div >
          <Header/>
         </div>
        <Outlet/>
      </div>
      <div className="  hidden xl:block">
        <RightPart/>
        </div>
      </div>

    </>
  )
}

export default RootLayout
