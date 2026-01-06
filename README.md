# Stellar Glimpse (Built for Base)

Stellar Glimpse is a lightweight, read-only tool designed for quickly inspecting and validating the Base Sepolia network. It provides developers with an easy way to check network configuration, inspect wallet balances, and validate testnet contracts in a safe and efficient manner.

---

## What This Tool Is For

Stellar Glimpse is meant for quick checks and verifications. It allows you to:
- Confirm your connection to the Base Sepolia network (chainId 84532)  
- Check wallet balances without sending transactions  
- Review contract deployments and explorer links for verification  

All actions are read-only, ensuring that no blockchain data is modified in the process.

---

## Repository Structure

- **app/stellar-glimpse.ts**  
  The core script that connects to Coinbase Wallet and queries Base Sepolia for blockchain data.

- **contracts/**  
  Solidity contracts deployed to Base Sepolia for testnet validation:
  - `mapping.sol`  
  - `inheritance.sol`  
  - `errors.sol`  

- **package.json**  
  Contains dependencies for the project, including Coinbase Wallet SDK and viem.

- **README.md**  
  Documentation explaining the purpose, setup, and usage of the tool.

---

## Supported Network

Base Sepolia  
chainId (decimal): 84532  
Explorer: https://sepolia.basescan.org  

---

## How It Works

Stellar Glimpse connects to Coinbase Wallet using the Coinbase Wallet SDK and interacts with Base Sepolia through the viem library. It retrieves data like wallet balances, transaction counts, and gas prices, and provides direct explorer links for independent validation.

No transactions are signed or broadcast.

---

## License

MIT License  
Copyright (c) 2025 YOUR_NAME

---

## Testnet Deployment (Base Sepolia)

The following contracts were deployed on Base Sepolia for validation and testing.

Network: Base Sepolia  
chainId (decimal): 84532  
Explorer: [sepolia.basescan.org](https://sepolia.basescan.org)

Contract mapping.sol address:  
0x8Ae4CEe0D242a8a98def6E963CF23ba014FCAb3d

Deployment and verification:
- [Deployment Link](https://sepolia.basescan.org/address/0x8Ae4CEe0D242a8a98def6E963CF23ba014FCAb3d)
- [Code Verification](https://sepolia.basescan.org/0x8Ae4CEe0D242a8a98def6E963CF23ba014FCAb3d/0#code)

Contract inheritance.sol address:  
0x1E8056ee383425C394168018a57aE9E712CF3258 

Deployment and verification:
- [Deployment Link](https://sepolia.basescan.org/address/0x1E8056ee383425C394168018a57aE9E712CF3258 )
- [Code Verification](https://sepolia.basescan.org/0x1E8056ee383425C394168018a57aE9E712CF3258/0#code)

Contract errors.sol address:  
0xDa4314077ce2B6Db111C160C576acB13D9545964

Deployment and verification:
- [Deployment Link](https://sepolia.basescan.org/address/0xDa4314077ce2B6Db111C160C576acB13D9545964)
- [Code Verification](https://sepolia.basescan.org/0xDa4314077ce2B6Db111C160C576acB13D9545964/0#code)

These testnet deployments are part of a process to validate Base tooling before moving to mainnet.

## Author

GitHub: [detox-lend](https://github.com/detox-lend)  

Email: detox-lend-0k@icloud.com 

X: voranlxw1

---
