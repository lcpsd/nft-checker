import Moralis from "moralis";
import { useEffect, useState } from "react";

export function Login(){

    const [currentUserAddress, setCurrentUserAddress] = useState()
    const [mainnetNfts, setMainnetNfts] = useState()
    const [polygonNFTs, setPolygonNFTs] = useState()
    const [user, setUser] = useState()
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const tokenAddress = process.env.REACT_APP_TOKEN_ADDRESS
    const tokenID = process.env.REACT_APP_TOKEN_ID

    async function handleAuth(){
        await Moralis.Web3.authenticate().then(async (user) => {

            const userAddress = await user.get("ethAddress")
            setCurrentUserAddress(userAddress)

            setUser(user)
        })

    }

    async function authValidator(){

        // Get NFTs from Mainnet
        const mainnetNftsData = await Moralis.Web3API.account.getNFTs({
            chain: "eth",
            address: currentUserAddress
        })
        setMainnetNfts(mainnetNftsData)
        
        // Get NFTs from Polygon
        const polygonNFTsData = await Moralis.Web3API.account.getNFTs({
            chain: "matic", address: currentUserAddress
        })
        setPolygonNFTs(polygonNFTsData)

        // check NFT
        const allUserTokens = polygonNFTsData.result

        // auth
        allUserTokens.forEach(item => {
            if(item.token_address === tokenAddress && item.token_id === tokenID){
                setIsAuthenticated(true)
                return
            }
        })
    }

    useEffect(() => {
        user && authValidator()
    }, [user, isAuthenticated])

    return(
        <div>
            <button onClick={handleAuth}>NFT AUTH</button>
            {isAuthenticated && <p>Autorizado</p> }
        </div>
    )
}