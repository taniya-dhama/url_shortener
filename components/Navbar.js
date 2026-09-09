import React from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Shorten', href: '/shorten' },
  { label: 'Contact Us', href: '/contact' },
]

const Navigation = () => {
  return (
    <nav className='h-16 bg-purple-700 flex justify-between px-3 items-center text-white '>
      <div className="logo font-bold text-2xl">
        <Link href="/">BitLinks</Link>
      </div>

      <ul className='flex justify-center gap-4 items-center'>
        {navLinks.map((link) => (
          <Link href={link.href} key={link.href}>
            <li>{link.label}</li>
          </Link>
        ))}

        <li className='flex gap-3'>
          <Link href="/shorten">
            <button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Try Now</button>
          </Link>
          <Link href="/github">
            <button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>GitHub</button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
