import "antd/dist/reset.css";
import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { WagmiConfig, createConfig, configureChains } from "wagmi";
import { pulsechain, bsc, arbitrum, mainnet } from "wagmi/chains";
import { InjectedConnector } from "wagmi/connectors/injected";
import { publicProvider } from "wagmi/providers/public";

import { MetaMaskConnector } from "wagmi/connectors/metaMask";

// API key for Ethereum node
// Two popular services are Infura (infura.io) and Alchemy (alchemy.com)

const defaultChains = [mainnet, pulsechain, bsc, arbitrum];
// Configure chains for connectors to support

export const { chains, publicClient } = configureChains(defaultChains, [
  publicProvider(),
]);

// Set up connectors
export const Connectors = [
  new MetaMaskConnector({
    chains,
  }),
];

const config = createConfig({
  autoConnect: false,
  connectors: Connectors,
  publicClient: publicClient,
});
export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({ once: true, easing: "linear" });
  });
  return (
    <WagmiConfig config={config}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </WagmiConfig>
  );
}
