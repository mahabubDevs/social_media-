
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Registration from './pages/registration'
import Home from './pages/home'
import Login from './pages/login'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/registration' element={<Registration/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Route>
  )
)

function App() {


  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
