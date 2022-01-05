import Moralis from "moralis";
import { useState } from "react";

export function Login(){

    const [currentUserAddress, setCurrentUserAddress] = useState()
    const [mainnetNfts, setMainnetNfts] = useState()
    const [polygonNFTs, setPolygonNFTs] = useState()

    async function handleAuth(){
        await Moralis.Web3.authenticate().then(async (user) => {

            const userAddress = await user.get("ethAddress")
            setCurrentUserAddress(userAddress)
        })

    }

    async function handleFetchNfts(){

        const mainnetNftsData = await Moralis.Web3.getNFTs()
        setMainnetNfts(mainnetNftsData)
        
        const polygonNFTsData = await Moralis.Web3.getNFTs({chain: "matic", address: currentUserAddress})
        setPolygonNFTs(polygonNFTsData)

        console.log(mainnetNftsData)
        console.log(polygonNFTsData)
    }

    return(
        <div>
            <button onClick={handleAuth}>Auth</button>
            <button onClick={handleFetchNfts}>Fetch NFTs</button>
        </div>
    )
}