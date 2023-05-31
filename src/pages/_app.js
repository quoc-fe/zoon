import "antd/dist/reset.css";
import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({ once: true, easing: "linear" });
  });
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
