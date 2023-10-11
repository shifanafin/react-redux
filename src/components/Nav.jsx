import React from 'react'
import {
    Navbar,
    Typography,
    IconButton,
    Button,
    Input,
  } from "@material-tailwind/react";
  import { BellIcon, Cog6ToothIcon,ShoppingCartIcon } from "@heroicons/react/24/solid";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Nav = () => {
  const itemCount = useSelector(state=>state.cart)
  return (
    <div>
    
 

    <Navbar className="mx-auto max-w-screen px-4 py-3 bg-slate-100">
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900">
        <Typography
        
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5"
        >
            <NavLink to="/">
          Product
          </NavLink>
        </Typography>
        <div className="ml-auto flex gap-1 md:mr-4">
          <IconButton variant="text" color="blue-gray">
            <Cog6ToothIcon className="h-4 w-4" />
          </IconButton>
          <IconButton variant="text" color="blue-gray">
            <NavLink to='/cart'>
            <ShoppingCartIcon className="h-4 w-4" />
            </NavLink>
            {itemCount.length}
          </IconButton>
        </div>
        <div className="relative flex w-full gap-2 md:w-max">
          <Input
            type="search"
            placeholder="Type here..."
            className="p-5"
            containerProps={{
              className: "min-w-[288px]",
            }}
          />
          <Button size="sm" className="!absolute right-1 top-1 rounded">
            Search
          </Button>
        </div>
      </div>
    </Navbar>
     
    </div>
  )
}

export default Nav
