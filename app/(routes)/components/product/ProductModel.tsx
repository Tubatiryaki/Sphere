"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { ProductType } from "@/constant";

interface ProductModalProps {
  product: ProductType;
}
const ProductModel = ({ product }: ProductModalProps) => {
  const [quantity, setQuantity] = useState(1);
  const handleInc = () => {
    setQuantity(quantity + 1);
  };
  const handleDec = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="destructive" className="">
            Detail
          </Button>
        </DialogTrigger>
        <DialogContent title="detail" className="sm:max-w-[1000px] ">
          <section className="w-full h-auto ">
            <section className="grid grid-cols-1 md:grid-cols-2 justify-center text-center items-center">
              <section>
                <Image
                  alt={product.title}
                  className="w-full h-40 xl:h-96 object-cover mb-4 rounded-xl"
                  width={500}
                  height={500}
                  src={product.image}
                />
              </section>
              <section className="p-4">
                <h2 className="text-4xl font-semibold">{product.title}</h2>
                <p className="mt-5 font-light">
                  {product.description}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque, quisquam iusto, aut itaque, dicta harum at
                  excepturi eligendi vero esse temporibus. Nostrum autem
                  inventore vel.
                </p>
                <div className="flex mt-8 justify-between items-center text-3xl font-semibold">
                  <span>${product.price}</span>
                  <span className="line-through t">${product.mrp}</span>
                </div>
                <section>
                  <section className="flex flex-row items-center gap-4 mt-4">
                    <Button
                      variant={`destructive`}
                      size={`icon`}
                      onClick={handleDec}
                    >
                      -
                    </Button>
                    {quantity}
                    <Button
                      variant={`destructive`}
                      size={`icon`}
                      onClick={handleInc}
                    >
                      +
                    </Button>
                  </section>
                </section>
              </section>
            </section>
            <DialogFooter>
              <Button type="submit">Add to Cart</Button>
            </DialogFooter>
          </section>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductModel;
