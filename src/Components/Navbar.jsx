import React from 'react'
import logo from '../assets/Images/shopping-cart-1105049.svg'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
  const linkClass = ({ isActive }) => isActive ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2" : " text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
  return (
    <nav className="bg-blue-700 border-none border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <a className="flex flex-shrink-0 items-center mr-4" href="/index.html">
              <img
                className="h-12 w-auto"
                src={logo}
                alt="React Jobs"
              />
              <span className="hidden md:block text-white text-2xl font-bold ml-2"
              >Shopping App</span>
            </a>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink
                  to='/'
                  className={linkClass}
                >Home</NavLink>
                <NavLink
                  to='/mens'
                  className={linkClass}
                >Men's Clothing</NavLink>
                <NavLink
                  to='/females'
                  className={linkClass}
                >Female's Clothing</NavLink>
                <NavLink
                  to='/cart'
                  className={linkClass}
                >Cart</NavLink>
                <NavLink
                  to='/brands'
                  className={linkClass}
                >Brands</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar