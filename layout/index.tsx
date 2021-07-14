import React from "react";

import Footer from "@layout/Footer";

// eslint-disable-next-line react/prop-types
const Layout: React.FC = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
