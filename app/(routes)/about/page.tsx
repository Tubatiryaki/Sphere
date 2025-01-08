import React from "react";

import { columns, Payment } from "../components/Datatable/columns";
import { Metadata } from "next";
import { DataTable } from "../components/Datatable/data-table";

export const metadata: Metadata = {
  title: "About | Hakkımda",
  description: "Tuba Tiryaki, Frontend Developer",
  robots: {
    index: false,
    follow: false,
  },
};

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      product: "Veri var",
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 101,
      product: "Watch",
      status: "pending",
      email: "m@example.com",
    },
  ];
}
const AboutPage = async () => {
  const data = await getData();

  //  Kaynak kodlara seo için kullanılan tagleri eklemek için kullanılır
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    author: "tubatiryaki",
    isPublishede: true,
    tags: [
      "web development",
      "next.js",
      "mobile development",
      "shopify development",
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      ></script>
      <div className="container mx-auto py-10 border mt-10 rounded-xl dark:border-slate-600">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default AboutPage;
