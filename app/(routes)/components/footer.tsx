"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function Footer() {
  const router = useRouter();
  const handleclick = () => {
    router.push("/");
  };
  return (
    <>
      <section className="text-sm text-center flex flex-col p-4">
        <section>
          {/* <Button variant="link" onClick={() => router.push("/")}>
            All Right Reserverd Ecommerce Website
          </Button> */}
          <Button variant="link" onClick={handleclick}>
            All Right Reserverd Ecommerce Website
          </Button>
        </section>
        <section>
          <Link
            href={`https://www.linkedin.com/in/tuba-tiryaki/`}
            target="_blank"
          >
            Copyright @ Tuba Tiryaki
          </Link>
        </section>
      </section>
    </>
  );
}

export default Footer;
