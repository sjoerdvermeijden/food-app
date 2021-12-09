import React from 'react'

export const CartContext = React.createContext()

export function CartComponent({children}) {
    const [cartItems, setCartItems] = React.useState([])

    return (
        <CartContext.Provider value={[cartItems, setCartItems]}>
            {children}
        </CartContext.Provider>
    )
}