export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODCUT_FROM_CART";

export const addProductToCart = product => {
  return dispatch => {
    // This is where you could reach out to an API and then dispatch "FETCHING" then "FETCHED"...or use redux_thunk
    setTimeout(() => {
      dispatch({
        type: ADD_PRODUCT_TO_CART,
        payload: product
      });
    }, 700);
  };
};

export const removeProductFromCart = productId => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: REMOVE_PRODUCT_FROM_CART,
        payload: productId
      });
    }, 700);
  };
};
