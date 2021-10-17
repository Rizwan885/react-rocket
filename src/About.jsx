import react from 'react'
import { NavLink } from 'react-router-dom';
import rocket from '../src/rocket.png'
import Common from './Common'

const About= ()=>{
  return (

      <>
     <Common name="Welcome to About Page"  imgsrc={rocket} visit='/contact' btnname="Contact Now" />

     </>
  );
}

export default About;