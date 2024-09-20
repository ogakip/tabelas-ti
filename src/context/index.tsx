import { FC, PropsWithChildren } from "react";
import { AuthProvider } from "./auth";

export const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
    return  <AuthProvider>
        { children }
    </AuthProvider>
}