'use client'
import { mainnet, sepolia } from "@starknet-react/chains";

import {
  StarknetConfig,
  publicProvider,
  argent,
  braavos,
  useAccount,
  useConnect,
  useContract,
  useContractWrite,
  useContractRead,
  useInjectedConnectors,
  Connector
} from "@starknet-react/core";
import BeerForm from "./components/BeerForm";


export default function StarknetCC2024() {
  const chains = [mainnet];
  const provider = publicProvider();

  // const connectors = [
  //   // new InjectedConnector({ options: { id: "argentX" } }),
  //   // new InjectedConnector({ options: { id: "braavos" } }),
  //   // new ArgentMobileConnector({
  //   //   dappName: "Walnut",
  //   //   url: 'https://walnut.dev/',

  //   // }),

  // ];
  const { connectors } = useInjectedConnectors({
    // Show these connectors if the user has no connector installed.
    recommended: [
      argent(),
      braavos(),
    ],
    // Hide recommended connectors if the user has any connector installed.
    includeRecommended: "onlyIfNoConnectors",
    // Randomize the order of the connectors.
    order: "random"
  });
  
  return (
    <StarknetConfig chains={chains} provider={provider} connectors={connectors}>
      <BeerForm />
    </StarknetConfig>
  );
}
