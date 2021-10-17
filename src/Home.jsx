import react from 'react'
import { NavLink } from 'react-router-dom';
import rocket from '../src/rocket.png'
import Common from './Common'

const Home= ()=>{
  return (

      <>
    <Common name="Grow your business with"  imgsrc={rocket} visit='/services' btnname="Get Started" />


     </>
  );
}

export default Home;