import { Header } from "@/components/Header";
import React from "react";
import { Banner } from "../components/Banner";
import { NossasOfertas } from "@/components/NossasOfertas";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <NossasOfertas />
    </>
  );
}
