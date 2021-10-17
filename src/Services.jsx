import react from 'react'
import Sdata from './Sdata'
import Card from './Card'

const Services= ()=>{
  return (
    <>
   
            <div className="my-5">
              <h1 className="text-center">Our Services</h1>
            </div>

             <div className="container-fluid mb-5">
               <div className="row">
                 <div className="col-10 mx-auto">
                   <div className="row gy-4">
                    {
                      Sdata.map((values,index)=>{
                         return <Card key={index} title={values.title} imgsrc={values.imgsrc}          />
                      })
                    }
                    
                     </div> 
                 </div>
               </div>
             </div>
          

    </>
  );
}

export default Services;