const Address = require("../src/address/Address.json");

async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  const box = await upgrades.upgradeProxy(Address, BoxV2);
  console.log("Box upgraded transction no: ", box?.deployTransaction?.hash);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
