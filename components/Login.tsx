import { useMetamask, Web3Button } from "@thirdweb-dev/react";
export const Login = () => {
    const connectWithMetamask = useMetamask();

    return (
        <div className={"bg-[#091B18] min-h-screen flex flex-col items-center justify-center"}>
            <img className={"rounded-full h-56 wo-56 mb-10"} src="https://i.imgur.com/4h7mAu7.png" alt=""/>
            <h1 className={"text-6xl text-white font-bold mb-6"}>The papafam draw</h1>
            <h2 className={"text-white"}>Get Started by logging in with your MetaMask</h2>
            <button onClick={connectWithMetamask} className={"bg-white px-8 py-5 mt-10 rounded-lg shadow-lg font-bold"}>Login with Metamask</button>
        </div>
    )
}
