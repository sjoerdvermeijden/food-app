import React from 'react'

import { Burgers } from "../burgers";

export const HamburgerContext = React.createContext()

export function HamburgerComponent({children}) {
    const [hamburgerItems, setHamburgerItems] = React.useState(Burgers)

    return (
        <HamburgerContext.Provider value={[hamburgerItems, setHamburgerItems]}>
            {children}
        </HamburgerContext.Provider>
    )
}