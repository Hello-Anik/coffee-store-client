import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';

const Signin = () => {

    const {loginUser} = use(AuthContext);
    const handleSignin = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const email = formData.get("email");
        const password = formData.get("password");
        // console.log(email);
        // console.log(password);
        
        loginUser(email, password).then(result => {
            const user = result.user;
            console.log(user);

            //update last signin time to the database
            const userInfo = {
              email,
              lastSignInTime : result.user?.metadata?.lastSignInTime,
            }

           fetch('http://localhost:5000/users',{
              method : "PATCH",
              headers : {
                "content-type" : "application/json"
              },
              body : JSON.stringify(userInfo)
           }).then(res => res.json())
           .then(data => {
            console.log('data after update', data);
           })
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div>
            <div className="hero-content flex-col">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Sign In !</h1>

    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSignin} className="fieldset">

        
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password'  className="input" placeholder="Password" />
        
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sign In </button>
        </form>
      </div>
    </div>
  </div>
        </div>
    );
};

export default Signin;