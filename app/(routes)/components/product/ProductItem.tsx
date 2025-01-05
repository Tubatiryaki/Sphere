"use client";
import { ProductType } from "@/constant";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProductModel from "./ProductModel";
import { useToast } from "@/hooks/use-toast";

interface ProductItemProps {
  product: ProductType;
}
const ProductItem = ({ product }: ProductItemProps) => {
  const { toast } = useToast();
  const handleClick = () => {
    const date = new Date();

    toast({
      title: `${product.title} Evet bu`,
      description: `${date}`,
      variant: "success",
    });
  };
  return (
    <>
      <Card className="">
        <CardHeader>
          <CardTitle>{product.title}</CardTitle>
          <CardDescription>{product.description} ;</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            alt={product.title}
            className="w-full h-56 object-cover mb-4 rounded-xl"
            width={500}
            height={500}
            src={product.image}
          />
          <div className="flex justify-between items-center">
            <span>${product.price}</span>
            <span className="line-through">${product.mrp}</span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <ProductModel product={product} />
          <Button variant="default" onClick={handleClick}>
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProductItem;
