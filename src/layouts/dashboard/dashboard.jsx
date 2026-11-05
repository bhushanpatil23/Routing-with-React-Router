import React from 'react'
import { Outlet } from 'react-router'

const dashboard = () => {
  return (
    <div>
        <h1>Dashboard</h1>
        <p>Dashboard is a page that contains information about the application and its features.</p>

        <Outlet />

        <p>footer from Dashboard</p>
    </div>
  )
}

export default dashboard