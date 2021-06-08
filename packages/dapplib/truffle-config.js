require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture struggle renew pizza hole injury light army genius'; 
let testAccounts = [
"0xf9ec44e94748fb62ff1c7c0cb68e75c86cbd3acc5495310a1709e9675b34e00b",
"0xdb507e08835905f410f7012a10f3fcc3c7ae7a11f44634d7ca368baf8ec3cea7",
"0xaf75a8dddb89e6c028f364a19ed5b9e27b88031536dd50de19407749c957fab5",
"0xd5f86616cdef20d40da105e36255e1a671eed47b909fd6760c5686107a147fff",
"0xef7f5d218d40899b6635de125f0eb3042f36a47f090c1ba9d0d33b6ee44afe2f",
"0x3ccea13cec61356c875968cd93450c28556ff1dff61e75aea844585dd818e861",
"0x0f1c6b6a443c9b66ea63eed7a51496c253b3964991d763efc24ca2fd49e43b93",
"0x2ff34f1dd6271837cef88ad1a4857013517abb96b4a792a064ee956b8da5a76b",
"0x936741ceee79c939defa7700aa0025c73c36f977b283004a3410d51b2308c011",
"0x8f9862f19d536a1179a755790fc7977d625f12fd95545d8da8eacc51baf1cb0b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

