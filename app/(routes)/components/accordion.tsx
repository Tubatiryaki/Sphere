import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ssList } from "@/constant";
const AccordionPage = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {ssList.map((item, index) => (
        <AccordionItem key={index} value={item.id}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.description}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionPage;
