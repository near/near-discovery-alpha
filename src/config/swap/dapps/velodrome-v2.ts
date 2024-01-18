import { optimism } from '@/config/tokens/optimism';
const basic = {
  name: 'Velodrome V2',
  logo: 'https://ipfs.near.social/ipfs/bafkreieey4ie6pk6eyg3nrwnkdqlxb4gff3t4pkdq3ihaag2x3qbi3k7em',
  amountOutFn: 'bluebiu.near/widget/Arbitrum.Swap.ApeAmountOut',
};
const networks = {
  10: {
    factoryAddress: '0xF1046053aa5682b4F9a81b5481394DA16BE5FF5a',
    routerAddress: '0xa062aE8A9c5e11aaA026fc2670B0D65cCc8B2858',
    defaultCurrencies: {
      input: optimism['weth'],
      output: optimism['usdt'],
    },
    tokens: [
      optimism['op'],
      optimism['velo'],
      optimism['wbtc'],
      optimism['usdc.e'],
      optimism['usdt'],
      optimism['susd'],
      optimism['dai'],
      optimism['weth'],
      optimism['snx'],
      optimism['stg'],
      optimism['frax'],
    ],
  },
};

export { basic, networks };
