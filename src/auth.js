import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

function AuthProvider ({ children}){
    const navigate = useNavigate();
    const [user, setUSer] = React.useState(null);
    
    const login = ({ username }) => {
        setUSer({ username });
        navigate('/profile');
    };

    const logout = () => {
        setUSer(null);
        navigate('/');
    };

    const auth = { user, login, logout };

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(){
    const auth = React.useContext(AuthContext);
    return auth;
}

function AuthRoute(props){
    const auth = useAuth();

    if(!auth.user){
        return <Navigate to="/login" />
    }

    return props.children;
}

export { AuthProvider, useAuth, AuthRoute };