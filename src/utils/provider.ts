import { ethers } from "ethers";

export const getProvider = async () => {
  return new ethers.InfuraProvider(
    "mainnet",
    process.env.API_KEY,
    process.env.API_SECRET
  );
};
