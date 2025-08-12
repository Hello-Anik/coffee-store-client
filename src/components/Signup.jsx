import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Form } from 'react-router';
import Swal from 'sweetalert2';

const Signup = () => {
  const {createUser}= use(AuthContext);
  console.log(createUser)
  

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const {email, password, ...restFormData} = Object.fromEntries(formData.entries());
    
   

    // create user in the firebase
    createUser(email, password)
    .then(result=> {
      console.log(result.user)
       const userProfile = {
      email,
      ...restFormData,
      creationTime : result.user?.metadata?.creationTime,
      lastSignInTime : result.user?.metadata?.lastSignInTime

    }
      //send data to the db
      fetch('http://localhost:5000/users',{
        method : "POST",
        headers : {
          "content-type" : "application/json"
        },
        body : JSON.stringify(userProfile)
      })
      .then(res=> res.json())
      .then(data => {
        console.log('data after post', data)
       if(data.insertedId){
        
            Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Account is created  successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
       }
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  
    return (
       
  <div className="hero-content flex-col">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Sign Up !</h1>

    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSignUp} className="fieldset">

            <label className="label">Name</label>
          <input type="text" name='name'  className="input" placeholder="enter your name" />
          <label className="label">Address</label>
          <input type="text" name='address'  className="input" placeholder="enter address" />
          <label className="label">Phone</label>
          <input type="text" name='number'  className="input" placeholder="enter your number" />
          <label className="label">Photo</label>
          <input type="text" name='photoUrl'  className="input" placeholder="enter your photo url" />
        
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password'  className="input" placeholder="Password" />
        
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sign Up </button>
        </form>
      </div>
    </div>
  </div>

    );
};

export default Signup;