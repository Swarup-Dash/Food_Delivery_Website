import React, { useState } from "react";
import abc from "../Asset/abc.png";
import { Link } from "react-router-dom";

function Payment() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    exp: "",
    cvv: "",
    paymentMethod: "",
  });

  const [formValid, setFormValid] = useState(false);
  const isButtonDisabled = !formValid;

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Validate form
  const validateForm = () => {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      streetAddress,
      city,
      state,
      zipCode,
      paymentMethod,
    } = formData;

    const isValid =
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      email.trim() !== "" &&
      phoneNumber.trim() !== "" &&
      streetAddress.trim() !== "" &&
      city.trim() !== "" &&
      state.trim() !== "" &&
      zipCode.trim() !== "" &&
      paymentMethod.trim() !== "";

    setFormValid(isValid);
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();

    // If form is valid, proceed to next page
    if (formValid) {
      // Navigate to the next page
      console.log("Form submitted successfully!");
    } else {
      console.log("Please fill out all required fields.");
    }
  };

  // Render payment details based on payment method
  const renderPaymentDetails = () => {
    const { paymentMethod } = formData;
    if (paymentMethod === "UPI") {
      return (
        <div className="grid sm:grid-cols-4 gap-6 mt-6">
          {/* Render UPI payment details */}
          <input
            type="text"
            placeholder="UPI ID"
            required
            name="upiId"
            onChange={handleChange}
            className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
          />
        </div>
      );
    } else if (paymentMethod === "Card") {
      return (
        <div className="grid sm:grid-cols-4 gap-6 mt-6">
          {/* Render card payment details */}
          <div className="col-span-2">
            <input
              type="number"
              placeholder="Card number"
              required
              name="cardNumber"
              onChange={handleChange}
              className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="mm/yy ..EXP"
            required
            pattern="\d{2}/\d{2}"
            name="exp"
            onChange={handleChange}
            className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
          />
          <input
            type="number"
            placeholder="CVV"
            required
            name="cvv"
            onChange={handleChange}
            className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
          />
        </div>
      );
    }
  };

  return (
    <div>
      <div className="font-[sans-serif] bg-white p-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-[#333] inline-block border-b-4 border-[#333] pb-1">
              Payment
            </h2>
          </div>
          <div className="mt-12">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Personal Details */}
              <div>
                <h3 className="text-xl font-bold text-[#333]">01</h3>
                <h3 className="text-xl font-bold text-[#333]">
                  Personal Details
                </h3>
              </div>
              <div className="md:col-span-2">
                <form>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <input
                      type="text"
                      placeholder="First name"
                      required
                      name="firstName"
                      onChange={handleChange}
                      className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      required
                      name="lastName"
                      onChange={handleChange}
                      className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                    <input
                      type="email"
                      placeholder="Email address"
                      required
                      name="email"
                      onChange={handleChange}
                      className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                    <input
                      type="number"
                      placeholder="Phone number"
                      required
                      name="phoneNumber"
                      onChange={handleChange}
                      className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {/* Shopping Address */}
              <div>
                <h3 className="text-xl font-bold text-[#333]">02</h3>
                <h3 className="text-xl font-bold text-[#333]">
                  Shopping Address
                </h3>
              </div>
              <div className="md:col-span-2">
                <form>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <input
                      type="text"
                      placeholder="Street address"
                      required
                      name="streetAddress"
                      onChange={handleChange}
                      className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                    <input
                      type="text"
                      placeholder="City"
                      required
                      name="city"
                      onChange={handleChange}
                      className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                    <input
                      type="text"
                      placeholder="State"
                      required
                      name="state"
                      onChange={handleChange}
                      className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                    <input
                      type="number"
                      placeholder="Zip Code"
                      required
                      name="zipCode"
                      onChange={handleChange}
                      className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {/* Payment method */}
              <div>
                <h3 className="text-xl font-bold text-[#333]">03</h3>
                <h3 className="text-xl font-bold text-[#333]">
                  Payment method
                </h3>
              </div>
              <div className="md:col-span-2">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      className="w-5 h-5 cursor-pointer"
                      id="card"
                      name="paymentMethod"
                      value="Card"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="card"
                      className="ml-4 flex gap-2 cursor-pointer"
                    >
                      <img
                        src="https://readymadeui.com/images/visa.webp"
                        className="w-12"
                        alt="card1"
                      />
                      <img
                        src="https://readymadeui.com/images/american-express.webp"
                        className="w-12"
                        alt="card2"
                      />
                      <img
                        src="https://readymadeui.com/images/master.webp"
                        className="w-12"
                        alt="card3"
                      />
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      className="w-5 h-5 cursor-pointer"
                      id="UPI"
                      name="paymentMethod"
                      value="UPI"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="UPI"
                      className="ml-4 flex gap-2 cursor-pointer"
                    >
                      <img src={abc} className="w-20" alt="UPI" />
                    </label>
                  </div>
                </div>
                {/* Render payment details based on selected payment method */}
                {renderPaymentDetails()}
              </div>
            </div>
            {/* Buttons */}
            <div className="flex flex-wrap justify-end gap-4 mt-12">
              <button
                type="button"
                onClick={handleSubmit}
                className="px-6 py-3.5 text-sm bg-transparent border-2 text-[#333] rounded-md hover:bg-gray-100"
              >
                Pay later
              </button>
              
              <button
                type="submit"
                disabled={isButtonDisabled}
                className={`px-6 py-3.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 ${
                  isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <Link to="/greet">Pay now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
