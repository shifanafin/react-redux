import { useState } from "react"
import Products from "./components/Products"
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Cart from "./components/Cart"
import Root from "./components/Root"

function App() {
 
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route index element={<Dashboard/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Route>
  ))


  return (
    <>
  <RouterProvider router={router}/>
 
    </>
  )
}

export default App
