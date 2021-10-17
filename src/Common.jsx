import react from 'react'
import { NavLink } from 'react-router-dom';
import rocket from '../src/rocket.png'

const Common= (props)=>{
  return (
     <section id="header" className="d-flex align-items-center ">
        <div className="container-fluid bg-light">
             <div className="row">
                 <div className="col-10 mx-auto">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 my-5 d-flex justify-content-center flex-column"  >

                      <h1>{props.name} <strong className="brand-name">TECH</strong></h1>

                      <h2 className="my-3">We are the team of talented developer making websites</h2>
                      <div className="mt-3">
                        <NavLink to="/props.visit" className="btn-get-started">{props.btnname}</NavLink>
                      </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                      <img src={rocket} className="img-fluid animated w-25 h-25" alt="homeimage" />
                    </div>
                 </div>
             </div>
         </div>

     </section>
  );
}

export default Common;