import React from "react";
import LayoutDocument from "@/layouts/layoutDocument";
import HomeBanner from "@/components/home/banner/HomeBanner";
import HowTo from "@/components/home/how-to/HowTo";
import Lootboxes from "@/components/home/lootboxes/Lootboxes";
import BuyToken from "@/components/home/buy-token/BuyToken";
import Calculator from "@/components/home/calculator/Calculator";
export default function index() {
  return (
    <LayoutDocument title="Home">
      <HomeBanner />
      <Lootboxes />
      <BuyToken />
      <Calculator />
      <HowTo />
    </LayoutDocument>
  );
}
