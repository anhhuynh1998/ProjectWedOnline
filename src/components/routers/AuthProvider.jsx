import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    const login = () => {
        // Logic xác thực đăng nhập, có thể gọi API, kiểm tra cookie, localStorage, vv.
        setLoggedIn(true);
    };

    const logout = () => {
        // Logic đăng xuất
        setLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
