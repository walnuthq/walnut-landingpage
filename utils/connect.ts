import { connect } from "starknetkit";

export const connectWallet = async() => {
	const { wallet } = await connect();
	return wallet
}