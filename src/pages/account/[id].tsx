import MainLayout from "@/layouts/MainLayout";
import { ethers } from "ethers";
import { GetServerSideProps } from "next";
import { SiEthereum } from "react-icons/si";
interface IAccountSpecific {
  error?: string;
  balance?: string;
}

const AccountSpecific: React.FC<IAccountSpecific> = ({ error, balance }) => {
  return (
    <MainLayout>
      <div className="flex h-full w-full justify-center items-center">
        {error ? (
          "Invalid Address"
        ) : (
          <div className="flex justify-center items-center">
            <SiEthereum size={64} className="mr-4" />
            <h1 className="text-3xl">{balance}</h1>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default AccountSpecific;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const params = ctx.params;
  if (!params?.id) {
    return {
      redirect: {
        destination: "/account",
      },
    };
  }

  const provider = new ethers.InfuraProvider(
    "mainnet",
    process.env.API_KEY,
    process.env.API_SECRET
  );
  try {
    const balance = await provider.getBalance(params.id as string);
    return {
      props: { balance: ethers.formatEther(balance) },
    };
  } catch (e) {
    console.log(e);
    return {
      props: { error: e.code },
    };
  }

  //   getBalance("0x73bceb1cd57c711feac4224d062b0f6ff338501e");
};