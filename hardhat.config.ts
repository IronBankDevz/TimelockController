import 'dotenv/config';
import {HardhatUserConfig} from 'hardhat/types';
import 'hardhat-deploy';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';

 const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  solidity: {
    version: '0.8.10',
    settings: {
      optimizer: {
        enabled: true
      },
      outputSelection: {
        "*": {
          "*": [
            "evm.methodIdentifiers", "abi"
          ]
        },
      }
    },
  },
  namedAccounts: {
    deployer: 0,
    admin: {
      mainnet: '0x197939c1ca20C2b506d6811d8B6CDB3394471074',
      bsc: '0x197939c1ca20C2b506d6811d8B6CDB3394471074',
    },
    multisig: {
      mainnet: '0x6D5a7597896A703Fe8c85775B23395a48f971305',
      bsc: '0xDF951b3657777ee21a3B01494C362d2ea9d4378E'
    }
  },
  networks: {
    hardhat: {
      forking: {
        url: `https://cloudflare-eth.com`
      }
    },
    mainnet: {
      url: `https://cloudflare-eth.com`,
      accounts:
        process.env.DEPLOY_PRIVATE_KEY == undefined ? [] : [`0x${process.env.DEPLOY_PRIVATE_KEY}`]
    },
    arbitrum: {
      url: 'https://arb1.arbitrum.io/rpc',
      accounts:
        process.env.DEPLOY_PRIVATE_KEY == undefined ? [] : [`0x${process.env.DEPLOY_PRIVATE_KEY}`]
    },
    avalanche: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      chainId: 43114,
      accounts:
        process.env.DEPLOY_PRIVATE_KEY == undefined ? [] : [`0x${process.env.DEPLOY_PRIVATE_KEY}`]
    },
    polygon: {
      url: 'https://polygon-rpc.com',
      accounts:
        process.env.DEPLOY_PRIVATE_KEY == undefined ? [] : [`0x${process.env.DEPLOY_PRIVATE_KEY}`]
    },
    bsc: {
      url: 'https://bsc-dataseed.binance.org/',
      accounts:
        process.env.DEPLOY_PRIVATE_KEY == undefined ? [] : [`0x${process.env.DEPLOY_PRIVATE_KEY}`]
    },
    ftm: {
      url: 'https://rpc.ftm.tools/',
      accounts:
        process.env.DEPLOY_PRIVATE_KEY == undefined ? [] : [`0x${process.env.DEPLOY_PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};

export default config;
