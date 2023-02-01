---
id: mintable-assets
title: Polygon Mintable Assets
description: Mint and create assets on the Polygon network with Fx-Portal.
keywords:
  - docs
  - polygon wiki
  - polygon
  - mintable assets
  - mint
image: https://wiki.polygon.technology/img/polygon-wiki.png
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Assets can be transferred to and from across the Ethereum and Polygon chain using the PoS bridge. These assets include ERC20, ERC721, ERC1155 and many other token standards. Most of the assets are pre-existing on Ethereum chain. But new assets can be created on the Polygon chain as well and moved back to Ethereum chain as and when required. This can save lots of gas and time that is spent on token minting on Ethereum.

Creation of assets on the Polygon chain is much easier and a more recommended approach. **These assets can be moved to Ethereum chain when required**. Such type of assets are called **Polygon mintable assets**. 

In the case of Polygon Mintable tokens, assets are created on the Polygon network. When a Polygon minted asset has to be moved to Ethereum, the asset has to be burned first and then a proof of this burn transaction has to be submitted on the Ethereum chain. The recommended way to make use of Polygon Mintable token capabilities is by utilizing the [fx-portal](/develop/l1-l2-communication/fx-portal.md). 
