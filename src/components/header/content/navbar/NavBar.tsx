import React from 'react'
import { PAGE_SECTIONS } from '@/typings/nav-bar'
import Link from 'next/link'
import './navbar.css'

const NavBar = () => {
  return (
    <nav>
        <div className="containerNavLinks">
            {
                PAGE_SECTIONS.map((section) => (
                    <Link key={section.id} href={`${section.route}`}>
                        {section.title}
                    </Link>
                ))
            }
        </div>
    </nav>
  )
}

export default NavBar