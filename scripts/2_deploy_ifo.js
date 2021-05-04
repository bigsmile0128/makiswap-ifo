const IFO = artifacts.require("IFO");

module.exports = async (deployer) => {
  // const num = 50 * Math.pow(10, 18);
  // const numAsHex = "0x" + num.toString(16);

  const lpToken = '0x8971Af9DDE14c879D178F37169EbB2690DfB18E8'; // TTA - WHT
  const offeringToken = '0x5a9887836d5fd9fb51cd8a851853a89df6f7ddad'; // $C
  const startBlock = '4359000';
  const endBlock = '6000000';
  const offeringAmount = '1000000';
  const raisingAmount = '1000000';
  const adminAddress = '0xe3aE5711BD7750911F41676aB02FD8F22caD6362';
  await deployer.deploy(
    IFO,
    lpToken,
    offeringToken,
    startBlock,
    endBlock,
    offeringAmount,
    raisingAmount,
    adminAddress
  );
};