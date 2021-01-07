import React from "react";
import { ColorProvider } from "../context/colorMode";
import Header from "./header";
import Footer from "./Footer";

export const Layout: React.FC = ({ children }) => {
  return (
    <ColorProvider>
      <Header />
      {children}
      <Footer />
    </ColorProvider>
  );
};
