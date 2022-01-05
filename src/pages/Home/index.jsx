import Moralis from "moralis";
import { useState } from "react";

export function Home(){

    const [currentUserAddress, setCurrentUserAddress] = useState()
    const [mainnetNfts, setMainnetNfts] = useState()
    const [polygonNFTs, setPolygonNFTs] = useState()

    async function handleAuth(){
        await Moralis.Web3.authenticate().then(async (user) => {

            setCurrentUserAddress(user.get("ethAddress"))
            
            setMainnetNfts(await Moralis.Web3.getNFTs())
            
            setPolygonNFTs(await Moralis.Web3.getNFTs({chain: "matic", address: currentUserAddress}))

            console.log(mainnetNfts)
            console.log(polygonNFTs)
        })

    }

    return(
        <div>
            <button onClick={handleAuth}>Auth</button>
        </div>
    )
}