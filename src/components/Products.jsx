import React, { useEffect, useState } from 'react'
import axios    from 'axios'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";
import { useDispatch,useSelector } from 'react-redux';
import {addCart} from '../store/cartSlice'
import { getProducts } from '../store/productSlice';


const Products = () => {
  const dispatch = useDispatch()
  const {data:datas,status} = useSelector(state=>state.product)



    useEffect(()=>{
      dispatch(getProducts())
   
},[])

const addtoCart = (datas)=>{
  dispatch(addCart(datas))
}

if(status==='loading'){
<p>Loading....</p>
}
  return (
   
      <div className='flex flex-wrap items-center justify-center gap-20 h-full p-5'>
      {datas.map((item,id)=>(
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
          onClick={()=>addtoCart(item)}
        >
          Add to Cart
        </Button>
      </CardFooter>
      </Card> 
    
       
          
       
        </div>
      ))}  
      
      
      
      </div>
        
  )


}

export default Products
