"use client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { categories } from "@/constant";
import Link from "next/link";
const MobileMenu = () => {
  return (
    <>
      <section className="flex md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <section className="flex flex-col mt-8 space-y-6">
              {categories.map((component) => (
                <Link key={component.title} href={component.href}>
                  {component.title}
                </Link>
              ))}
            </section>
          </SheetContent>
        </Sheet>
      </section>
    </>
  );
};

export default MobileMenu;
