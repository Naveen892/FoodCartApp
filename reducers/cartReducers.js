// const cartItem = (state =  ,action) => {
//     switch(action.type){
//         case 'Add_To_Cart' :
//             return [...state, action.payLoad]
//         case 'Remove_From_Cart' :
//             return state.filter(cartItem => cartItem.id !== action.payLoad.id)

//     }
//     return state 
// }

// export default cartItem 

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch(action.type){
        case 'CART_ADD_ITEM':
        const item = action.payload
        return { ...state, item }

    default: 
       return state
 
 }
}