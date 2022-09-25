import Head from "next/head";
import { useContext, useEffect } from "react";
import HireMe from "../context/context";
import { landingAvatars } from "../lib/constants";
import { useRouter } from "next/router";

const Home = () => {
  const { connect, signer } = useContext(HireMe);
  const router = useRouter();

  useEffect(() => {
    if (signer) {
      router.push("/welcome");
    }
  }, [signer]);

  return (
    <div>
      <Head>
        <title>Hire Me</title>
        <meta name="description" content="hackathon project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="py-16 2xl:py-20 px-28 2xl:px-52 flex items-center justify-between">
        <div className="w-3/5 2xl:w-2/4">
          <div className="font-semibold text-6xl leading-[72px] pr-20">
            Build your business with top Web3 talent
          </div>
          <div className="flex">
            <div className="text-lg text-gray-500 w-2/3 mt-6 relative">
              Join our decentralised network of the top tier freelance
              developers, designers, finance experts, product managers and more,
              in the world!{" "}
            </div>
            <img
              src="/brand/Vector.png"
              className="absolute 2xl:ml-20 mt-16 left-1/3 top-1/2 2xl:top-1/2"
            />
          </div>
          <div className="flex items-center gap-4 mt-10">
            <div className="flex">
              {landingAvatars.map((a, i) => (
                <img key={i} src={a} className={`${i !== 0 && "ml-[-14px]"}`} />
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                {landingAvatars.map((a, i) => (
                  <img key={i} src="/brand/Star.png" />
                ))}
                <div className="font-semibold">5.0</div>
              </div>
              <div className="text-gray-500 font-medium">from 420+ reviews</div>
            </div>
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-center justify-between bg-gray-50 py-6 2xl:py-8 px-10 rounded-2xl">
          <div className="flex flex-col items-center">
            <img src="/brand/Logomark.png" />
            <div className="font-semibold text-3xl mt-6">Connect Wallet</div>
            <div className="text-gray-500 mt-3">
              To join Hire Me, use your{" "}
              <span className="text-blue-600 cursor-pointer">lense handle</span>
            </div>
          </div>
          <div className="flex flex-col items-center w-full mt-20 2xl:mt-28">
            <div
              onClick={() => connect()}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-blue-600 rounded-lg cursor-pointer"
            >
              <img src="/brand/MetaMask.png" className="w-4" />
              <div className="text-white">Connect Meta Mask</div>
            </div>
            <div className="w-full flex justify-center bg-white py-2.5 border border-gray-400 box-content rounded-lg mt-4 cursor-pointer">
              Learn About Lens
            </div>
            <div className="text-gray-500 mt-6">
              Questions?{" "}
              <span className="text-blue-600 cursor-pointer">
                Check our FAQ's
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
