// scripts/prepare_upgrade.js

async function main() {
  const proxyAddress = "0x6BC0C2B913E73a73307B94ce272efa2bE97C3B3a";

  const BoxV2 = await ethers.getContractFactory("BoxV2");
  console.log("Preparing upgrade...");
  const boxV2Address = await upgrades.prepareUpgrade(proxyAddress, BoxV2);
  console.log("BoxV2 at:", boxV2Address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
