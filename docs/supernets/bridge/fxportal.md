---
id: fxportal
title: Overview
description: "Learn about the FXPortal bridge for Polygn <> Ethereum"
keywords:
  - docs
  - polygon
  - fxportal
  - bridge
  - polybft
  - ethereum
---

## In-built bridge integration

With the help of PolyBFT, the Polygon client supports an in-built bridging mechanism (a two-way bridge)
known as **FxPortal**, which enables arbitrary message passing between a Supernet (`sidechain`) and another proof-of-stake blockchain (`rootchain`). Transfers can occur without mapping.
> Messages can be any type of data (arbitrary bytes).
> The FXPortal is an add-on ontop of PolyBFT which can be enabled or disabled.

The bridge uses the same consensus protocol and does not need a third-party application
[chainbridge](additional-features/chainbridge/overview.md)

Message passing between a `rootchain` to a given `sidechain` is accomplished by continuously
syncing the state of the `rootchain` with the `sidechain`, known as `StateSync`. These transfers of state happen between system calls.

> `StateSync` is a mechanism that can be used in the context of blockchain systems to facilitate real-time synchronization.

When passing messages from a `sidechain` to a `rootchain`, the validator set will commit checkpoints, a snapshot of
the `sidechain` state. Checkpoints are used by the client as a reference point. All transactions that occur on the
`sidechain` are checkpointed to the `rootchain` on a periodic basis by the validators. Liveliness is also ensured via
checkpoints. The checkpoints are submitted to the associated `rootchain` asset contract.

> A blockchain checkpoint is a point in the blockchain at which the state of the network is recorded and stored.
> This can serve as a reference point for the blockchain, allowing validators to verify the integrity and accuracy of the
> data on the network.

FXPortal supports `ERC20`, `ERC721`, and other token standards.
