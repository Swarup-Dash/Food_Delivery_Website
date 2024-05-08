import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../Asset/Login1.jpg';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the error message when user starts typing
    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.password.trim()) {
      errors.password = 'Password is required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with submission
      console.log('Form submitted:', formData);
      // You can add your form submission logic here
    } else {
      // Form is invalid, do not submit
      console.log('Form has errors:', formErrors);
    }
  };

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '120vh' }}>
      <div className='text-white'>
        <section>
          <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 bg-inherit w-100 ml-12">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md border 1px solid bg-transparent border-double">
              <div className="mb-2 flex justify-center ">
                <svg
                  width="50"
                  height="56"
                  viewBox="0 0 50 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path></path>
                </svg>
              </div>
              <h2 className="text-center text-2xl font-bold leading-tight text-white">
                Sign in to your account
              </h2>
              <p className="mt-2 text-center text-sm from-white ">
                Don&#x27;t have an account?{" "}
                <Link to="/register" className="font-extrabold text-cyan-400 transition-all duration-200 hover:underline">
                  Create a free account
                </Link>
              </p>
              <form onSubmit={handleSubmit} className="mt-8 text-center">
                <div className="space-y-5">
                  <div>
                    <label htmlFor="email" className="text-base font-medium white">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        className={`inline-flex w-full sm:w-80 items-center justify-center rounded-md border border-gray-300 bg-transparent px-3.5 py-2.5 font-semibold leading-7 h-10 ml-0 sm:ml-12 mr-0 sm:mr-12 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-white ${formErrors.email && 'border-red-500'}`}
                        type="email"
                        placeholder="Email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      {/* Error message */}
                      {formErrors.email && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="">
                      <label htmlFor="password" className="text-base font-medium white">
                        Password
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        className={`inline-flex w-full sm:w-80 items-center justify-center rounded-md border border-gray-300 bg-transparent px-3.5 py-2.5 font-semibold leading-7 h-10 ml-0 sm:ml-12 mr-0 sm:mr-12 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-white ${formErrors.password && 'border-red-500'}`}
                        type="password"
                        placeholder="Password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                      {/* Error message */}
                      {formErrors.password && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex w-full sm:w-80 items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-cyan-500 h-10 ml-0 sm:ml-12 mr-0 sm:mr-12"
                    >
                      Forgot password
                    </button>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex w-full sm:w-80 items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-cyan-500 h-10 ml-0 sm:ml-12 mr-0 sm:mr-12"
                    >
                      <Link to="/customer">Get Started</Link>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-2"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
              <div className="mt-3 mb-12 flex flex-col sm:flex-row sm:space-x-3 justify-center">
                <button
                  type="button"
                  className="relative inline-flex w-full sm:w-40 items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none mb-3 sm:mb-0"
                >
                  <span className="mr-2 inline-block">
                    <svg
                      className="h-6 w-6 text-rose-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                    </svg>
                  </span>
                  Sign in with Google
                </button>
                <button
                  type="button"
                  className="relative inline-flex w-full sm:w-40 items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                >
                  <span className="mr-2 inline-block">
                    <svg
                      className="h-6 w-6 text-[#2563EB]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                    </svg>
                  </span>
                  Sign in with Facebook
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
