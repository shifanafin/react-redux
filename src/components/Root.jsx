import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import { Provider } from 'react-redux'
import { store } from '../store/store'

const Root = () => {
  return (

    <>
    <Provider store={store}>
    <Nav/>
    <main >
        <Outlet/>
    </main>
    </Provider>
    </>
  )
}

export default Root