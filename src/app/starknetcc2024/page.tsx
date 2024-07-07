'use client'
import { mainnet, sepolia } from "@starknet-react/chains";
// import { ArgentMobileConnector } from "starknetkit/argentMobile";
// import  { InjectedConnector } from "starknetkit/injected";
import { TOKEN_CONTRACT_ABI, TOKEN_CONTRACT_ADDRESS } from "./token";
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
import {useEffect, useState } from 'react';
import { Header } from "@/components/Header";
import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

const CONTRACT_ABI = [
  {
    "inputs": [
      {
        "name": "beer_token_address",
        "type": "felt"
      }
    ],
    "name": "constructor",
    "outputs": [],
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "name": "age_proof",
        "type": "Beer::AgeProof"
      }
    ],
    "name": "get_beer",
    "outputs": [],
    "type": "function"
  },
  {
    "inputs": [],
    "name": "beer_token",
    "outputs": [
      {
        "name": "res",
        "type": "felt"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "name": "FreeBeer",
    "type": "event",
    "keys": [],
    "data": [
      {
        "name": "winner",
        "type": "felt"
      }
    ]
  },
  {
    "name": "AgeProof",
    "type": "struct",
    "members": [
      {
        "name": "proof",
        "type": "felt"
      },
      {
        "name": "age",
        "type": "u128"
      }
    ]
  }
];

// const CONTRACT_ADDRESS = '0x000a9a1bf96abc37d4959f395f74d0b00d61ce716dab42789fc2a68249655780'



// mainet
const CONTRACT_ADDRESS = '0x0168d11d36cd342d52d077296922e7cd505060778464c2d28bc28b4f3a9dc41c';

const BeerForm = () => {

  const [age, setAge] = useState('');
  const { connect, connectors } = useConnect();
  const { account } = useAccount();

	const { address } = useAccount();
	const { contract } = useContract({
		abi: CONTRACT_ABI,
		address: CONTRACT_ADDRESS,
	});


	const {
		writeAsync,
		data,
		isPending,
	} = useContractWrite({
		calls: [],
	});

  const { data: totalSupply } = useContractRead({
    address: TOKEN_CONTRACT_ADDRESS,
    abi: TOKEN_CONTRACT_ABI,
    functionName: 'total_supply',
    args: []
  });


  console.log(totalSupply?.toString());


const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (totalSupply) {
    const supply = BigInt(totalSupply.toString());
    const formattedSupply = (supply / BigInt(10**18)).toString();
    const count = Number(formattedSupply);

    if (count >= 31) {
      alert('Beer is over!');
      return;
    }
  }
  if (parseInt(age) < 18) {
		alert('You must be 18 or older to get a beer token.');
    return;
  }

  const proof = Math.floor(Math.random() * 1000 + 1);
  const ageProof = {
    proof: proof,
    age: age,
  };

	console.log(ageProof.age);
	const calls = [
		{
			contractAddress: CONTRACT_ADDRESS,
			entrypoint: 'get_beer',
			calldata: [ageProof.proof, ageProof.age]
		}
	]

	try {
		await writeAsync({ calls });
		alert('Transaction submitted successfully!');
	} catch (error) {
		console.error('Error submitting transaction:', error);
		alert('Error submitting transaction. Please check the console for details.');
  }
};

const openBraavosMobile = () => {
  window.open(`braavos://dapp/walnut.dev/starknetcc2024`);
};

const tryConnect = (connector: Connector, isAvailable: boolean) => {
  if (isAvailable) {
    connect({connector});
  } else if (connector.id === "braavos") {
    openBraavosMobile();
  } 
}

  return (
		<>
			<Banner/>
			<Header/>
			<Container className="pb-16 pt-20 text-center lg:pt-32">
		  <div className="max-w-2xl mx-auto">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">Get a Beer</h1>
      <p className="mx-auto my-6 max-w-2xl text-lg tracking-tight text-slate-700">Fill out the form below and submit a transaction to get beer tokens. For each beer token you receive, Roman will buy you one beer during Starknet CC 2024. Only 10 beers are available so hurry up!</p>
      {!account ? 
      (
        <div className="mb-6 md:space-x-10 space-y-2 items-center mx-auto flex justify-center md:flex-row flex-col">
          {connectors.map((connector) =>{ 
          const isAvailable = connector.available();
          return (
            <Button
              key={connector.id}
              onClick={() => tryConnect(connector, isAvailable)}
            >
              Connect {connector.id === 'braavos' ? 'Braavos' : connector.id === 'argentX'? 'Argent' : 'Argent mobile'}
            </Button>
          )})}
        </div>
      ) : (
        <div className="bg-white shadow sm:rounded-lg text-left">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-base font-semibold leading-6 text-gray-900">Claim a Beer Token</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>This form&apos;s purpose is to just have fun during Starknet CC. You don&apos;t need to specify your exact age.</p>
            </div>
            <form onSubmit={handleSubmit} className="mt-5 sm:flex sm:items-center">
              <div className="w-full sm:max-w-xs">
                <label htmlFor="age" className="sr-only">
                  Age
                </label>
                <input
                  id="age"
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                  placeholder="You age (any number above 18)"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <Button
                disabled={isPending}
                type="submit"
                className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto"
              >
                Claim
              </Button>
            </form>
          </div>
        </div>
      )}

    </div>
		</Container>
		<Footer/>
		</>

  );
};

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
