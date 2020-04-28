import {useEffect, useContext} from 'react'
import { Context as AuthContext } from "../context/AuthContext";

function ResolveAuthScreen() {

    const { tryLocalSignin } = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignin();
    },[])
    return null;
}

export default ResolveAuthScreen;
