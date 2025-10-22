const initialState = {
  cart: [],
  totalPrice: 0,
  cartId: null,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const productToAdd = action.payload;
      const existingProduct = state.cart.find(
        (item) => item.productId === productToAdd.productId 
      )

      if(existingProduct){
        const updatedCart = state.cart.map(item => {
          if(item.productId === productToAdd.productId){
            return productToAdd;  // you can increase qnty if u want.
          } else {
            return item;
          }
        })
        return {...state, cart: updatedCart};
      } else {
        const newCart = [...state.cart, productToAdd];
        return {...state, cart: newCart}
      }
  
    case "REMOVE_FROM_CART":
      const newCart = state.cart.filter((item) => item.productId !== action.payload.productId)
      return {...state, cart: newCart}
    
    default:
      return state;
  }
};
