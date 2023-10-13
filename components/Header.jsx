import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <section className=" w-full bg-white sticky top-0 left-0 right-0">
      <nav className=" container mx-auto h-[60px] md:h-[70px] flex items-center justify-between">
        <Link href={"/"}>
          <h1 className=" uppercase text-gray-900 font-semibold">Pick</h1>
        </Link>
      </nav>
    </section>
  );
}
