// app/stellar-glimpse.ts
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { createPublicClient, http, formatEther } from "viem";
import { baseSepolia } from "viem/chains";

const RPC_URL = "https://sepolia.base.org";
const CHAIN_ID = 84532;
const EXPLORER = "https://sepolia.basescan.org";

const sdk = new CoinbaseWalletSDK({
  appName: "Stellar Glimpse (Built for Base)",
});

const client = createPublicClient({
  chain: baseSepolia,
  transport: http(RPC_URL),
});

async function connectWallet() {
  const provider = sdk.makeWeb3Provider(RPC_URL, CHAIN_ID);
  const accounts = (await provider.request({
    method: "eth_requestAccounts",
  })) as string[];

  const address = accounts[0];
  const balance = await client.getBalance({ address });

  console.log("Wallet Address:", address);
  console.log("Balance:", formatEther(balance), "ETH");
  console.log("Explorer:", `${EXPLORER}/address/${address}`);
}

connectWallet().catch((err) => {
  console.error("Error:", err.message);
});
