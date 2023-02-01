/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  basics: [
    "home/new-to-polygon",
    {
      type: "category",
      label: "Blockchain Basics",
      link: {
        type: "generated-index",
      },
      items: [
        "home/blockchain-basics/blockchain",
        "home/blockchain-basics/blockchain-types",
        "home/blockchain-basics/consensus-mechanism",
        "home/blockchain-basics/ethereum",
        "home/blockchain-basics/solidity",
        "home/blockchain-basics/transactions",
        "home/blockchain-basics/gas",
        "home/blockchain-basics/accounts",
        "home/blockchain-basics/sidechain",
        "home/blockchain-basics/import-account-to-metamask",
      ],
    },
    {
      type: "category",
      label: "Polygon Basics",
      link: {
        type: "generated-index",
      },
      items: [
        "home/polygon-basics/what-is-polygon",
        "home/polygon-basics/what-is-proof-of-stake",
        "maintain/polygon-basics/who-is-delegator",
        "maintain/polygon-basics/who-is-validator",
        "home/architecture/polygon-architecture",
        "home/polygon-basics/zkEVM-basics"
      ],
    },
    "home/faq",
  ],

  delegate: ["maintain/delegate/delegate",
  //"maintain/delegate/delegator-faq"
  ],

  govern: ["maintain/govern/governance-pos"],

  develop: [
    "develop/getting-started",
    "develop/developer-resources",
    {
      type: "category",
      label: "Nodes",
      link: {
        type: "generated-index",
      },
      items: [
        "develop/network-details/access-node-alchemy",
        "develop/network-details/technical-requirements",
        "develop/network-details/snapshot-instructions-heimdall-bor",
        "develop/network-details/full-node-deployment",
        "develop/network-details/full-node-binaries",
        "develop/network-details/full-node-docker",
        "develop/network-details/full-node",
        "develop/network-details/network-rpc-endpoints",
        {
          type: "category",
          label: "Erigon's Archive Node",
          link: {
            type: "generated-index",
          },
          items: [
            "develop/network-details/erigon/client-setup",
            "develop/network-details/erigon/archive-node-ansible",
            "develop/network-details/erigon/archive-node-binaries",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Wallets",
      link: {
        type: "generated-index",
      },
      items: [
        "develop/wallets/getting-started",
        {
          type: "category",
          label: "Polygon Wallet Suite",
          link: {
            type: "generated-index",
          },
          items: [
            "develop/wallets/polygon-web-wallet/web-wallet-v3-guide",
            "faq/adding-a-custom-token"
          ],
        },
        {
          type: "category",
          label: "Third-Party Apps",
          link: {
            type: "generated-index",
          },
          items: [
            {
              type: "category",
              label: "Metamask",
              link: {
                type: "generated-index",
              },
              items: [
                "develop/metamask/overview",
                "develop/metamask/hello",
                "develop/metamask/config-polygon-on-metamask",
                "develop/metamask/custom-tokens",
                "develop/metamask/multiple-accounts",
              ],
            },
            {
              type: "category",
              label: "Wallet Link",
              link: {
                type: "generated-index",
              },
              items: ["develop/metamask/config-polygon-on-wallet-link"],
            },

            {
              type: "category",
              label: "Venly",
              link: {
                type: "generated-index",
              },
              items: [
                "develop/wallets/venly/intro",
                "develop/wallets/venly/create-wallet",
                "develop/wallets/venly/network",
                "develop/wallets/venly/custom-tokens"
              ],
            },
            "develop/wallets/fortmatic",
            "develop/wallets/portis",
            "develop/wallets/torus",
            "develop/wallets/walletconnect",
            "develop/wallets/slashauth",
            "develop/wallets/plaid-wallet-onboard",
          ],
        }
      ],
    },
    {
      type: "category",
      label: "Matic.js",
      link: {
        type: "generated-index",
      },
      items: [
        "develop/ethereum-polygon/matic-js/get-started",
        "develop/ethereum-polygon/matic-js/installation",
        {
          type: "category",
          label: "Setup",
          link: {
            type: "generated-index",
          },
          items: [
            "develop/ethereum-polygon/matic-js/setup/index",
            "develop/ethereum-polygon/matic-js/setup/web3",
            "develop/ethereum-polygon/matic-js/setup/ethers",
          ],
        },
        "develop/ethereum-polygon/matic-js/api-architecture",
        {
          type: "category",
          label: "POS",
          link: {
            type: "generated-index",
          },
          items: [
            "develop/ethereum-polygon/matic-js/pos/index",
            {
              type: "category",
              label: "ERC20",
              link: {
                type: "generated-index",
              },
              items: [
                "develop/ethereum-polygon/matic-js/pos/erc20/index",
                "develop/ethereum-polygon/matic-js/pos/erc20/get-balance",
                "develop/ethereum-polygon/matic-js/pos/erc20/approve",
                "develop/ethereum-polygon/matic-js/pos/erc20/approve-max",
                "develop/ethereum-polygon/matic-js/pos/erc20/get-allowance",
                "develop/ethereum-polygon/matic-js/pos/erc20/deposit",
                "develop/ethereum-polygon/matic-js/pos/erc20/transfer",
                "develop/ethereum-polygon/matic-js/pos/erc20/withdraw-start",
                "develop/ethereum-polygon/matic-js/pos/erc20/withdraw-exit",
                "develop/ethereum-polygon/matic-js/pos/erc20/withdraw-exit-faster",
                "develop/ethereum-polygon/matic-js/pos/erc20/is-withdraw-exited",
              ],
            },
            {
              type: "category",
              label: "ERC721",
              link: {
                type: "generated-index",
              },
              items: [
                "develop/ethereum-polygon/matic-js/pos/erc721/index",
                "develop/ethereum-polygon/matic-js/pos/erc721/get-tokens-count",
                "develop/ethereum-polygon/matic-js/pos/erc721/get-token-id-at-index-for-user",
                "develop/ethereum-polygon/matic-js/pos/erc721/get-all-tokens",
                "develop/ethereum-polygon/matic-js/pos/erc721/is-approved",
                "develop/ethereum-polygon/matic-js/pos/erc721/is-approved-all",
                "develop/ethereum-polygon/matic-js/pos/erc721/approve",
                "develop/ethereum-polygon/matic-js/pos/erc721/approve-all",
                "develop/ethereum-polygon/matic-js/pos/erc721/deposit",
                "develop/ethereum-polygon/matic-js/pos/erc721/deposit-many",
                "develop/ethereum-polygon/matic-js/pos/erc721/withdraw-start",
                "develop/ethereum-polygon/matic-js/pos/erc721/withdraw-start-many",
                "develop/ethereum-polygon/matic-js/pos/erc721/withdraw-exit",
                "develop/ethereum-polygon/matic-js/pos/erc721/withdraw-exit-many",
                "develop/ethereum-polygon/matic-js/pos/erc721/withdraw-exit-faster",
                "develop/ethereum-polygon/matic-js/pos/erc721/withdraw-exit-faster-many",
                "develop/ethereum-polygon/matic-js/pos/erc721/is-withdraw-exited",
                "develop/ethereum-polygon/matic-js/pos/erc721/is-withdraw-exited-many",
                "develop/ethereum-polygon/matic-js/pos/erc721/transfer",
                "develop/ethereum-polygon/matic-js/pos/erc721/withdraw-start-with-meta-data",
              ],
            },
            {
              type: "category",
              label: "ERC1155",
              link: {
                type: "generated-index",
              },
              items: [
                "develop/ethereum-polygon/matic-js/pos/erc1155/get-balance",
                "develop/ethereum-polygon/matic-js/pos/erc1155/approve-all",
                "develop/ethereum-polygon/matic-js/pos/erc1155/approve-all-for-mintable",
                "develop/ethereum-polygon/matic-js/pos/erc1155/is-approved-all",
                "develop/ethereum-polygon/matic-js/pos/erc1155/deposit",
                "develop/ethereum-polygon/matic-js/pos/erc1155/deposit-many",
                "develop/ethereum-polygon/matic-js/pos/erc1155/withdraw-start",
                "develop/ethereum-polygon/matic-js/pos/erc1155/withdraw-start-many",
                "develop/ethereum-polygon/matic-js/pos/erc1155/withdraw-exit",
                "develop/ethereum-polygon/matic-js/pos/erc1155/withdraw-exit-faster",
                "develop/ethereum-polygon/matic-js/pos/erc1155/withdraw-exit-many",
                "develop/ethereum-polygon/matic-js/pos/erc1155/withdraw-exit-faster-many",
                "develop/ethereum-polygon/matic-js/pos/erc1155/is-withdraw-exited",
                "develop/ethereum-polygon/matic-js/pos/erc1155/is-withdraw-exited-many",
                "develop/ethereum-polygon/matic-js/pos/erc1155/transfer",
              ],
            },
            "develop/ethereum-polygon/matic-js/pos/is-check-pointed",
            "develop/ethereum-polygon/matic-js/pos/is-deposited",
            "develop/ethereum-polygon/matic-js/pos/deposit-ether",
          ],
        },
        {
          type: "category",
          label: "Plasma",
          link: {
            type: "generated-index",
          },
          items: [
            {
              type: "category",
              label: "ERC20",
              link: {
                type: "generated-index",
              },
              items: [
                "develop/ethereum-polygon/matic-js/plasma/erc20/index",
                "develop/ethereum-polygon/matic-js/plasma/erc20/get-balance",
                "develop/ethereum-polygon/matic-js/plasma/erc20/approve",
                "develop/ethereum-polygon/matic-js/plasma/erc20/approve-max",
                "develop/ethereum-polygon/matic-js/plasma/erc20/get-allowance",
                "develop/ethereum-polygon/matic-js/plasma/erc20/deposit",
                "develop/ethereum-polygon/matic-js/plasma/erc20/transfer",
                "develop/ethereum-polygon/matic-js/plasma/erc20/withdraw-start",
                "develop/ethereum-polygon/matic-js/plasma/erc20/withdraw-confirm",
                "develop/ethereum-polygon/matic-js/plasma/erc20/withdraw-confirm-faster",
                "develop/ethereum-polygon/matic-js/plasma/erc20/withdraw-exit",
              ],
            },
            {
              type: "category",
              label: "ERC721",
              link: {
                type: "generated-index",
              },
              items: [
                "develop/ethereum-polygon/matic-js/plasma/erc721/index",
                "develop/ethereum-polygon/matic-js/plasma/erc721/get-tokens-count",
                "develop/ethereum-polygon/matic-js/plasma/erc721/get-token-id-at-index-for-user",
                "develop/ethereum-polygon/matic-js/plasma/erc721/get-all-tokens",
                "develop/ethereum-polygon/matic-js/plasma/erc721/safe-deposit",
                "develop/ethereum-polygon/matic-js/plasma/erc721/withdraw-start",
                "develop/ethereum-polygon/matic-js/plasma/erc721/withdraw-confirm",
                "develop/ethereum-polygon/matic-js/plasma/erc721/withdraw-confirm-faster",
                "develop/ethereum-polygon/matic-js/plasma/erc721/withdraw-exit",
                "develop/ethereum-polygon/matic-js/plasma/erc721/transfer",
              ],
            },
            "develop/ethereum-polygon/matic-js/plasma/is-deposited",
            "develop/ethereum-polygon/matic-js/plasma/is-check-pointed",
            "develop/ethereum-polygon/matic-js/plasma/withdraw-exit",
            "develop/ethereum-polygon/matic-js/plasma/deposit-ether",
          ],
        },
        "develop/ethereum-polygon/matic-js/fx-portal",
        "develop/ethereum-polygon/matic-js/set-proof-api",
        {
          type: "category",
          label: "Advanced",
          link: {
            type: "generated-index",
          },
          items: [
            "develop/ethereum-polygon/matic-js/advanced/abi-manager",
            "develop/ethereum-polygon/matic-js/advanced/plugin",
            "develop/ethereum-polygon/matic-js/advanced/exit-util",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Assets",
      link: {
        type: "generated-index",
      },
      items: [
        {
          type: "category",
          label: "Matic",
          link: {
            type: "generated-index",
          },
          items: [
            "develop/network-details/gas-token",
            "develop/network-details/mapped-tokens",
          ],
        },
        {
          type: "category",
          label: "NFTs",
          link: {
            type: "generated-index",
          },
          items: ["develop/nft-tutorial"],
        },
      ],
    },
    {
      type: "category",
      label: "Smart Contracts",
      link: {
        type: "generated-index",
      },
      items: [
        {
          type: "category",
          label: "Deploying Contracts",
          link: {
            type: "generated-index",
          },
          items: [
            "develop/alchemy",
            "develop/quicknode",
            "develop/chainstack",
            "develop/chainide",
            "develop/remix",
            "develop/truffle",
            "develop/hardhat",
            "develop/replit",
          ],
        },
        "develop/network-details/genesis-contracts",
        {
          type: "category",
          label: "Plasma Contracts",
          link: {
            type: "generated-index",
          },
          items: ["develop/advanced/calling-plasma-contracts"],
        },
      ],
    },
    {
      type: "category",
      label: "Transactions",
      link: {
        type: "generated-index",
      },
      items: [
        "develop/eip1559",
        {
          type: "category",
          label: "Meta Transactions",
          link: {
            type: "generated-index",
          },
          items: [
            "develop/meta-transactions/meta-transactions",
            "develop/meta-transactions/network-agnostics",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Bridges",
      link: {
        type: "generated-index",
      },
      items: [
        "develop/ethereum-polygon/getting-started",
        "develop/ethereum-polygon/submit-mapping-request",
        {
          type: "category",
          label: "PoS Bridge",
          link: {
            type: "generated-index",
          },
          items: [
            "develop/ethereum-polygon/pos/getting-started",
            {
              type: "category",
              label: "Using Matic.js",
              link: {
                type: "generated-index",
              },
              items: [
                "develop/ethereum-polygon/pos/using-sdk/getting-started",
                "develop/ethereum-polygon/pos/using-sdk/eth",
                "develop/ethereum-polygon/pos/using-sdk/erc20",
                "develop/ethereum-polygon/pos/using-sdk/erc721",
                "develop/ethereum-polygon/pos/using-sdk/erc1155",
              ],
            },
            {
              type: "category",
              label: "Calling Contracts",
              link: {
                type: "generated-index",
              },
              items: [
                "develop/ethereum-polygon/pos/calling-contracts/ether",
                "develop/ethereum-polygon/pos/calling-contracts/erc20",
                "develop/ethereum-polygon/pos/calling-contracts/erc721",
                "develop/ethereum-polygon/pos/calling-contracts/erc1155",
              ],
            },
            "develop/ethereum-polygon/pos/deposit-withdraw-event-pos",
            "develop/ethereum-polygon/pos/deployment",
            "develop/pos-using-metamask",
          ],
        },
        {
          type: "category",
          label: "Plasma Bridge",
          link: {
            type: "generated-index",
          },
          items: [
            "develop/ethereum-polygon/plasma/getting-started",
            "develop/ethereum-polygon/plasma/eth",
            "develop/ethereum-polygon/plasma/erc20",
            "develop/ethereum-polygon/plasma/erc721",
            "develop/ethereum-polygon/plasma/deposit-withdraw-event-plasma",
            "develop/plasma-using-metamask",
          ],
        },
        "develop/l1-l2-communication/fx-portal",
        "develop/ethereum-polygon/mintable-assets",
        "develop/l1-l2-communication/state-transfer",
      ],
    },
    {
      type: "category",
      label: "Oracles",
      link: {
        type: "generated-index",
      },
      items: [
        "develop/oracles/getting-started",
        "develop/oracles/api3",
        {
          type: "category",
          label: "Band Protocol",
          link: {
            type: "generated-index",
          },
          items: [
            "develop/oracles/bandchain",
            "develop/oracles/bandstandarddataset",
          ],
        },
        "develop/oracles/chainlink",
        "develop/oracles/optimisticoracle",
        "develop/oracles/razor",
        "develop/oracles/tellor",
      ],
    },
    {
      type: "category",
      label: "Storage",
      link: {
        type: "generated-index",
      },
      items: ["develop/ipfs", "develop/filecoinhelpers", "develop/nftstorage"],
      items: [
        "develop/ipfs",
        "develop/filecoinhelpers",
        "develop/crusthelpers",
        "develop/nftstorage",
      ],
    },
    {
      type: "category",
      label: "Data",
      link: {
        type: "generated-index",
      },
      items: [
        {
          type: "category",
          label: "Indexing and Querying",
          link: {
            type: "generated-index",
          },
          items: [
            "develop/data/the-graph",
            "develop/data/graph-data",
            "develop/data/graph-entities",
            "develop/data/graph-queries",
            "develop/data/covalent",
          ],
        },
        "develop/dapp-fauna-polygon-react",
      ],
    },
    "develop/did-implementation",
    {
      type: "category",
      label: "Miscellaneous",
      link: {
        type: "generated-index",
      },
      items: [
        "develop/tools/matic-faucet",
        "develop/tools/polygon-gas-station"
      ],
    },
  ],

  maintain: [
    "maintain/validate/validator-index",
    {
      type: "category",
      label: "Validator Overview",
      link: {
        type: "generated-index",
      },
      items: [
        "maintain/validator/architecture",
        "maintain/validator/responsibilities",
        "maintain/validator/core-components/staking",
        "maintain/polygon-basics/liquid-delegation",
        "maintain/validator/rewards",
        {
          type: "category",
          label: "Core Components",
          link: {
            type: "generated-index",
          },
          items: [
            "maintain/validator/core-components/heimdall-chain",
            "maintain/validator/core-components/bor-chain",
            "maintain/validator/core-components/checkpoint-mechanism",
            "maintain/validator/core-components/key-management",
            "maintain/validator/core-components/derivatives",
            "maintain/validator/core-components/proposers-producers-selection",
            "maintain/validator/core-components/proposer-bonus",
            "maintain/validator/core-components/transaction-fees",
            "maintain/validator/core-components/state-sync-mechanism",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Validate",
      link: {
        type: "generated-index",
      },
      items: [
        {
          type: "category",
          label: "Node Deployment",
          link: {
            type: "generated-index",
          },
          items: [
            "maintain/validate/validator-node-system-requirements",
            "maintain/validate/run-validator-binaries",
            "maintain/validate/run-validator-ansible",
            "maintain/validate/run-validator",
          ],
        },
        {
          type: "category",
          label: "Node Management",
          link: {
            type: "generated-index",
          },
          items: [
            "maintain/port-management",
            "maintain/validate/change-signer-address",
          ],
        },
        {
          type: "category",
          label: "Staking Operations",
          link: {
            type: "generated-index",
          },
          items: [
            "maintain/validate/validator-staking-operations",
            "maintain/validate/validator-commission-operations",
          ],
        },
        {
          type: "category",
          label: "Validator Performance Metrics",
          link: {
            type: "generated-index",
          },
          items: [
            "maintain/validate/validator-performance-overview",
          ],
        },
        "avail/node/avail-node-management",
        {
          type: "category",
          label: "Knowledge Base",
          link: {
            type: "generated-index",
          },
          items: [
            "maintain/validate/kb/known-issues",
            "maintain/validate/kb/how-to",
            {
              type: "category",
              label: "Additional Information",
              link: {
                type: "generated-index",
              },
              items: [
                "maintain/validate/kb/additional-info/port-config"
              ]
            }
          ],
        },
        "maintain/reporting-issues",
        "maintain/glossary",
      ],
    },
  ],
  integrate: [
    "integrate/quickstart",
    {
      type: "category",
      label: "Network Information",
      link: {
        type: "generated-index",
      },
      items: [
        "integrate/network",
        {
          type: "category",
          label: "Network Details",
          link: {
            type: "generated-index",
          },
          items: [
            "integrate/network-detail",
            {
              type: "link",
              label: "Polygon-Mainnet",
              href:
                "https://github.com/maticnetwork/static/blob/master/network/mainnet/v1/index.json",
            },
            {
              type: "link",
              label: "Mumbai",
              href:
                "https://static.matic.network/network/testnet/mumbai/index.json",
            },
          ],
        },
        {
          type: "link",
          label: "Polygon Faucet",
          href: "https://faucet.polygon.technology/",
        },
      ],
    },
    {
      type: "category",
      label: "Advanced",
      link: {
        type: "generated-index",
      },
      items: ["integrate/install-gcp"],
    },
  ],

  contribute: [
    {
      type: "category",
      label: "Become a Contributor",
      link: {
        type: "generated-index",
      },
      items: [
        "contribute/contributor-guidelines",
        "contribute/bug-bounty-program",
        "contribute/wiki-maintainers",
      ],
    },
    {
      type: "category",
      label: "Style Guide",
      link: {
        type: "generated-index",
      },
      items: ["contribute/writing-style", "contribute/tutorial-template"],
    },
    {
      type: "category",
      label: "Translations",
      link: {
        type: "generated-index",
      },
      items: ["contribute/non-native-speakers", "contribute/how-to-translate"],
    },
  ],

  pos: [
    "pos/polygon-architecture",
    {
      type: "category",
      label: "Architecture",
      link: {
        type: "generated-index",
      },
      items: [
        {
          type: "category",
          label: "Heimdall",
          link: {
            type: "generated-index",
          },
          items: [
            "pos/heimdall/overview",
            {
              type: "category",
              label: "Core Concepts",
              link: {
                type: "generated-index",
              },
              items: [
                "pos/heimdall/encoder",
                "pos/heimdall/transactions",
                "pos/heimdall/stdtx",
                "pos/heimdall/types",
                "pos/heimdall/validators",
                "pos/heimdall/checkpoint",
                "pos/heimdall/validator-key-management",
                "pos/heimdall/antehandler",
              ],
            },
            {
              type: "category",
              label: "Modules",
              link: {
                type: "generated-index",
              },
              items: [
                "pos/heimdall/modules/auth",
                "pos/heimdall/modules/bank",
                "pos/heimdall/modules/governance",
                "pos/heimdall/modules/staking",
                "pos/heimdall/modules/checkpoint",
                "pos/heimdall/modules/bor",
                "pos/heimdall/modules/topup",
                "pos/heimdall/modules/clerk",
                "pos/heimdall/modules/chainmanager",
              ],
            },
            "pos/peppermint",
          ],
        },
        {
          type: "category",
          label: "Bor",
          link: {
            type: "generated-index",
          },
          items: [
            "pos/bor/overview",
            "pos/bor/bor",
            "pos/bor/core_concepts",
            "pos/bor/consensus",
          ],
        },
        {
          type: "category",
          label: "Contracts",
          link: {
            type: "generated-index",
          },
          items: [
            "pos/contracts/stakingmanager",
            "pos/contracts/delegation",
            {
              type: "category",
              label: "Plasma Contracts",
              link: {
                type: "generated-index",
              },
              items: [
                "pos/contracts/plasma_contracts/account_based_plasma",
                "pos/contracts/plasma_contracts/predicates",
                "pos/contracts/plasma_contracts/important-contracts",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "State Sync",
          link: {
            type: "generated-index",
          },
          items: [
            "pos/state-sync/state-sync",
            "pos/state-sync/how-state-sync-works",
          ],
        },
        "home/architecture/security-models",
      ],
    },
  ],

  avail: [
    "avail/introduction/what-is-avail",
    "avail/architecture/avail-system-overview",
    "avail/architecture/avail-consensus",
    "avail/how-tos/avail-quick-start",
    {
      type: "category",
      label: "Operate a Node",
      link: {
        type: "generated-index",
      },
      items: [
        "avail/node/avail-node-management",
        "avail/node/avail-validator",
        "avail/node/avail-data-avail",
        "avail/node/avail-light-client-da",
      ],
    },
    "avail/faq",
  ],

  miden: [
    {
      type: "category",
      label: "Introduction",
      link: {
        type: "doc",
        id: "miden/intro/main"
      },
      items: [
        "miden/intro/overview",
        "miden/intro/usage",
        "miden/intro/performance"
      ]
    },
    {
      type: "category",
      label: "User Documentation",
      link: {
        type: "doc",
        id: "miden/user_docs/main"
      },
      items: [
        {
          type: "category",
          label: "Miden Assembly",
          link: {
            type: "doc",
            id: "miden/user_docs/assembly/main"
          },
          items: [
            "miden/user_docs/assembly/code_organization",
            "miden/user_docs/assembly/flow_control",
            "miden/user_docs/assembly/field_operations",
            "miden/user_docs/assembly/u32_operations",
            "miden/user_docs/assembly/stack_manipulation",
            "miden/user_docs/assembly/io_operations",
            "miden/user_docs/assembly/cryptographic_operations"
          ]
        },
        {
          type: "category",
          label: "Miden Standard Library",
          link: {
            type: "doc",
            id: "miden/user_docs/stdlib/main"
          },
          items: [
            "miden/user_docs/stdlib/crypto/hashes",
            "miden/user_docs/stdlib/math/u64",
            "miden/user_docs/stdlib/sys"
          ]
        }
      ]
    },
    {
      type: "category",
      label: "Design",
      link: {
        type: "doc",
        id : "miden/design/main"
      },
      items: [
        "miden/design/programs",
        {
          type: "category",
          label: "Program decoder",
          link: {
            type: "doc",
            id: "miden/design/decoder/main"
          },
          items: [
            "miden/design/decoder/constraints"
          ]

        },
        {
          type: "category",
          label: "Operand stack",
          link: {
            type: "doc",
            id: "miden/design/stack/main"
          },
          items: [
            "miden/design/stack/op_constraints",
            "miden/design/stack/system_ops",
            "miden/design/stack/field_ops",
            "miden/design/stack/u32_ops",
            "miden/design/stack/stack_ops",
            "miden/design/stack/io_ops",
            "miden/design/stack/crypto_ops"
          ]
        },
        "miden/design/range",
        {
          type: "category",
          label: "Chiplets",
          link: {
            type: "doc",
            id: "miden/design/chiplets/main"
          },
          items: [
            "miden/design/chiplets/hasher",
            "miden/design/chiplets/bitwise",
            "miden/design/chiplets/memory"
          ]
        },
        "miden/design/multiset"
      ]
    },
    "miden/background"
  ],

  zkEVM: [
    "zkEVM/introduction",
    "zkEVM/architecture",
    {
      type: "category",
      label: "zkEVM Protocol",
      link: {
        type: "generated-index"
      },
      items:[
        "zkEVM/protocol/protocol-components",
        "zkEVM/protocol/consensus",
        "zkEVM/protocol/l2-transaction-cycle",
        "zkEVM/protocol/incentive-mechanism",
        {
              type: "category",
              label: "Malfunction Resistance",
              link: {
                type: "generated-index"
              },
              items:[
                "zkEVM/protocol/sequencer-resistance",
                "zkEVM/protocol/aggregator-resistance",
                "zkEVM/protocol/emergency-state",
              ]
        },
        "zkEVM/lx-ly-bridge",
      ]
    },
    "zkEVM/zknode/zknode-overview",
    {
      type: "category",
      label: "zkProver",
      link: {
        type: "generated-index"
      },
      items:[
        "zkEVM/zkProver/overview",
        "zkEVM/zkProver/zkprover-design",
        {
          type: "category",
          label: "mFibonacci SM",
          link: {
            type: "generated-index"
          },
          items:[
            "zkEVM/zkProver/mfibonacci-overview",
            "zkEVM/zkProver/mfibonacci-example",
            "zkEVM/zkProver/commitment-scheme",
            "zkEVM/zkProver/verification-scheme",
            "zkEVM/zkProver/pil-stark",
            "zkEVM/zkProver/pil-stark-demo",
          ]
        },
        {
          type: "category",
          label: "Generic SM",
          link: {
            type: "generated-index"
          },
          items:[
            "zkEVM/zkProver/intro-generic-sm",
            "zkEVM/zkProver/exec-trace-correct",
            "zkEVM/zkProver/ending-program",
            "zkEVM/zkProver/program-counter"
          ]
        },
        {
          type: "category",
          label: "Storage SM",
          link: {
            type: "generated-index"
          },
          items:[
            "zkEVM/zkProver/intro-storage-sm",
            "zkEVM/zkProver/sparse-merkle-tree",
            "zkEVM/zkProver/simple-smt",
            "zkEVM/zkProver/detailed-smt-concepts",
            "zkEVM/zkProver/basic-smt-ops",
            "zkEVM/zkProver/construct-key-path",
            "zkEVM/zkProver/storage-sm-mechanism",
            "zkEVM/zkProver/executor-pil",
          ]
        },
      ]
    },
    {
      type: "category",
      label: "How To Guides",
      link: {
        type: "generated-index"
      },
      items:[
        "zkEVM/develop",
        "zkEVM/setup-local-node",
        "zkEVM/setup-production-node",
      ]
    },
    {
      type: "category",
      label: "zk Assembly",
      link: {
        type: "generated-index"
      },
      items:[
        "zkEVM/zkASM/introduction",
        "zkEVM/zkASM/basic-syntax",
        "zkEVM/zkASM/some-examples"
      ]
    },
    {
      type: "category",
      label: "Polynomial Identity Language",
      link: {
        type: "generated-index"
      },
      items:[
        "zkEVM/PIL/introduction",
        "zkEVM/PIL/hello-world-examples",
        "zkEVM/PIL/components",
        "zkEVM/PIL/cyclical-nature",
        "zkEVM/PIL/modularity",
        "zkEVM/PIL/advanced-features",
      ]
    },
    "zkEVM/open-source-repos",
    "zkEVM/glossary"
  ],

  faq: [
    "faq/general-faq",
    "faq/technical-faqs",
    // "faq/delegator-faq",
    "faq/commit-chain-multisigs",
    // "maintain/delegate/delegator-faq",
    "faq/validator-faq",
    "faq/staking-faq",
    "faq/wallet-bridge-faq",
    "faq/consensys-framework"
  ],

// #####################################################################

  edge: [
    {
      type: "category",
      label: "Quick start",
      link: {
        type: "generated-index",
      },
      items: [
        "edge/overview",
      ],
    },
    {
      type: "category",
      label: "Core components",
      link: {
        type: "generated-index",
      },
      items: [
        "edge/architecture/overview",
        {
          type: "category",
          label: "Networking",
          link: {
            type: "generated-index",
          },
          items: [
          ],
        },
        {
          type: "category",
          label: "Consensus",
          link: {
            type: "generated-index",
          },
          items: [
            "edge/consensus/poa",
            "edge/consensus/pos-concepts",
            "edge/consensus/pos-stake-unstake",
            "edge/consensus/migration-to-pos",
            "edge/consensus/bls",
            ],
          },
        {
          type: "category",
          label: "Block production",
          link: {
            type: "generated-index",
          },
          items: [
          ],
        },
        {
          type: "category",
          label: "Validation",
          link: {
            type: "generated-index",
          },
          items: [
          ],
        },
        {
          type: "category",
          label: "Security",
          link: {
            type: "generated-index",
          },
          items: [
          ],
        },
        {
          type: "category",
          label: "Modules",
          link: {
            type: "generated-index",
          },
          items: [
            "edge/architecture/modules/blockchain",
            "edge/architecture/modules/minimal",
            "edge/architecture/modules/networking",
            "edge/architecture/modules/state",
            "edge/architecture/modules/txpool",
            "edge/architecture/modules/json-rpc",
            "edge/architecture/modules/consensus",
            "edge/architecture/modules/storage",
            "edge/architecture/modules/types",
            "edge/architecture/modules/syncer",
            "edge/architecture/modules/sealer",
            "edge/architecture/modules/other-modules",
          ],
        },
        {
          type: "category",
          label: "Additional features",
          link: {
            type: "generated-index",
          },
          items: [
            {
              type: "category",
              label: "Chainbridge",
              link: {
                type: "generated-index",
              },
              items: [
                "edge/additional-features/chainbridge/overview",
                "edge/additional-features/chainbridge/definitions",
                "edge/additional-features/chainbridge/setup",
                "edge/additional-features/chainbridge/setup-erc20-transfer",
                "edge/additional-features/chainbridge/setup-erc721-transfer",
                "edge/additional-features/chainbridge/use-case-erc20-bridge",
                "edge/additional-features/chainbridge/use-case-erc721-bridge",
              ],
            },
            "edge/additional-features/blockscout",
            "edge/additional-features/permission-contract-deployment",
            "edge/additional-features/predeployment",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Operate a node",
      link: {
        type: "generated-index",
      },
      items: [
        "edge/get-started/installation",
        "edge/get-started/set-up-ibft-locally",
        "edge/get-started/set-up-ibft-on-the-cloud",
        "edge/get-started/cli-commands",
        "edge/get-started/terraform-aws-deployment",
        "edge/get-started/gcp-marketplace-deployment",
        {
          type: "category",
          label: "Configuration",
          link: {
            type: "generated-index",
          },
          items: [
            "edge/configuration/sample-config",
            "edge/configuration/manage-private-keys",
            "edge/configuration/prometheus-metrics",
            {
              type: "category",
              label: "Secret Managers",
              link: {
                type: "generated-index",
              },
              items: [
                "edge/configuration/secret-managers/set-up-aws-ssm",
                "edge/configuration/secret-managers/set-up-gcp-secrets-manager",
                "edge/configuration/secret-managers/set-up-hashicorp-vault",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Work with a node",
          link: {
            type: "generated-index",
          },
          items: [
            "edge/working-with-node/query-json-rpc",
            "edge/working-with-node/query-operator-info",
            "edge/working-with-node/backup-restore",
          ],
        },
        {
          type: "category",
          label: "Run a validator",
          link: {
            type: "generated-index",
          },
          items: [
            "edge/validator-hosting",
          ],
        },
        {
          type: "category",
          label: "Performance Reports",
          link: {
            type: "generated-index",
          },
          items: [
            "edge/performance-reports/overview",
            {
              type: "category",
              label: "Test History",
              link: {
                type: "generated-index",
              },
              items: [
                "edge/performance-reports/test-history/test-2022-07-04",
                "edge/performance-reports/test-history/test-2022-03-23",
                "edge/performance-reports/test-history/test-2022-03-02",
                "edge/performance-reports/test-history/test-2022-01-21",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "JSON RPC Commands",
      link: {
        type: "generated-index",
      },
      items: [
        "edge/api/json-rpc-eth",
        "edge/api/json-rpc-net",
        "edge/api/json-rpc-web3",
        "edge/api/json-rpc-txpool",
        "edge/api/json-rpc-debug",
      ],
    },
    {
      type: "category",
      label: "FAQs",
      link: {
        type: "generated-index",
      },
      items: [
        "edge/troubleshooting",
        "edge/faq/validators",
        "edge/faq/gas",
        "edge/faq/contracts",
        "edge/faq/tokens",
      ],
    },
    {
      type: "category",
      label: "Community",
      link: {
        type: "generated-index",
      },
      items: [
        "edge/community/propose-new-feature",
        "edge/community/report-bug",
      ],
    },
  ],

  polygonid: [
    "polygonid/overview",
    {
      type: "category",
      label: "Issuer",
      link: {
        type: "generated-index"
      },
      items: [
        "polygonid/issuer/issuer-overview"
      ]
    },
    {
      type: "category",
      label: "Verifier",
      link: {
        type: "generated-index"
      },
      items: [
        "polygonid/verifier/verifier-overview",
        {
          type: "category",
          label: "Off-chain verification",
          link:{
            type: "generated-index"
          },
          items: [
            "polygonid/verifier/verification-library/verifier-library-intro",
            {
              type: "category",
              label: "APIs",
              link:{
                type: "generated-index"
              },
              items: [
                "polygonid/verifier/verification-library/config",
                "polygonid/verifier/verification-library/request-api-guide",
                "polygonid/verifier/verification-library/verification-api-guide",
                "polygonid/verifier/verification-library/zk-query-language",
                "polygonid/verifier/verification-library/jwz"
              ]
            },
            "polygonid/verifier/verification-library/verifier-set-up"
          ]
        },
        {
          type: "category",
          label: "On-chain verification",
          link: {
            type: "generated-index"
          },
          items: [
            "polygonid/verifier/on-chain-verification/overview"
          ]
        }
      ]
    },
    {
      type: "category",
      label: "Wallet",
      link: {
        type: "generated-index"
      },
      items: [
        "polygonid/wallet/wallet-overview"
      ]
    },
    {
      type: "category",
      label: "Smart Contracts",
      link: {
        type: "generated-index"
      },
      items: [
        "polygonid/contracts/overview"
      ]
    }
  ],

  // #####################################################################

  supernets: [
    "supernets/overview",
    "supernets/architecture",
    "supernets/polybft",
    {
      type: "category",
      label: "[WIP] Core Modules",
      link: {
        type: "generated-index",
      },
      items: [
        "supernets/modules/consensus",
      ],
    },
    {
      type: "category",
      label: "Core Contracts",
      link: {
        type: "generated-index",
      },
      items: [
        "supernets/contracts/state-sender",
        "supernets/contracts/state-receiver",
        "supernets/contracts/checkpoint-manager",
        "supernets/contracts/exit-helper",
        "supernets/contracts/reward-pool",
        "supernets/contracts/validator-queue",
        "supernets/contracts/withdrawal-queue",
      ],
    },
    {
      type: "category",
      label: "Bridge",
      link: {
        type: "generated-index",
      },
      items: [
        "supernets/bridge/overview",
        "supernets/bridge/statesync",
        "supernets/bridge/checkpoint",
      ],
    },
    {
      type: "category",
      label: "JSON RPC Commands",
      link: {
        type: "generated-index",
      },
      items: [
        "supernets/api/json-rpc-eth",
        "supernets/api/json-rpc-net",
        "supernets/api/json-rpc-web3",
        "supernets/api/json-rpc-txpool",
        "supernets/api/json-rpc-debug",
      ],
    },
  ],

};
