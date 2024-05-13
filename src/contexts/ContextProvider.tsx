import React from "react";

type ContextValue = {
    auth:boolean,
    setAuth: React.Dispatch<React.SetStateAction<boolean>>,
}

const StateContext = React.createContext<ContextValue | undefined>(undefined)

export const ContextProvider = ({children}:React.PropsWithChildren<{}>) => {

    const [auth, setAuth] = React.useState<boolean>(false)
    
    const contextValue: ContextValue = {
        auth,
        setAuth,
    }

    return(
        <StateContext.Provider value={contextValue}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = ():ContextValue => {
    const context = React.useContext(StateContext)

    if(!context){
        throw new Error("useStateContext muy be uded within a ContextProvidewr")
    }
    return context;
}