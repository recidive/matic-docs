---
id: polygon-gas-station
title: Polygon Gas Station
sidebar_label: Polygon Gas Station
description: Polygon Gas Station aims to help dApp developers with gas price recommendations.
keywords:
  - docs
  - matic
  - polygon
  - wiki
  - gas recommendation
  - dapps
image: https://wiki.polygon.technology/img/polygon-wiki.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Polygon Gas Station** aims to help dApp developers with gas price recommendations, so that they can use it before sending transaction off to the **Polygon** network.

We received a lot of requests from dApp developers for building a gas price recommendation service. So we took some inspiration from **Eth Gas Station** and built one.

**Polygon Gas Station** has been deployed both on the Polygon Mainnet & Mumbai Testnet. It queries the RPC for `eth_feeHistory` and fetches the 10th, 25th, and 50th percentiles of priority fees for transactions in each of the last 15 blocks. The average value of the 10th, 25th, and 50th percentiles become the `safeLow`, `standard`, and fast fee predictions.

## Usage

<Tabs
  defaultValue="mainnet"
  values={[
    { label: 'Polygon Mainnet', value: 'mainnet', },
    { label: 'Mumbai Testnet', value: 'mumbai', },
  ]
}>
<TabItem value="mumbai">

For getting gas price recommendation from this oracle (Polygon Mumbai), send **GET** request to [https://gasstation-mumbai.matic.today/v2](https://gasstation-mumbai.matic.today/v2)

#### cURL

```bash
curl https://gasstation-mumbai.matic.today/v2
```

#### JavaScript

```javascript
fetch('https://gasstation-mumbai.matic.today/v2')
  .then(response => response.json())
  .then(json => console.log(json))
```

#### Python

```python
import requests
requests.get('https://gasstation-mumbai.matic.today/v2').json()
```

</TabItem>
<TabItem value="mainnet">

For getting gas price recommendation from this oracle (Polygon Mainnet), send **GET** request to the Polygon Gas Station V2 to get the gas fee estimates. Polygon Gas Station V2 Endpoint: [https://gasstation-mainnet.matic.network/v2](https://gasstation-mainnet.matic.network/v2)

#### cURL

```bash
curl https://gasstation-mainnet.matic.network/v2
```

#### JavaScript

```javascript
fetch('https://gasstation-mainnet.matic.network/v2')
  .then(response => response.json())
  .then(json => console.log(json))
```

#### Python

```python
import requests
requests.get('https://gasstation-mainnet.matic.network/v2').json()
```

</TabItem>
</Tabs>

## Interpretation

An example JSON response will look like this:

```json
{
  "safeLow": {
    "maxPriorityFee":30.7611840636,
    "maxFee":30.7611840796
    },
  "standard": {
    "maxPriorityFee":32.146027800733336,
    "maxFee":32.14602781673334
    },
  "fast": {
    "maxPriorityFee":33.284344224133335,
    "maxFee":33.284344240133336
    },
  "estimatedBaseFee":1.6e-8,
  "blockTime":6,
  "blockNumber":24962816
}
```

- {'safelow', 'standard', 'fast', 'estimatedBaseFee'} are gas prices in GWei. You can use these prices before sending transaction off to Polygon, depending upon your needs.
- `blockNumber` tells what was latest block mined when recommendation was made.
- `blockTime`, in second, gives average block time of the network.
