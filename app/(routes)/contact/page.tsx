import React from "react";
import AccordionPage from "../components/accordion";
import AlertPage from "../components/alert";

const ContactPage = () => {
  return (
    <section className="container mx-auto mt-4">
      <section className="flex flex-row items-center justify-center">
        <section className="w-full md:w-1/2">
          <AlertPage />
        </section>
        <section className="w-full md:w-1/2">
          <AccordionPage />
        </section>
      </section>
    </section>
  );
};

export default ContactPage;
