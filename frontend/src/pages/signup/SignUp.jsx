import React from "react";
import GenderCheckbox from "./GenderCheckbox";
//import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center max-w-96  mx-auto'>
        <div className='w-full p-10 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'> SignUp
                <span className='text-blue-500 p-1'>ChatApp</span>
 
            </h1>
            <form>
			<div>
                    <label className="label p-2">
                        <span className='text-base font-bold label-text'>Full Name</span>
                    </label>
                    <input type='text' placeholder='Enter' className='w-full input input-bordered h-10'/>
                </div>
                <div>
                    <label className="label p-2">
                        <span className='text-base font-bold label-text'>Username</span>
                    </label>
                    <input type='text' placeholder='Enter' className='w-full input input-bordered h-10'/>
                </div>
                <div>
                    <label className="label p-2">
                        <span className='text-base font-bold label-text'>Password</span>
                    </label>
                    <input type='text' placeholder='Enter password' className='w-full input input-bordered h-10'/>
                </div>
				<div>
                    <label className="label p-2">
                        <span className='text-base font-bold label-text'>Confirm Password</span>
                    </label>
                    <input type='text' placeholder='Enter password' className='w-full input input-bordered h-10'/>
                </div>
				<GenderCheckbox/>
				<div>
					<a  href="#" className="text-sm hover:underline hover:text-blue-600 mt-4 inline-block" > Already have an account</a>
					
					<button className="btn btn-block btn-sm mt-2 ">signup</button>
				</div>

            
            </form>
        </div>

    </div>
  );
}

export default Login;