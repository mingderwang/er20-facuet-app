require("@nomiclabs/hardhat-waffle");


const fs = require('fs');
const privateKey = fs.readFileSync(".secret").toString().trim() || "";
const projectid ="e909ef7e3aaa4a2cbb627fbee4ffd000";

module.exports = {
  defaultNetwork: "ropsten",
    networks: {
    hardhat: {
    chainId: 1337,
    },

    ropsten: {
      // Infura
      // url: `https://polygon-mumbai.infura.io/v3/${infuraId}`
      url: `https://ropsten.infura.io/v3/${projectid}`,
      accounts: [privateKey],  
    }
  },
  solidity: "0.8.4",
};
