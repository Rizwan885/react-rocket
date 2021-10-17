import react from 'react'

import { NavLink } from 'react-router-dom';

import rocket from '../src/rocket.png'


const Card= (props)=>{
  return (
    <>
     <div className="col-md-4 col-10 mx-auto">
            <div className="card d-flex align-items-center" >
                <img src={props.imgsrc} className="card-img-top w-25 h-25" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{props.title}</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
                </div>
            </div>
            </div>

    </>
  );
}

export default Card;