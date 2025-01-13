import React, { useState } from "react";

const FaqSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = index => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  return (
    <div>
      {/* FAQ Section */}
      <div
        id="target-two"
        className="flex flex-col items-center justify-center h-auto h-3/6 p-6 md:p-24"
      >
        {/* Centered FAQ Section */}
        <div className="w-full md:w-full text-center py-6">
          <h2 className="text-4xl font-bold mb-6 md:text-center text-left">
            FAQ
          </h2>
          <div className="space-y-4 w-full">
            <div className="border-b border-gray-300">
              <button
                className="w-full py-4 text-left text-xl font-medium text-gray-800 focus:outline-none"
                onClick={() => toggleFAQ(1)}
              >
                What is Public Design Jobs?
              </button>
              {openFAQ === 1 && (
                <p className="pt-4 pr-4 pb-4 text-gray-600 text-left">
                  Public Design Jobs is a platform that connects freelancers
                  with companies looking for creative talent. We offer a range
                  of opportunities from graphic design to web development,
                  making it easy to find work that fits your skills.
                </p>
              )}
            </div>
            <div className="border-b border-gray-300">
              <button
                className="w-full py-4 text-left text-xl font-medium text-gray-800 focus:outline-none"
                onClick={() => toggleFAQ(2)}
              >
                How do I get started?
              </button>
              {openFAQ === 2 && (
                <p className="pt-4 pr-4 pb-4 text-gray-600 text-left">
                  Simply sign up and create a profile. Once your profile is set
                  up, you can start applying for jobs, showcasing your
                  portfolio, and connecting with clients.
                </p>
              )}
            </div>
            <div className="border-b border-gray-300">
              <button
                className="w-full py-4 text-left text-xl font-medium text-gray-800 focus:outline-none"
                onClick={() => toggleFAQ(3)}
              >
                What services do you offer?
              </button>
              {openFAQ === 3 && (
                <p className="pt-4 pr-4 pb-4 text-gray-600 text-left">
                  We provide a wide range of freelance opportunities in creative
                  fields such as graphic design, web development, content
                  writing, video production, and more. Our platform allows
                  freelancers to find jobs that match their skills and
                  preferences.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
