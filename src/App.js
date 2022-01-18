import React, { useState } from 'react';

const App = () => {
  const [fullName , setFullName] = useState({
    fname : '',
    lname : '',
    email : '',
    phone : '',
    qualification:'',
  });

  const onSubmits = (event) => {
    event.preventDefault();
    alert("form submitted");
    
  };
 
  const inputEvent = (event) =>{
    //console.log('event.target.value');
    //console.log('event.target.name');

  const {value , name} = event.target;

    //const value = event.target.value;
    //const name = event.target.name;

    setFullName((preValue) => {
      return{
        ...preValue,
        [name]: value,
      }
      //console.log(preValue);
     // if(name === 'fname'){
       // return{
         // fname: value,
          //lname: preValue.lname,
          //email: preValue.email,
          //phone: preValue.phone,
        //};
      //}else if(name === 'lname'){
        //return{
          //fname: preValue.fname,
          //lname: value,
          //email:preValue.email,
          //phone:preValue.phone,
          
        //};
      //}else if(name === 'email'){
         // return{
            //fname: preValue.fname,
            //lname: preValue.lname,
            //email:value,
            //phone:preValue.phone,
         // };
      //}else if(name === 'phone'){
           // return{
             // fname: preValue.fname,
             // lname: value,
              //email:preValue.email,
              //phone:value,
           // };
     // };

    })
    
  }
  
 return(
    
    <>
      <form onSubmit={onSubmits}>
      <h1>Hello{fullName.fname}{fullName.lname}</h1>
      <p>{fullName.email}</p>
      <p>{fullName.phone}</p>

      <input type = "text" 
         placeholder='Enter Your Name'
         name='fname' onChange={inputEvent} 
         value={fullName.fname}
         />
      
      <br/>


      <input type = "text" 
        placeholder='Enter Your lastname'
        name='lname' onChange={inputEvent}
        value={fullName.lname}
        />

        <input type = "email" 
        placeholder='Enter Your Email'
        name='email' onChange={inputEvent}
        value={fullName.email}
        />

        <input type = "number" 
        placeholder='Enter Your Number'
        name='phone' onChange={inputEvent}
        value={fullName.phone}
        />

        <input type = "text" 
        placeholder='Enter Your Qualifiaction'
        name='Qualifiaction' onChange={inputEvent}
        value={fullName.qualification}
        />
    
    

      <button type ="submit"> Submit Me</button>
      </form>
    </>
    
  );

  
}
export default App;