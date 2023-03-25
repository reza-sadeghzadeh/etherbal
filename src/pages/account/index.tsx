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
      <form
        onSubmit={submit}
        className="flex justify-center items-center w-full h-full"
      >
        <input
          style={{ width: "calc(300px , 90% , 1000px" }}
          className="px-4 py-6 text-lg  rounded-lg opacity-90 border-white border bg-white/20 text-black placeholder-black"
          type="text"
          placeholder="Enter The Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button className="ml-4 py-7 px-6 hover:bg-white/25 rounded-lg">
          SUBMIT
        </button>
      </form>
    </MainLayout>
  );
}

export default account;
