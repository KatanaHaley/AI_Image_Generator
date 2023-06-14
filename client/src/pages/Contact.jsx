import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xpzewarp");
  if (state.succeeded) {
      return <h2>Thank you! I'll reach out to you shortly.</h2>;
      
    }
  return (
    <div className="ml-20">

    <div className="mb-20 mt-5 w-full h-56 grid grid-cols-1 content-between">
    <h2 className="font-extrabold text-white text-[35px]">
      Contact me
    </h2>
    <p className="mt-8 text-white text-[14px] mb-5 font-mono font-light text-lg">
      Thanks for visiting IMAGINARIUM!
      I'm the developer, feel free to reach me at the contact form below.
    </p>
      <form className="contact" onSubmit={handleSubmit}>
      <input
        // className="absolute bg-[#222222] border-gray-300 text-[#32CD32] text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full text-base max-w-lg p-3"
        className="mb-5 bg-[#4c4a4a] border-gray-300 text-[#32CD32] text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full text-base max-w-lg p-3"
        id="email"
        type="email" 
        name="email"
        placeholder="Email address"
        autoComplete="email"
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        className="mb-10 bg-[#4c4a4a] border-gray-300 text-[#32CD32] text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full text-base max-w-lg p-3"
        id="message"
        name="message"
        placeholder="Enter the subject of your email"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button
          className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 font-inter font-medium bg-[#3094E6] text-white text-center px-4 py-2 m-2 rounded-md"
          type="submit" 
          disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
    </div>
  );
}

      

export default ContactForm;
