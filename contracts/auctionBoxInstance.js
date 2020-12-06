import web3 from './web3';

const address = '0x4b97bA4842f2b61f8A9506048672Eb5f77Cdc073'; // THE CONTRACT ADDRESS
const abi = [
  {
    constant: false,
    inputs: [
      {
        name: '_title',
        type: 'string'
      },
      {
        name: '_startPrice',
        type: 'uint256'
      },
      {
        name: '_description',
        type: 'string'
      }
    ],
    name: 'createAuction',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    name: 'auctions',
    outputs: [
      {
        name: '',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'returnAllAuctions',
    outputs: [
      {
        name: '',
        type: 'address[]'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }
]; // THE ABI

const instance = new web3.eth.Contract(abi, address);

export default instance;
