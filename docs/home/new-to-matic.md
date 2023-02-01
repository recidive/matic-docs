---
id: new-to-polygon
title: Welcome to Polygon
description: Build your next blockchain app on Polygon
keywords:
  - docs
  - matic
  - polygon
  - new to polygon
image: https://wiki.polygon.technology/img/polygon-wiki.png
---

# Welcome to Polygon

Polygon is a scaling solution for public blockchains. Polygon PoS supports all the existing Ethereum tooling along with faster and cheaper transactions.

## Types of Interaction on Polygon

* [Polygon PoS chain](/docs/develop/getting-started)
* [Ethereum + Polygon with PoS bridge](https://docs.polygon.technology/docs/develop/ethereum-polygon/pos/getting-started)
* [Ethereum + Polygon with Plasma bridge](https://docs.polygon.technology/docs/develop/ethereum-polygon/plasma/getting-started)

## Query the blockchain

Most blockchain interactions involve reading its state.

Alchemy offers a reference guide on how to make basic requests to the blockchain. Check out their guide on [how to query Polygon](https://docs.alchemy.com/reference/polygon-sdk-examples).

## Deploy Smart Contracts

* Deploy your Contracts on Polygon
    - [Using Alchemy](/docs/develop/alchemy)
    - [Using Chainstack](/docs/develop/chainstack)
    - [Using QuickNode](/docs/develop/quicknode)
    - [Using Remix](/docs/develop/remix)
    - [Using Truffle](/docs/develop/truffle)
    - [Using Hardhat](/docs/develop/hardhat)

:::note

Configure the Web3 RPC-URL to "https://rpc-mumbai.matic.today", everything else remains the same.

:::

## What is a Blockchain?

Simply put, Blockchain is a shared, immutable ledger for recording transactions, tracking assets and building trust. Head over to [Blockchain Basics](blockchain-basics/basics-blockchain.md) to read more.

## What is a Sidechain?

Think of a Sidechain as a clone of a 'parent' blockchain, supporting transfer of assets to and from the main chain. It is simply an alternate to parent chain that creates a new blockchain with its own mechanism of creating blocks (consensus mechanism). Connecting a sidechain to a parent chain involves setting up a method of moving assets between the chains.

## Validator and delegator roles

On the Polygon Network, you can be a validator or a delegator. See:

* [Who Is a Validator](/docs/maintain/polygon-basics/who-is-validator)
* [Who Is a Delegator](/docs/maintain/polygon-basics/who-is-delegator)

## Architecture

If your goal is to become a validator, it is essential that you understand the Polygon architecture.

See [Polygon Architecture](/docs/maintain/validator/architecture).

### Components

To have a granular understanding of the Polygon architecture, see core components:

* [Heimdall](/docs/pos/heimdall/overview)
* [Bor](/docs/pos/bor/overview)
* [Contracts](/docs/pos/contracts/stakingmanager)

#### Codebases

To have a granular understanding of the core components, see the codebases:

* [Heimdall](https://github.com/maticnetwork/heimdall)
* [Bor](https://github.com/maticnetwork/bor)
* [Contracts](https://github.com/maticnetwork/contracts)

## How-Tos

### Node setup

If you want to run a full node on the Polygon Mainnet or Mumbai Testnet, you can follow the
[Run a Validator Node](/maintain/validate/run-validator.md) guide.

### Staking operations

* [Validator Staking Operations](/docs/maintain/validate/validator-staking-operations)
* [Delegate](/docs/maintain/delegate/delegate)

### External Resources
- [Your first dApp](https://www.youtube.com/watch?v=rzvk2kdjr2I)
- [Sidechains and Childchains](https://hackernoon.com/what-are-sidechains-and-childchains-7202cc9e5994)