const { ethers, upgrades } = require("hardhat");
const path = require("path");
const fs = require("fs-extra");

async function main() {
  const Box = await ethers.getContractFactory("Box");
  console.log("Deploying Box...");
  const box = await upgrades.deployProxy(Box);
  console.log("Box deployed to:", box.address);

  writeToFile(box.address);
}

function writeToFile(address) {
  const storeAddressPath = path.resolve(__dirname, "..", "src", "address");
  fs.removeSync(storeAddressPath);
  fs.ensureDirSync(storeAddressPath);
  fs.outputJsonSync(path.resolve(storeAddressPath, "Address.json"), address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
