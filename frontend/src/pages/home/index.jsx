import { Helmet } from "react-helmet-async"
import LeftPart from "../../components/HomeComponent/LeftPart"
import PostHome from "../../components/HomeComponent/PostHome"



const Home = () => {
 
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="grid grid-cols-[1fr,3fr,1fr] ml-2 mr-2 mt-10">
        <div className=" mr-2">
          <LeftPart/>
        </div>
        <div className="ml-2 mr-2 ">
          <PostHome/>
        </div>
        <div className="ml-2 bg-pink_100">3</div>
      </div>
    </>
  )
}

export default Home
