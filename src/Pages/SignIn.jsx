import React from "react";
import { Link } from "react-router";

const SignIn = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
         <div>
           Don't have an account? Please <Link className="text-blue-700 hover:underline" to='/auth/signup'>SignUp</Link>
          </div>
      </div>
    </div>
    </div>
  );
};

export default SignIn;
