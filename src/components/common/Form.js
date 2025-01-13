import { useState } from "react";

const FormSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="custom-gradient py-24 px-6 flex flex-col items-center text-center">
      {/* Section Heading */}
      <div className="mb-4">
        <h2 className="text-2xl md:text-4xl font-bold text-white">
          Your email for access to events, free giveaways and the latest jobs
        </h2>
      </div>

      {/* Form */}
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="w-full text-left">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="w-full text-left">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full"
            >
              Sign Up
            </button>
          </form>
        ) : (
          <div className="text-center">
            <h3 className="text-xl font-semibold text-green-600">
              Thank you for signing up!
            </h3>
            <p className="mt-2 text-gray-600">
              We’ve received your details and will be in touch soon.
            </p>
          </div>
        )}
      </div>
      <p className="text-lg md:text-xl text-gray-200 mt-10">
        We won`t send you junk mail!
      </p>
    </div>
  );
};

export default FormSection;
