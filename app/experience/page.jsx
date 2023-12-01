import React from 'react'
import Link from 'next/link'
import JapanAnimation from './japan_animation/page'







export default function Experience() {
  return (
    <div>
      <h1 className='text-center'>Experience</h1>
      <div className="flex justify-center mt-20">
        <button className='border-4 p-5  hover:text-pink-700  rounded-full border-green-200 text-4xl'><Link href="/experience/cards">Cards</Link></button>
      </div>

      <div className="japan_animation">
        <JapanAnimation />
      </div>

    </div>
  )
}
