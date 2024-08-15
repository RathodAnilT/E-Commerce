// src/pages/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-6">
      <div className="w-full max-w-4xl bg-gray-800 text-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <form className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="first-name" className="block text-white mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="last-name" className="block text-white mb-1">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-white mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-white mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-white mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white"
              required
            ></textarea>
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
