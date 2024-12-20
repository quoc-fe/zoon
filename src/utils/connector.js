import {
  pulsechain,
  bsc,
  arbitrum,
  mainnet,
  bscTestnet,
  polygon,
  goerli,
} from "wagmi/chains";
import { InjectedConnector } from "wagmi/connectors/injected";
import { publicProvider } from "wagmi/providers/public";

import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectLegacyConnector } from "wagmi/connectors/walletConnectLegacy";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { configureChains } from "wagmi";
export const defaultChains = [
  mainnet,
  pulsechain,
  bsc,
  arbitrum,
  bscTestnet,
  polygon,
  goerli,
];
// Configure chains for connectors to support

export const { chains, publicClient } = configureChains(defaultChains, [
  publicProvider(),
]);

// Set up connectors
export const Connectors = [
  new MetaMaskConnector({
    chains,
  }),
  new WalletConnectLegacyConnector({
    chains,
    options: {
      infuraId: "41f4503b6a1943d9a10b757db68646d7",
      qrcode: true,
      bridge: "https://bridge.walletconnect.org",
    },
  }),
  new CoinbaseWalletConnector({
    chains,
    options: { appName: "coinbase" },
  }),
];
