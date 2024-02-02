// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
// import { auth } from '../../../firebase'


function Signup ()  {

  // const [values, setValues ] = useState({
  //   name: "",
  //   email: "",
  //   pass: "",
  // });

  // const [errorMsg, setErrorMsg] = useState(""); 

  // const handleSubmission = () => {
  //   if(!values.name || !values.email || !values.pass){
  //     setErrorMsg("Fields cannot bew empty");
  //     return;
  //   }
  //   setErrorMsg("");
    
  //   createUserWithEmailAndPassword(auth,values.email, values.pass).then((res)=>{
  //     console.log(res);
  //   }).catch((err) => console.log("Error-", err));

  // };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
    <div className=" w-full max-w-sm p-4 bg-gray-500 border border-gray-200 rounded-lg shadow sm:p-6 md:p-7 dark:bg-gray-800 dark:border-gray-700">
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <h1 className="text-2xl font-bold text-blue-500 flex justify-center">VictoryThreads</h1>
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign Up to our platform</h5>
        <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name"
            required
            // onChange={(event) => 
            //   setValues((prev) => ({ ...prev, name: event.target.value}))
            // }
          />

          <label htmlFor="email" className=" mt-3 block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@company.com"
            required
            // onChange={(event) =>
            //   setValues((prev) => ({ ...prev, email: event.target.value}))
            // }

          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
            // onChange={(event) =>
            //   setValues((prev) => ({ ...prev, password: event.target.value}))
            // }
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
        </div>
        {/* <b className='text-red font-bold flex justify-center' >{errorMsg}</b> */}
        <button
          type="submit"
          // onClick={handleSubmission}
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
         SignUp
        </button>
        <p className='text-white'>Already have an account ?  <Link to="/Login" className={`text-blue-700 hover:underline dark:text-blue-500`}>Login</Link></p>
      </form>
    </div>
    </div>
  );
};

export default Signup;
