import react,{useState} from 'react'

const Contact= ()=>{
const [value,setValue]=useState({
  fullname:'',
  email:'',
  phone:'',
  msg:''
});

const formSubmit=(e)=>{

  e.preventDefault();

  alert(`Full Name:${value.fullname}
         Email:  ${value.email}
         Phone:  ${value.phone}
         Msg:  ${value.msg}
  `);

}

const inputEvent=(event)=>{
    const {name,value}=event.target;

    setValue((prevVal)=>{
     return { 
        ...prevVal, 
        [name]:value
      };
    });
}


  return (
    <>
     <div className="my-5">
       <h1 className="text-center"> Contact US</h1>
     </div>
     <div className="container contact_div">
         <div className="row">
           <div className="col-md-6 col-10 mx-auto">
             <form  onSubmit={formSubmit} >
             <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Full Name</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" 
            name="fullname"
            value={value.fullname}
            onChange={inputEvent}
            
            placeholder="Enter your name"/>
            </div>
           
             <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" 
            name="email"
            value={value.email}
            onChange={inputEvent}
            
            placeholder="name@example.com"/>
            </div>
           
             <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Phone</label>
            <input type="number" class="form-control" id="exampleFormControlInput1" 
            name="phone"
            value={value.phone}
            onChange={inputEvent}
            
            placeholder="Mobile Number"/>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Message</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                  name="msg"
                  value={value.msg}
                  onChange={inputEvent}
              
              ></textarea>
            </div>

            <div class="col-12">
            <button class="btn btn-outline-primary" type="submit">Submit form</button>
            </div>
            
          
             </form>
           </div>
         </div>
     </div>

    </>
  );
}

export default Contact;