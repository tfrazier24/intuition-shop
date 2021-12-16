import React, { useContext, useState, useEffect } from "react";

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}){

    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    
}