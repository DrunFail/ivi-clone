import { useContext, useDebugValue } from "react";
import AuthContext from "../context/AuthProvider";

const useAuth = () => {
    const { auth } = useContext(AuthContext);
    /*if (!auth) return null;*/
    useDebugValue(auth, auth => auth.token ? "Logged In" : "Logged Out");
    return useContext(AuthContext);
};

export default useAuth;
