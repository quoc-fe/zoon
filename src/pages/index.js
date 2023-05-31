import React from "react";
import LayoutDocument from "@/layouts/layoutDocument";
import HomeBanner from "@/components/home/banner/HomeBanner";
import HomeAbout from "@/components/home/about/HomeAbout";
import HowTo from "@/components/home/how-to/HowTo";
export default function index() {
  return (
    <LayoutDocument title="Home">
      <HomeBanner />
      <HomeAbout />
      {/* <HowTo /> */}
    </LayoutDocument>
  );
}
