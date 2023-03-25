import MainLayout from "@/layouts/MainLayout";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

function account() {
  const [address, setAddress] = useState("");
  const { push } = useRouter();

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!address) {
      alert("Enter Address");
    } else {
      push(`/account/${address}`);
    }
  };

  return (
    <MainLayout>
      <h1 className="text-xl border py-2 bg-white text-fuchsia-600">
        Check An Account For Etherum Balance
      </h1>
      <form
        onSubmit={submit}
        className="flex justify-center items-center w-full h-full"
      >
        <input
          className="px-4 focus:shadow-xl w-96 py-6 text-lg  rounded-lg opacity-90 outline-none border-white/60 border bg-white/20 text-white placeholder-white/70"
          type="text"
          placeholder="Enter The Address.."
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button className="ml-4 py-7 px-6 hover:bg-white/25 hover:shadow-xl rounded-lg">
          SUBMIT
        </button>
      </form>
    </MainLayout>
  );
}

export default account;
