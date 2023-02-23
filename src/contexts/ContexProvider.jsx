import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
}

export const ContextProvider = ({ children }) => {

    const [productNo, setproductNo] = useState(-1);
    const [detail, setdetail] = useState(false);

    const handleDetail = () => {
        setdetail(!detail);
    }

    return (
        <StateContext.Provider value={{
            productNo, setproductNo, detail, handleDetail
        }}>
            {children}
        </StateContext.Provider>)
}

export const useStateContext = () => useContext(StateContext);