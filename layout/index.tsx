import React from "react";

import Footer from "@layout/Footer";

interface LayoutPropsType {
  children?: any;
}

const Layout: React.FC<LayoutPropsType> = ({ children }: LayoutPropsType) => {
  return (
    <React.StrictMode>
      {children ? children : null}
      <Footer />
    </React.StrictMode>
  );
};

export default Layout;
