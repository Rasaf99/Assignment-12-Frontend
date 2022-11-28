import { AuthContext } from "context/auth-context";
import { useContext } from "react";

 
export default function useAuthContext () {

    const context = useContext(AuthContext)

    if(!context) {

        throw Error('useAuthContext must be used in a component which is wrapped by AUTH_CONTEXT_PROVIDER.')
    }


    return context
}

