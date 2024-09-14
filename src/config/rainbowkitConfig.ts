import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {arbitrum, arbitrumSepolia, filecoinCalibration, optimismSepolia, polygonAmoy, polygonZkEvmCardona} from "wagmi/chains";
import { Chain } from "@rainbow-me/rainbowkit";

const myCustomNetwork: Chain = {
  id: 1029, // Replace with your chain's ID
  name: 'BitTorrent Chain Donau',
  // @ts-ignore
  network: 'BitTorrent Chain Donau',
  nativeCurrency: {
    decimals: 18,
    name: 'BTT',
    symbol: 'BTT',
  },
  rpcUrls: {
    public: { http: ['https://pre-rpc.bt.io/'] },
    default: { http: ['https://pre-rpc.bt.io/'] },
  },
  blockExplorers: {
    default: { name: 'MyScan', url: 'https://testscan.bt.io/' },
  },
  testnet: true,
}
export const rainbowkitConfig = getDefaultConfig({
  appName: "Rootstock Rainbowkit",
  projectId: "73bfede1812912189a63f8b354eac692",
  chains: [optimismSepolia,polygonAmoy,filecoinCalibration,myCustomNetwork,polygonZkEvmCardona,arbitrumSepolia],
});
