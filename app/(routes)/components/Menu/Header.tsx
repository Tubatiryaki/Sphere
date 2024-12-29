"use client";
import { ModeToggle } from "@/components/ModeToggle";
import { Input } from "@/components/ui/input";
import { Heart, Search, UserIcon } from "lucide-react";
import { Pacifico } from "next/font/google";
import React from "react";
import NavMenu from "./NavMenu";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";
import CartMenu from "./Cart";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});
const Header = () => {
  return (
    <>
      <section className="mx-auto bgone shadow-md">
        <section className="container flex flex-row items-center justify-between p-5">
          <section className={pacifico.className}>Ecommerce</section>
          <section className="hidden md:flex relative md:min-w-96 lg:w-1/2">
            <Input className="w-full border-s-2" />
            <Button variant="link" className="absolute right-1 ">
              <Search />
            </Button>
          </section>
          <section className="flex flex-row items-center space-x-3">
            <ModeToggle />
            <Heart />
            <CartMenu />
            <UserIcon />

            <MobileMenu />
          </section>
        </section>
        <NavMenu />
      </section>
    </>
  );
};

export default Header;
