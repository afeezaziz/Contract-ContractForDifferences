const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ContractForDifferencesV1", function () {
  it("Should return the new greeting once it's changed", async function () {
    const ContractForDifferencesV1 = await ethers.getContractFactory("ContractForDifferencesV1");
    const contractForDifferencesV1 = await ContractForDifferencesV1.deploy("Hello, world!");
    // await greeter.deployed();

    // expect(await greeter.greet()).to.equal("Hello, world!");

    // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // // wait until the transaction is mined
    // await setGreetingTx.wait();

    // expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
