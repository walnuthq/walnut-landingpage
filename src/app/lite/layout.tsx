"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/components/lite/header";
import Footer from "@/components/lite/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <div className="font-inter tracking-tight text-gray-900 antialiased">
      <div className={`flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip font-inter tracking-tight text-gray-900`}>
          <Header />
          <main className="grow">{children}</main>
          <Footer />
      </div>
    </div>
  );
}
