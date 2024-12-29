import React from "react";
import Header from "./components/Menu/Header";
import Footer from "./components/footer";

interface RoutesLayouthProps {
  children: React.ReactNode;
}
const RoutesLayouth = ({ children }: RoutesLayouthProps) => {
  return;
  <>
    <Header />
    {children}
    <Footer />
  </>;
};

export default RoutesLayouth;
