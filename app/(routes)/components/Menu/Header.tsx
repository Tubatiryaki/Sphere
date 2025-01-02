"use client";
import { ModeToggle } from "@/components/ModeToggle";
import { Input } from "@/components/ui/input";
import { Heart, Search, UserIcon } from "lucide-react";
import { Pacifico } from "next/font/google";
import React, { useState } from "react";
import NavMenu from "./NavMenu";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";
import CartMenu from "./Cart";
import Link from "next/link";
import { useRouter } from "next/navigation";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const Header = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  console.log(query);
  const handleSearch = () => {
    if (query.trim()) {
      // query i url formatına çevirmek için encodeURIComponent kullandık
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  };
  return (
    <>
      <section className="mx-auto bgone shadow-lg">
        <section className="container flex flex-row items-center justify-between p-5">
          <section className={pacifico.className}>Ecommerce</section>
          <section className="hidden md:flex relative md:min-w-96 lg:w-1/2">
            <Input
              className="w-full border-s-2"
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button
              onClick={handleSearch}
              variant="link"
              className="absolute right-1 "
            >
              <Search />
            </Button>
          </section>
          <section className="flex flex-row items-center space-x-3">
            <ModeToggle />
            <Link href="/fav">
              <Heart />
            </Link>
            <CartMenu />
            <Link href="/login">
              <UserIcon />
            </Link>

            <MobileMenu />
          </section>
        </section>
        <NavMenu />
      </section>
    </>
  );
};

export default Header;
