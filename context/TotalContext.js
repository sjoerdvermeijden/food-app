import React from 'react'

export const TotalContext = React.createContext()

export function TotalComponent({children}) {
    const [cartTotal, setCartTotal] = React.useState()

    return (
        <TotalContext.Provider value={[cartTotal, setCartTotal]}>
            {children}
        </TotalContext.Provider>
    )
}