import "antd/dist/reset.css";
import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { WagmiConfig, createConfig, configureChains } from "wagmi";

import { useRouter } from "next/router";
import { Connectors, publicClient } from "@/utils/connector";

// API key for Ethereum node
// Two popular services are Infura (infura.io) and Alchemy (alchemy.com)

const config = createConfig({
  autoConnect: false,
  connectors: Connectors,
  publicClient: publicClient,
});
export default function App({ Component, pageProps }) {
  // useEffect(() => {
  //   Aos.init({ once: true, easing: "linear" });
  // });
  const router = useRouter();
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, [router]);
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "cs",
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        includedLanguages:
          "ar,zh-CN,cs,en,et,tl,fr,de,el,iw,hi,id,it,ja,ko,fa,pt,ro,ru,es,tr,ur,vi", // include this for selected languages
      },
      "google_translate_element"
    );
  };

  return (
    <React.StrictMode>
      <WagmiConfig config={config}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </WagmiConfig>
    </React.StrictMode>
  );
}
