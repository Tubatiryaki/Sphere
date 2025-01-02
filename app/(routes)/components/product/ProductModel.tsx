"use client";
import { Button } from "@/components/ui/button";
import React from "react";
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
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="destructive">Detail</Button>
        </DialogTrigger>
        <DialogContent title="detail" className="sm:max-w-[1000px]">
          <section className="w-full">
            <section className="grid grid-cols-1 md:grid-cols-2">
              <section>
                <Image
                  alt={product.title}
                  className="w-full h-96 object-cover mb-4 rounded-xl"
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
                <div className="flex mt-8 justify-between items-center">
                  <span>${product.price}</span>
                  <span className="line-through">${product.mrp}</span>
                </div>
              </section>
            </section>
          </section>
          <DialogFooter>
            <Button type="submit">Save Change</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductModel;
