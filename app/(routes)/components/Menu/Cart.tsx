"use client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingBagIcon } from "lucide-react";
const CartMenu = () => {
  return (
    <>
      <section className="flex md:hidden">
        <Sheet>
          <SheetTrigger>
            <ShoppingBagIcon />
          </SheetTrigger>
          <SheetContent>
            <section className="flex flex-col mt-8 space-y-6">
              Empty cart
            </section>
          </SheetContent>
        </Sheet>
      </section>
    </>
  );
};

export default CartMenu;
