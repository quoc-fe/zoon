import React from "react";
import LayoutDocument from "@/layouts/layoutDocument";
import BannerClaim from "@/components/home/banner/BannerClaim";
import Intro from "@/components/home/intro/Intro";
export default function index() {
  return (
    <LayoutDocument title="Zoon - Explore, Battle, Evolve on Arbitrum!">
      <BannerClaim />
    </LayoutDocument>
  );
}
