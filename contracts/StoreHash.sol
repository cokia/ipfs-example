
//0x184a5861bC67C37F9cFf0f0340B77c5357C19F98  contract address on ropsten
//deployed using remix 

contract Contract {
 string ipfsHash;
 
 function sendHash(string x) public {
   ipfsHash = x;
 }

 function getHash() public view returns (string x) {
   return ipfsHash;
 }
}
