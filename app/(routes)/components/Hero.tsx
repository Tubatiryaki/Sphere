"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselList } from "@/constant";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
const Hero = () => {
  return (
    <>
      <Carousel
        className="container"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {CarouselList.map((item, index) => (
            <CarouselItem key={index}>
              <Image
                alt="slider"
                src={item.image}
                width={1350}
                height={1080}
                className="h-auto object-cover md:h-[450px] lg:h-[520px]  object-center "
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </>
  );
};

export default Hero;
