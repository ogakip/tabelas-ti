import { createContext, useState, useEffect, FC, PropsWithChildren } from "react";
import { LoginUserProps } from "../../interfaces/user";
import axios from "axios";
import { api } from "../../utils/axios";

interface ContextProps {
    login: any
}

const initialValues = {
    login: () => ""
}

export const AuthContext = createContext<ContextProps>(initialValues)

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
    const [accessToken, setAccessToken] = useState()

    const login = async (data: LoginUserProps) => {
        api.post(`/users/login`, data).then((res) => console.log(res)).catch((error) => console.log(error))
    }

    return <AuthContext.Provider value={{ login }}>
        {children}
    </AuthContext.Provider>
}