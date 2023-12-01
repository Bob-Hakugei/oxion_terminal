"use client"
import React, { useRef, useState, useEffect } from 'react';
import style from './geometrie.module.scss'
import Scrambler from 'scrambling-text';
import Link from 'next/link';

export default function Geometrie() {


  const [textCarre, setTextCarre] = useState('-- C x 4 --');
  const [textRectangle, setTextRectangle] = useState('-- L + l x 2 --');
  const [textCercle, setTextCercle] = useState('-- 2 x PI x Rayon(r) --')



  useEffect(() => {
    const scramblerCarre = new Scrambler();
    const scramblerRectangle = new Scrambler();
    const scramblerCercle = new Scrambler();

    scramblerCarre.scramble(textCarre, setTextCarre);
    scramblerRectangle.scramble(textRectangle, setTextRectangle);
    scramblerCercle.scramble(textCercle, setTextCercle);
  }, []);

  return (
    <div className='w-3/4 text-center mt-10'>
      <h1>Géométrie</h1>

      <section className='carre border-2 border-green-800 w-full h-screen'>
        <div className='my-5'>
          <h2>Le carré</h2>
          <div className="flex justify-center mt-3 gap-3">
            <span id={style.square}></span>
            <h3>Périmètre :</h3>
            <p>{textCarre}</p>
          </div>
        </div>
        <hr />
        <div className='my-5'>
          <h2>Le rectangle</h2>
          <div className="flex justify-center mt-3 gap-3">
            <span id={style.rectangle}></span>
            <h3>Périmètre :</h3>
            <p>{textRectangle}</p>
          </div>
        </div>
        <div className='my-5'>
          <h2>Le cercle</h2>
          <div className="flex justify-center mt-3 gap-3">
            <span id={style.cercle}></span>
            <h3>Périmètre :</h3>
            <p>{textCercle}</p>
          </div>
        </div>
      </section>

    </div>





  )
}
