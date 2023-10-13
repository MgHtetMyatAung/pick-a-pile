import { Loader2 } from "lucide-react";
import React from "react";

export default function Loading() {
  return (
    <section className=" w-full h-screen grid place-items-center">
      <Loader2 size={30} className=" animate-spin" />
    </section>
  );
}
