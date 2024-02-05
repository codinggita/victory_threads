import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {

  // const history = useHistory();

  // const handleLogin = () => {
  //   // Perform login logic here

  //   // Redirect to the home page after successful login
  //   history.push('/Home');
  // };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
    <div className=" w-full max-w-sm p-4 bg-gray-500 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form className="space-y-6" action="#">
        <h1 className="text-2xl font-bold text-blue-500 flex justify-center">VictoryThreads</h1>
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign Up to our platform</h5>
        <div>
          <label htmlFor="Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
             Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
             Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@company.com"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
             Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <div className="flex items-start">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Remember me
            </label>
          </div>
          <a href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">
            Forgot Password?
          </a>
        </div>
        
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Signup
        </button>
       
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Already have an account?
          <Link to="#" className={`text-blue-700 hover:underline dark:text-blue-500`}>
            Sign in
          </Link>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Signup;
