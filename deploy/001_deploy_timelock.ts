import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {deploy, execute} = deployments;

  const {deployer, multisig, guardian} = await getNamedAccounts();

  await deploy('IronBankTimelock', {
    from: deployer,
    args: [
      86400,
      [multisig],
      [multisig, guardian]
    ],
    log: true,
  });
};
export default func;
func.tags = ['IronBankTimelock'];
