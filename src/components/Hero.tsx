import React from 'react'
import mobileHero from '../assets/image-hero-mobile.jpg';

import desktopHero from '../assets/image-hero-desktop.jpg';
export default function Hero() {
  return (
    <div>
        <picture>
            <source srcSet={desktopHero} media='(min-width:63.8rem)'/>
            <img src={mobileHero} alt="" className='w-full object-cover' />
        </picture>
    </div>
  )
}
