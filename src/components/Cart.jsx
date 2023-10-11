import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";
import {removeCart} from "../store/cartSlice"



const Cart = () => {
  const dispatch=useDispatch()

  const removeItem = (id)=>{
    dispatch(removeCart(id))
  }
  const cart = useSelector(state => state.cart)
  console.log(cart)
  return (
    <div>
       <div className='flex flex-wrap items-center justify-center gap-20 h-full p-5'>
      {cart.map((item,id)=>(
        <div key={id} className='flex flex-col gap-10  '>
          <Card className="w-[400px]">
            
      <CardHeader  className="">
        <img
          src={item.image}
          alt="card-image"
         className='object-fill h-[400px] w-full'
        />
      </CardHeader>
      <CardBody className='p-5'>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
          {item.title}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
          {item.price}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
        {item.description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-200 p-5 mt-6 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          onClick={()=>removeItem(item.id)}
        >
          Remove
        </Button>
      </CardFooter>
      </Card> 
    
       
          
       
        </div>
      ))}
      
      
      
      </div>
    </div>
  )
}

export default Cart