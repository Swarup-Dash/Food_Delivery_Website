import React, { useState } from 'react';
import axios from 'axios';
import Registerimg from '../Asset/Registerimg.jpg';
import { Link } from 'react-router-dom';
import backgroundImage from '../Asset/Registerbg.jpg';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the error message when the user starts typing
    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

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
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(`http://localhost:5000/api/register`, formData);
        console.log('Registration successful:', response.data);
        // Reset form after successful registration
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
      } catch (error) {
        console.error('Registration failed:', error);
      }
    } else {
      // Form is invalid, do not submit
      console.log('Form has errors:', formErrors);
    }
  };

  return (
    <section className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-24 mb-24">
        {/* Left side with image */}
        <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
          {/* Image and content */}
          <div className="absolute inset-0">
            <img
              className="h-full w-full mr-4 rounded-md object-cover object-top"
              src={Registerimg}
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="relative">
            {/* Content */}
            <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
              {/* Title and features */}
              <h3 className="text-4xl font-bold text-white">
                Foods that make you happy. Once you try it, you will love it.
              </h3>
              <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                <li className="flex items-center space-x-3">
                  <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                    <svg
                      className="h-3.5 w-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white">Commercial License</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Right side with registration form */}
        <div style={{ backgroundImage: `url(${backgroundImage})` }} className="bg-cover bg-center h-auto lg:h-full">
          <div className="px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 text-center ml-12 mr-12">
            <div className="xl:mx-auto text-center xl:w-full xl:max-w-sm 2xl:max-w-md rounded-lg border">
              <p className="mt-8 text-base text-white font-bold">
                Already have an account?{' '}
                <Link to="/login" className="font-semibold text-cyan-400 transition-all duration-200 hover:underline">
                  Sign In
                </Link>
              </p>
              <form onSubmit={handleSubmit} className="mt-8">
                <div className="space-y-5 text-center">
                  <div>
                    <label htmlFor="name" className="text-base font-medium text-white">
                      Full Name
                    </label>
                    <div className="mt-2 ml-auto mr-auto">
                      <input
                        className={`inline-flex w-full sm:w-80 items-center justify-center rounded-md border border-gray-300 bg-transparent px-3.5 py-2.5 font-semibold leading-7 h-10 ml-0 sm:ml-12 mr-0 sm:mr-12 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-white ${formErrors.name && 'border-red-500'}`}
                        type="text"
                        placeholder="Full Name"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {formErrors.name && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="text-base font-medium text-white">
                      Email address
                    </label>
                    <div className="mt-2 ml-auto mr-auto">
                      <input
                        className={`inline-flex w-full sm:w-80 items-center justify-center rounded-md border border-gray-300 bg-transparent px-3.5 py-2.5 font-semibold leading-7 h-10 ml-0 sm:ml-12 mr-0 sm:mr-12 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-white ${formErrors.email && 'border-red-500'}`}
                        type="email"
                        placeholder="Email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="password" className="text-base font-medium text-white">
                      Password
                    </label>
                    <div className="mt-2 ml-auto mr-auto">
                      <input
                        className={`inline-flex w-full sm:w-80 items-center justify-center rounded-md border border-gray-300 bg-transparent px-3.5 py-2.5 font-semibold leading-7 h-10 ml-0 sm:ml-12 mr-0 sm:mr-12 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-white ${formErrors.password && 'border-red-500'}`}
                        type="password"
                        placeholder="Password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      {formErrors.password && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="confirm-password" className="text-base font-medium text-white">
                      Confirm Password
                    </label>
                    <div className="mt-2 ml-auto mr-auto">
                      <input
                        className={`inline-flex w-full sm:w-80 items-center justify-center rounded-md border border-gray-300 bg-transparent px-3.5 py-2.5 font-semibold leading-7 h-10 ml-0 sm:ml-12 mr-0 sm:mr-12 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-white ${formErrors.confirmPassword && 'border-red-500'}`}
                        type="password"
                        placeholder="Confirm Password"
                        id="confirm-password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                      {formErrors.confirmPassword && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.confirmPassword}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex w-full sm:w-80 items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-cyan-500 h-10 ml-0 sm:ml-12 mr-0 sm:mr-12"
                    >
                      <Link to={'/login'}>Submit</Link>
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
                  Sign up with Google
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
                  Sign up with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
