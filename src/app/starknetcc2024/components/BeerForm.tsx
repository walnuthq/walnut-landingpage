import {useEffect, useState } from 'react';
import { Header } from "@/components/Header";
import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { RpcProvider, Account, Contract, json, stark, uint256, shortString, CallData,  } from 'starknet';

import { TOKEN_CONTRACT_ABI, TOKEN_CONTRACT_ADDRESS } from '../../../../utils/token';
// import { Connector, useAccount, useConnect, useContract, useContractRead, useContractWrite } from '@starknet-react/core';
// import { ArgentMobileConnector } from "starknetkit/argentMobile";
// import  { InjectedConnector } from "starknetkit/injected";
import { connect, ConnectedStarknetWindowObject, disconnect } from 'starknetkit'
import { InjectedConnector } from 'starknetkit/injected';
import { ArgentMobileConnector } from 'starknetkit/argentMobile';
import { StarknetWindowObject } from 'get-starknet-core';
import { WebWalletConnector } from 'starknetkit/webwallet';

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


const CONTRACT_ADDRESS = '0x000a9a1bf96abc37d4959f395f74d0b00d61ce716dab42789fc2a68249655780'



// mainet
// const CONTRACT_ADDRESS = '0x0168d11d36cd342d52d077296922e7cd505060778464c2d28bc28b4f3a9dc41c';


export default function BeerForm() {
  const [age, setAge] = useState('');
	const [wallet, setWallet] = useState<ConnectedStarknetWindowObject | null>(null);
  const [provider, setProvider] = useState<RpcProvider | undefined>(undefined);

  useEffect(() => {
    const init = async () => {
      const provider = new RpcProvider({ nodeUrl: 'https://free-rpc.nethermind.io/sepolia-juno' });
      setProvider(provider);
    };
    init();
  }, []);

  const handleConnect = async () => {
		const result = await connect({
			connectors: [
				new InjectedConnector({
          options: {id: "braavos"}
        }),
				new WebWalletConnector({
					url: "braavos://dapp/starknetcc2024.walnut.pages.dev/starknetcc2024",
				}),
				new ArgentMobileConnector(),
			]
		});
	
    if (result && result.wallet) {
      setWallet(result.wallet as ConnectedStarknetWindowObject);
    } else {
      setWallet(null);
    }

  };

	async function getTotalSupply() {
		if (!provider) {
			console.log('Provider not initialized');
			return 
		}
		try {
			const tokenContract = new Contract(TOKEN_CONTRACT_ABI, TOKEN_CONTRACT_ADDRESS, provider);
			const result = await tokenContract.call('total_supply');
			console.log('Total supply result:', result.toString());
			return result.toString();
		} catch (error) {
			console.error('Error fetching total supply:', error);
			return
		}
	}

	
	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		if (!wallet || !wallet.isConnected) {
			alert('Please connect your wallet first');
			return;
		}

		const totalSupply = await getTotalSupply();
		if (totalSupply) {
			const supply = BigInt(totalSupply);
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
    
    const calldata = CallData.compile({
      age_proof: {
        proof: proof,
        age: BigInt(age)
      }
    });

    try {
      const tx = await wallet.account.execute({
        contractAddress: CONTRACT_ADDRESS,
        entrypoint: 'get_beer',
        calldata
      });

      console.log('Transaction submitted:', tx.transaction_hash);
      alert('Transaction submitted successfully! Transaction hash: ' + tx.transaction_hash);
		} catch (error: unknown) {
			console.error('Error submitting transaction:', error);
			alert('Error submitting transaction: ' + (error as Error).message);
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
          {!wallet?.isConnected ? 
          (
            <div className="mb-6 md:space-x-10 space-y-2 items-center mx-auto flex justify-center md:flex-row flex-col">
              <Button onClick={handleConnect}>
                Connect
              </Button>
            </div>
          ) : (
            <div className="bg-white shadow sm:rounded-lg text-left">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-base font-semibold leading-6 text-gray-900">Claim a Beer Token</h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                  <p>This form`&apos;`s purpose is to just have fun during Starknet CC. You don`&apos;`t need to specify your exact age.</p>
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
                      placeholder="Your age (any number above 18)"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <Button
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
}