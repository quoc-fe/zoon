import ScrollTop from "@/components/common/ScrollTop";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeaderMobile from "@/components/header/HeaderMobile";
import ModalWallet from "@/components/home/modalWallet/ModalWallet";
import Head from "next/head";
import React from "react";

export default function LayoutDocument({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <HeaderMobile />
      {/* <ScrollTop /> */}
      <ModalWallet />
      {children}
      <Footer />
    </>
  );
}
