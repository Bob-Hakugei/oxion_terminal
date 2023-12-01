"use client"
import React, { useRef, useState, useEffect } from 'react';
// load 'scrambling-text' module.
import Scrambler from 'scrambling-text';



export default function Home() {
  // define the text to be scrambled as state.
  const [text, setText] = useState('- Bob Hakugei 白鯨 -');
  // create an instance of Scrambler using useRef.
  const scramblerRef = useRef(new Scrambler());

  useEffect(() => {
    // call scramble function with the text to be scrambled and handler.
    scramblerRef.current.scramble(text, setText);
  }, []);
  
  return (
    <>
      <div className="w-1/2 mx-auto">
        <div className="mx-auto">
          <h1 className='text-center'>Home</h1>
           <h2>{text}</h2>
          
        </div>
      </div>
    </>
  )
}
