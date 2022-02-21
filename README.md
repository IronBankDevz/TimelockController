# Hardhat-deploy template

## Installation and Setup

### Install dependencies

    yarn

### Setup environment variable

- Option 1: export environment variable

        export WEB3_INFURA_PROJECT_ID=YourProjectID
        export ETHERSCAN_API_KEY=YourApiToken

- Option 2: Use .env file

        cp .env.default .env

    fill in these values

        WEB3_INFURA_PROJECT_ID=
        ETHERSCAN_API_KEY=
        DEPLOY_PRIVATE_KEY= // Require only for production deployment

## Basic Use

    npx hardhat compile

### Scripts
See [CreamFi/cream-deployment](https://github.com/CreamFi/cream-deployment/tree/avax/scripts) on how to write scripts.

    npx hardhat run scripts/myScript.ts --network <NETWORK>


### Test
See [CreamFi/comptroller-upgrade](https://github.com/CreamFi/comptroller-upgrade/blob/ib_credit_limit_by_market/test/upgrade.js) on how to write tests.

    npx hardhat test test/myTest.js


### Deploy

See [CreamFi/cream-deployment](https://github.com/CreamFi/cream-deployment/tree/avax/deploy) on how to write deployment script.

    npx hardhat deploy --tags <TAGS> --network <NETWORK>

Avaliable options: [Read here](https://github.com/wighawag/hardhat-deploy#1-hardhat-deploy)

Commit `deployments/` into git  after deployment.

### Verify

    npx hardhat etherscan-verify --network <NETWORK>

Avaliable options: [Read here](https://github.com/wighawag/hardhat-deploy#4-hardhat-etherscan-verify)
