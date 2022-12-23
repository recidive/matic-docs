---
id: state-receiver
title: StateReceiver
description: "The State receiver contract for Polygon Edge"
keywords:
  - docs
  - polygon
  - edge
  - core
  - checkpoint
  - manager
---

## Overview

The `StateReceiver` contract is used to process and relay state data on a child chain.

## Structs

### StateSync

```js
struct StateSync {
    uint256 id;
    address sender;
    address receiver;
    bytes data;
    bool skip;
}
```

The `StateSync` struct is used to represent a single state sync event.
It includes the following fields:

- `id`: a unique identifier for the state sync event
- `sender`: the address of the sender of the state sync event
- `receiver`: the address of the receiver of the state sync event
- `data`: the data associated with the state sync event
- `skip`: a boolean flag indicating whether the event should be skipped or not

### StateSyncBundle

```js
struct StateSyncBundle {
    uint256 startId;
    uint256 endId;
    uint256 leaves;
    bytes32 root;
}
```

The `StateSyncBundle` struct is used to represent a group of state sync events
that are processed together. It includes the following fields:

- `startId`: the identifier of the first state sync event in the bundle
- `endId`: the identifier of the last state sync event in the bundle
- `leaves`: the number of state sync events in the bundle
- `root`: the root of the Merkle tree formed by the state sync events in the bundle

## Mappings

```js
mapping(uint256 => StateSyncBundle) public bundles;
```

The contract includes a mapping called bundles, which is used to store
`StateSyncBundle` structs indexed by their bundle counter.

## Constants

```js
uint256 private constant MAX_GAS = 300000;
```

The contract defines a constant called `MAX_GAS`, which represents the maximum
gas allowed for each message call.

## Events

```js
event StateSyncResult(uint256 indexed counter, ResultStatus indexed status, bytes32 message);
```

The contract includes an event called StateSyncResult, which is emitted when a `StateSync`
event is processed. The event includes the following indexed fields:

- `counter`: the identifier of the state sync event
- `status`: the result of processing the state sync event (success, failure, or skip)
- `message`: a message associated with the result of processing the state sync event

## Functions

### commit

```js
function commit(
    StateSyncBundle calldata bundle,
    bytes calldata signature,
    bytes calldata bitmap
) external onlySystemCall
```

This function is used to commit the root of a Merkle tree formed by a group of
state sync events. It takes the following parameters:

- `bundle`: a StateSyncBundle struct representing the group of state sync events to be committed
- `signature`: the signature of the bundle
- `bitmap`: a bitmap indicating which validators signed the bundle

The function checks that the `startId` of the `bundle` is the `lastCommittedId` plus 1,
and that the `endId` of the `bundle` is greater than or equal to the `startId`. It then
verifies the `signature` of the `bundle` using an aggregation of public keys. If the
signature is valid, it stores the `bundle` in the bundles mapping and updates the
`lastCommittedId`.

### execute

```js
function execute(bytes32[] calldata proof, StateSync[] calldata objs) external
```

This function is used to submit a leaf of a Merkle tree formed by a group of state
sync events for execution. It takes the following parameters:

- `proof`: an array of Merkle proofs for the state sync events in the group
- `objs`: an array of StateSync structs representing the state sync events in the group

The function first checks that there is a `bundle` in the `bundles` mapping that has not
yet been executed. It then calculates the data hash of the objs array and verifies that the
data hash is a leaf in the Merkle tree rooted at the root of the corresponding `StateSyncBundle`
struct. If the data hash is a valid leaf, the function increments the counter and updates the
`currentLeafIndex` and `lastExecutedBundleCounter` as necessary. Finally, it processes each state
sync event in the objs array by calling the processSync function for each event.

### processSync

```js
function processSync(StateSync memory sync) internal
```

This function is used to process a single state sync event. It takes a single parameter:

- `sync`: a `StateSync` struct representing the state sync event to be processed

The function first checks the skip field of the sync struct. If skip is true, it emits a
`StateSyncResult` event with a status of `SKIP` and returns. Otherwise, it attempts to execute
the state sync event by calling the `sync.receiver.call` function with the `sync.data` as input
and the `MAX_GAS` as the gas limit. If the call is successful, it emits a `StateSyncResult` event
with a status of `SUCCESS`. If the call fails, it emits a `StateSyncResult` event with a status of
`FAILURE`.

## Modifiers

### onlySystemCall

```js
modifier onlySystemCall {
    require(msg.sender == system, "INVALID_CALLER");
    _;
}
```

The contract includes a single modifier called `onlySystemCall`, which checks
that the caller is the `system` address. This modifier is used to restrict access
to the `commit` function to the `system` address.
