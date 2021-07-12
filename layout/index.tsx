import React from "react";

import Footer from "@layout/Footer";

// eslint-disable-next-line react/prop-types
const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
