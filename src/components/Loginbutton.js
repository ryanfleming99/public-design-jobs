import React from "react";

const Loginbutton = props => {
  const { children, ...rest } = props;

  const signUp = () => {
    window.location.href = "/sign-up"; // Update the browser's URL
  };
  return (
    <button className="" onClick={signUp} {...rest}>
      {children}
    </button>
  );
};

export default Loginbutton;
