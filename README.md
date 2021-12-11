# Slay The Metaverse

<h4 align="center"> A decentralized NFT coop fighting game  </h4>

<h4 align="center"> Join your friends and kill bosses together for prizes </h4>

<p align="center">
  <a href="https://sonarcloud.io/dashboard?id=Samielleuch_Neghlbouh">
    <img
	 src="https://sonarcloud.io/api/project_badges/measure?project=Samielleuch_Neghlbouh&metric=alert_status">
  </a>
 <a href="https://sonarcloud.io/dashboard?id=Samielleuch_Neghlbouh">
    <img
	 src="https://sonarcloud.io/api/project_badges/measure?project=Samielleuch_Neghlbouh&metric=security_rating">
  </a>
  <a href="https://sonarcloud.io/dashboard?id=Samielleuch_Neghlbouh">
    <img
	 src="https://sonarcloud.io/api/project_badges/measure?project=Samielleuch_Neghlbouh&metric=sqale_rating">
  </a> 	
</p>

<p align="center">
  <a href="#KeyFeatures">Key Features</a> •
  <a href="#installation">How To Use</a> •
  <a href="#faq">FAQ</a> •
  <a href="#team">The Team </a> •
  <a href="#contributing">Contribute</a> •
  <a href="#license">License</a>
</p>

![Recordit GIF](http://g.recordit.co/jLQPrUyeb2.gif)

---
## Developed Using 
- Ganache for Ethereum Blockchain testing 
- Hardhat for smart contracts creation and deployment 
- ERC721 NFT standards with openzeppelin
- ether, VueJs with Vuex Store
---
## Key Features 

- Choose which character to mint and link to your wallet adress
- characters meta data is stored offchain
- each player can help fight the big boss each attack is a transaction that is stored on the blockchain
- once the boss dies the most dammage dealers receive rare nft rewards

## Table of Contents

> `Contents` of this documentation.

- [Installation](#installation)
- [Contributing](#contributing)
- [Neghlbouh Team](#team)
- [FAQ](#faq)
- [License](#license)

## Installation

- All the `code` required to get started

### Clone

- Clone this repo to your local machine using `https://github.com/Samielleuch/Neghlbouh.git`

### Setup

- Install Ganache

```shell
https://trufflesuite.com/ganache/
```

- Install Hardhat

```shell
npm install --save-dev hardhat
```

- Install Depnedencies

```shell
npm install
```

- Start Ganache
- make sure that HardHat is linked to ganache in ` hardhat.config.js `

```

localhost: {
      url: "http://127.0.0.1:7545"
    }
```
- Install Metamask and link it to ganache

- to check that hardnet is linked to ganache check for the available accounts

```
npx hardhat --network localhost accounts
```
- compile contracts

```
npx hardhat --network localhost compile
```
-  set this to fix openssl envelope issues on the console
```
export NODE_OPTIONS=--openssl-legacy-provider
```

- compile contracts

```
npx hardhat --network localhost compile
```

- Deploy the contract to the blockchain using the deployment script

```
npx hardhat --network localhost run ./scripts/deploy.js
```
>the output of this command give you the contract adreses that you need to put it in  vuex frontend file : ` frontend/src/store/index.js `

```
    contract_address: "0x4fdeC56e37aa2BF685B35A34dA66074e8E34585a",
```
now lets start the frontend  to do so :

```shell
cd frontend
```
- Install Depnedencies

```shell
npm install
```
- Install Vue

```shell
npm install vue
```
- Run frontend and enjoy the game :D

```shell
npm run serve
```


## Contributing

> To get started...

### Step 1

- **Option 1**
    - 🍴 Fork this repo!

- **Option 2**
    - 👯 Clone this repo to your local machine using `https://github.com/Samielleuch/Slaythemetaverse.git`

### Step 2

- **HACK AWAY!** 🔨🔨🔨

### Step 3

- 🔃 Create a new pull request using <a href="https://github.com/Samielleuch/Slaythemetaverse/compare/" target="_blank">`https://github.com/Samielleuch/Slaythemetaverse/compare/`</a>.

---
