import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

export default function NavBar() {
  return (
    <header className='bg-blue-600'>
      <div className='container mx-auto flex justify-between'>
        <nav className='flex'>
          <NavLink
            to='/'
            exact
            activeClassName='text-white'
            className='inline-flex items-center py-6 px-3 mr-4 text-grey-800 hover:text-red-800 text-4xl font-bold cursive tracking-widest'>Jeff</NavLink>
          <NavLink
            to='/about'
            activeClassName='text-white'
            className='inline-flex items-center py-3 px-3 mr-6 rounded text-grey-200 hover:text-red-800 '
          >About</NavLink>
          <NavLink
            to='/project'
            activeClassName='text-white'
            className='inline-flex items-center py-3 px-3 mr-6 rounded text-grey-800 hover:text-red-800 '>Projects</NavLink>
          <NavLink
            to='/post'
            activeClassName='text-white'
            className='inline-flex items-center py-3 px-3 mr-6 rounded text-grey-800 hover:text-red-800 '>Blog Post</NavLink>
        </nav>
        <div className='inline-flex py-3 px-3 my-6'>
          <SocialIcon url='https://www.facebook.com/profile.php?id=100066960173812&show_switched_toast=true' className='mr-4' target='_blank' fgColor='#fff' style={{ height: 35, width: 35 }} />
        </div>
      </div>
    </header>
  )
}