import { useMoralis } from "react-moralis";

export function Home(){

    const { authenticate, isAuthenticated, account, chainId, logout } = useMoralis();

    async function handleAuth(){
        await authenticate()
    }

    return(
        <div>
            <button onClick={handleAuth}>Auth</button>
        </div>
    )
}