import React from 'react'
import Link from 'next/link'

export default function Menu() {
  return (
    <div>
      <nav className="nav">
        <ul className='flex justify-around'>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/experience">Experience</Link>
          </li>
          <li>
            <Link href="/geometrie">Géométrie</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
