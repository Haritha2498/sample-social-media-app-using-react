
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from "react-router-dom"

  
import Homepage from "./Pages/Homepage"

import Signuppage from "./Pages/Signuppage"
import Loginpage from "./Pages/Loginpage"
import Profilepage from "./Pages/Profilepage"
import Settingspage from "./Pages/Settingspage"
import Mainpage from "./Pages/Mainpage"
import Userpost from "./Pages/Userpost"
import AuthLayout from "./Layout/Authlayout"
import Mypostspsge from "./Pages/Mypostspsge"






function App() {

  const router=createBrowserRouter(
    createRoutesFromElements(

<>
<Route path="/" element={<AuthLayout/>} >
      
  <Route path="/" element={<Homepage/>} />
  <Route path='/signup' element={<Signuppage/>} />
  <Route path='/login' element={<Loginpage/>} />
  <Route path='/profile' element={<Profilepage/>} />
  <Route path='/setting' element={<Settingspage/>} />
  <Route path='/main' element={<Mainpage/>} />
  <Route path='/post' element={<Userpost/>} />
  <Route path='/mypost' element={<Mypostspsge/>} />
      
</Route>
      </>
    )
  )
  return (
    <>


    <RouterProvider router={router} />
    </>
  )
}

export default App
