import React from 'react'
import { Outlet, NavLink } from 'react-router'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard__title">Dashboard</h1>
      <nav className="dashboard__nav" aria-label="Dashboard pages">
        <NavLink
          to="products"
          className={({ isActive }) =>
            `dashboard__link${isActive ? ' dashboard__link--active' : ''}`
          }
        >
          Products
        </NavLink>
        <NavLink
          to="users"
          className={({ isActive }) =>
            `dashboard__link${isActive ? ' dashboard__link--active' : ''}`
          }
        >
          Users
        </NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default Dashboard