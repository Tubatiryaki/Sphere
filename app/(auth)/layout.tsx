import Image from "next/image";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}
const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex flex-row items-center justify-center space-x-14 mt-0">
      <div className="hidden lg:block lg:w-2/5 h-screen">
        <Image
          alt="logo"
          src={`/woman.jpeg`}
          width={1080}
          height={1920}
          className="w-full h-screen object-cover brightness-[.7]"
        />
      </div>
      <div className="w-full md:w-3/5 md: mt-16 ">{children}</div>
    </div>
  );
};

export default AuthLayout;
