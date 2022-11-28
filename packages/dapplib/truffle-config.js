require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture glimpse frame tribe strike rival noble snake inflict nation fringe genre'; 
let testAccounts = [
"0xb9547fb90ad4060ae77b8039afca5ca3ef695e238dae9132f9dfd7d2054b7e63",
"0xf37f0191a54cda5872ab0d13cab564732db1880a7bd6c3c59d8488bed22a68d7",
"0xb9130ca7a4c4a8516a3be1b29ac3a73dfdbf78df633929c579351e0ccbab3f98",
"0x16dfae72cee8afbce626422a4a49cc83442065bc937a558bcac8ab01a8c43865",
"0x9ff55cf327cca319b7df370cc9a3ee3972032dce26fa029a8db5429900d13a08",
"0xcd717239b2df87ccfa3a6dd81642b34bab5a475f37d09ce9888aa9cbea151592",
"0x2b74f516f3fdc890902f3cb27701d986d12be1d59a14e7c2df54c337fb2a0dc4",
"0x0858f36e992d8605e5e2f7a994ddde97c1814db35099931e9832b1117b71f192",
"0x7d901fbdd066331fa6642f2852a0b1b7a2ff49f0d2eef44fd1cea12d229c4be1",
"0xb8a71b9f8a7fb2de91034fd7cb222eeeca6542e838ed3a685cfbfe5eb40beac9"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


