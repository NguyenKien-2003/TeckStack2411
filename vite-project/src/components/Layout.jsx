import React from "react";

const Layout = (props) => {
  console.log(props.children);
  return (
    <>
      {props.children}

    </>
  );
};

export default Layout;