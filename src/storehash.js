import Web3 from 'web3';
//overrides metamask v0.2 for our v 1.0
const web3 = new Web3(window.web3.currentProvider);


//access our local copy to contract deployed on ropsten testnet
const address = '0xd4f91B126778BF4E8D933897085FA204BaDc127F';
//use the ABI from your contract
const abi = [
  {
    "constant": true,
    "inputs": [],
    "name": "getHash",
    "outputs": [
      {
        "name": "x",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "x",
        "type": "string"
      }
    ],
    "name": "sendHash",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
export default new web3.eth.Contract(abi, address);
