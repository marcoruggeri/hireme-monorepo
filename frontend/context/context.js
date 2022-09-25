import { createContext, useEffect, useState } from "react";
import { init, useConnectWallet } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";
import { ethers } from "ethers";

const rpcUrl =
  "https://eth-mainnet.g.alchemy.com/v2/GeepTcW8EGQDN3DOp1sVbxoI6mCA0YTA";
const injected = injectedModule();

init({
  wallets: [injected],
  chains: [
    {
      id: "0x1",
      token: "ETH",
      label: "Ethereum Mainnet",
      rpcUrl,
    },
  ],
  accountCenter: {
    desktop: {
      enabled: false,
    },
  },
});

const HireMe = createContext();

export const HireMeProvider = ({ children }) => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const [wallets, setWallets] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      const previouslyConnectedWallets = JSON.parse(
        window.localStorage.getItem("connectedWallets")
      );

      if (previouslyConnectedWallets) {
        console.log("1", previouslyConnectedWallets);
        await onboard.connectWallet({
          autoSelect: {
            label: previouslyConnectedWallets[0],
            disableModals: true,
          },
        });
      }
    };
    // connectWalletOnPageLoad();
  }, []);

  useEffect(() => {
    if (wallet) {
      const connectedWallets = wallet.label;
      window.localStorage.setItem(
        "connectedWallets",
        JSON.stringify(connectedWallets)
      );

      if (wallet) {
        setProvider(new ethers.providers.Web3Provider(wallet.provider, "any"));
      }
    }
  }, [wallet]);

  useEffect(() => {
    if (provider) {
      setSigner(provider.getSigner());
    }
  }, [provider]);

  return (
    <HireMe.Provider value={{ connect, wallet, signer, provider }}>
      {children}
    </HireMe.Provider>
  );
};

export default HireMe;
