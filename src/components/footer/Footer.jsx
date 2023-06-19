import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "../../assets/logo_web.png";
import React from "react";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
export default function Footer() {
  const router = useRouter();
  return <footer className="bg-[#fffef5]"></footer>;
}
