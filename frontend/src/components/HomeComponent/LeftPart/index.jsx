import { LeftData } from "./Data"
import LeftHomeData from "./LeftHomeData"
import LeftProfile from "./LeftProfile"


const LeftPart = () => {
  return (
    <>
      <div>
      <LeftProfile/>
      </div>
      <div>
        {LeftData.map((data,index)=>(
          <LeftHomeData key={index} data={data}/>
        ))}
        
      </div>
    </>
  )
}

export default LeftPart
