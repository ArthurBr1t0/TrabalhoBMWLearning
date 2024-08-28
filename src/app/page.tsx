import { Header } from "@/components/Header";
import React from "react";
import { Banner } from "../components/Banner";
import { Experience } from "@/components/Experience";
import { BannerTwo } from "@/components/BannerTwo";
import { BannerThree } from "@/components/BannerThree";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Experience />
      <BannerTwo />
      <BannerThree />
    </>
  );
}
