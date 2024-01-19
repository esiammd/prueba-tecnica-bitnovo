export interface ICoinProps {
  image: string;
  name: string;
  acronym: string;
}

export const coins: ICoinProps[] = [
  {
    image: '/coins/bitcoin.svg',
    name: 'Bitcoin',
    acronym: 'BTC',
  },
  {
    image: '/coins/ethereum.svg',
    name: 'Ethereum',
    acronym: 'ETH',
  },
  {
    image: '/coins/litecoin.svg',
    name: 'Litecoin',
    acronym: 'LTC',
  },
  {
    image: '/coins/polygon.svg',
    name: 'Polygon',
    acronym: 'MATIC',
  },
  {
    image: '/coins/ripple.svg',
    name: 'Ripple',
    acronym: 'XRP',
  },
  {
    image: '/coins/usd-coin.svg',
    name: 'USD Coin',
    acronym: 'USDC',
  },
];
