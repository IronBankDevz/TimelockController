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
      hardhat: '0x0501Be0dA35990FbF5c434c29186A7966846c0D5',
      mainnet: '0x0501Be0dA35990FbF5c434c29186A7966846c0D5',
    },
    guardian: {
      hardhat: '0x9d960dAe0639C95a0C822C9d7769d19d30A430Aa',
      mainnet: '0x9d960dAe0639C95a0C822C9d7769d19d30A430Aa'
    },
    multisig: {
      hardhat: '0xA5fC0BbfcD05827ed582869b7254b6f141BA84Eb',
      mainnet: '0xA5fC0BbfcD05827ed582869b7254b6f141BA84Eb',
    }
  },
  networks: {
    hardhat: {
      forking: {
        url: `https://rpc.ankr.com/eth`
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
