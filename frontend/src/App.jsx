
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Registration from './pages/registration'
import Home from './pages/home'
import Login from './pages/login'
import NotLoggedInUser from './privateRouter/NotLoggedInUser'
import LoggedInUser from './privateRouter/LoggedInUser'
import RootLayout from "./components/RootLayout"
import 'swiper/css';
import CreatePostPopUp from './components/HomeComponent/PostHome/createPostPopUp'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<LoggedInUser/>}>
        <Route element={<RootLayout />}>
          <Route path='/' element={<Home/>}></Route>
        </Route>
      </Route>
      <Route path='/' element={<NotLoggedInUser/>}>
          <Route path='/registration' element={<Registration/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
      </Route>
      
    </Route>
  )
)

function App() {


  return (
    <>
      <CreatePostPopUp/>
     <RouterProvider router={router} />
    </>
  )
}

export default App
