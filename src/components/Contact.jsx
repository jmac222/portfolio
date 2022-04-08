import React from 'react'
import 'aos/dist/aos.css';

import {BsFillBootstrapFill} from 'react-icons/bs'
import{FaReact} from 'react-icons/fa'
import {IoLogoNodejs} from 'react-icons/io'
import {DiJavascript1} from 'react-icons/di'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {SiTypescript} from 'react-icons/si'
import {SiJquery} from 'react-icons/si'
import {DiSass} from 'react-icons/di'
import FadeInSection from './Fade';





const Contact = () => {

  return (
    <div className='contact' id='contact' >
      <FadeInSection>

        <div className='contact-form' >
          <h1>About Me</h1>

          <div className='languages'>
            <h1><BsFillBootstrapFill /></h1>
            <h1><FaReact /></h1>
            <h1><IoLogoNodejs /></h1>
            <h1><DiJavascript1 /></h1>
            <h1><AiFillHtml5 /></h1>
            <h1><DiCss3 /></h1>
            <h1><SiTypescript /></h1>
            <h1><SiJquery /></h1>
            <h1><DiSass /></h1>
          </div>
          
        </div>
      </FadeInSection>



    </div>
  )
}

export default Contact