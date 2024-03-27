import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    // state
    const [user, setUser] = useState("");
    const [isAuthorized, setIsAuthorized] = useState(false);
    // functions

    return (
        <UserContext.Provider value={{ user, setUser, isAuthorized, setIsAuthorized }}>
            {children}
        </UserContext.Provider>
    );
};
