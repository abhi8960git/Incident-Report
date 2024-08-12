import { rsktestnet } from "@/lib/utils/RootstockTestnet";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { arbitrum, arbitrumGoerli, arbitrumSepolia, optimismGoerli, optimismSepolia, rootstock, sepolia } from "wagmi/chains";

export const rainbowkitConfig = getDefaultConfig({
  appName: "Rootstock Rainbowkit",
  projectId: "73bfede1812912189a63f8b354eac692",
  chains: [optimismSepolia],
});
