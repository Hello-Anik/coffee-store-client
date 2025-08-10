import React from 'react';

const Signup = () => {
    return (
       
  <div className="hero-content flex-col">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Sign Up !</h1>

    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sign Up </button>
        </form>
      </div>
    </div>
  </div>

    );
};

export default Signup;