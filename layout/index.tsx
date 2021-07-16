import React from "react";

import Footer from "@layout/Footer";

// eslint-disable-next-line react/prop-types
const Layout: React.FC = ({ children }) => {
  return (
    <React.StrictMode>
      {children}
      <Footer />
    </React.StrictMode>
  );
};

export default Layout;
