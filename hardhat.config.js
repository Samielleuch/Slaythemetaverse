require("@nomiclabs/hardhat-waffle");

// const private = require("./privatekey.js");
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",
  networks: {
    localhost: {
      url: "http://127.0.0.1:7545"
    }
    /*rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${private.alchemy}`,
      accounts: [private.key],
    },*/
  },
};
