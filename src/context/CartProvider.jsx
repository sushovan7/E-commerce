// import React from 'react'
// import { createContext,useContext,useReducer } from 'react'

// const cartContext = createContext();

// function cartReducer(cart,action){
//     if(action.type === 'ADD_ITEM'){
//         return [...cart , action.payload]
//     }
//     return cart
// }

// function CartProvider({children}) {

//     const [cart,dispatch] = useReducer(cartReducer,[])
//   return (
//     <cartContext.Provider value={{cart,dispatch}}>{children}</cartContext.Provider>
//   )
// }

//  export function useCart(){
//     return useContext(cartContext)
// }

// export default CartProvider