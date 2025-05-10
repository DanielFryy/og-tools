// DonationButtons helper functions and data
import { CryptoAddress } from "./DonationButtons.types";

export const cryptoAddresses: CryptoAddress[] = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    address: process.env.NEXT_PUBLIC_BTC_ADDRESS
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    address: process.env.NEXT_PUBLIC_ETH_ADDRESS
  }
];
