import React from "react";
import Link from "next/Link";
const Link = props => {
  const { children, ...rest } = props;
  return (
    <>
      <Link {...rest}>{children}</Link>
    </>
  );
};

export default Link;
