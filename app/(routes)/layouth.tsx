import React from "react";

interface RoutesLayoutProps {
  children: React.ReactNode;
}

const RoutesLayout = ({ children }: RoutesLayoutProps) => {
  return <>{children}</>;
};

export default RoutesLayout;
