
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";

const NotLoggedInUser = () => {
    const{userInfo} = useSelector((state)=>state.registration);
  return userInfo ? <Navigate to="/"/> : <Outlet/>;
}

export default NotLoggedInUser
