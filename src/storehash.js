import Web3 from 'web3';
//overrides metamask v0.2 for our v 1.0
const web3 = new Web3(window.web3.currentProvider);


//access our local copy to contract deployed on ropsten testnet
const address = '0x184a5861bC67C37F9cFf0f0340B77c5357C19F98';
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
