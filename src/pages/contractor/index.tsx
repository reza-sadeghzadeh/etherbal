import MainLayout from "@/layouts/MainLayout";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

function account() {
  const [token, setToken] = useState("");
  const [Code, setCode] = useState("");
  const [ABI, setABI] = useState("");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!token || !ABI) {
      alert("Fill the inputs first");
    } else {
      //   push(`/contractor/`);
    }
  };

  return (
    <MainLayout>
      <h1 className="text-xl border py-2 bg-white text-fuchsia-600">
        CONTRACTOR
      </h1>
      <form onSubmit={submit} className="mt-16 w-full">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <input
            className="px-4 w-full focus:shadow-xl  py-6 text-lg  rounded-lg opacity-90 outline-none border-white/60 border bg-white/20 text-white placeholder-white/70"
            type="text"
            placeholder="Enter The Toekn.."
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
          <textarea
            className="px-4 focus:shadow-xl mt-4 w-full py-6 text-lg  rounded-lg opacity-90 outline-none border-white/60 border bg-white/20 text-white placeholder-white/70"
            placeholder="Paste The ABI.."
            value={ABI}
            onChange={(e) => setABI(e.target.value)}
          />
          <code className="w-full">
            <textarea
              className="px-4 focus:shadow-xl w-full mt-4  py-6 text-lg rounded-lg opacity-90 outline-none border-white/60 border bg-black/80 text-white placeholder-white/70"
              placeholder="Write Your Code Here.."
              value={Code}
              onChange={(e) => setCode(e.target.value)}
            />
          </code>
        </div>
        <button className="w-full border-white/20 border mt-4 py-4 px-6 hover:bg-white/25 hover:shadow-xl rounded-lg">
          SUBMIT
        </button>
      </form>
    </MainLayout>
  );
}

export default account;
