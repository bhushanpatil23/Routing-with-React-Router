import React from 'react'
import { Outlet,Link , NavLink} from 'react-router'

const dashboard = () => {
  return (
    <div>
        <h1>Dashboard</h1>
        <p>Dashboard is a page that contains information about the application and its features.</p>

        <nav>
            <p>All the links:</p>
            <ul>
                <li>
                    <NavLink 
                        to={"users"} 
                        replace
                        className={({ isActive }) => 
                          `text-blue-500 hover:underline ${
                            isActive && 
                            "bg-blue-500 text-white"
                          }`
                        }
                        >
                          Users
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="products" 
                        replace
                        className={({ isActive }) => 
                          `text-blue-500 hover:underline ${
                            isActive && 
                            "bg-blue-500 text-white"
                          }`
                        }
                        >
                          Products
                    </NavLink>
                </li>
            </ul>
        </nav>

        <p>These are children below:</p>

        <Outlet />

        <p>footer from Dashboard</p>
    </div>
  )
}

export default dashboard