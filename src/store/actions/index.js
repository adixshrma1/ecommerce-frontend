import api from "../../api/api";

export const fetchProducts = (queryString) => async (dispatch) => {
  try {
    dispatch({ type: "FETCHING" });
    const { data } = await api.get(`/public/products?${queryString}`);
    dispatch({
      type: "FETCH_PRODUCTS",
      payload: data.content,
      pageNumber: data.pageNumber,
      pageSize: data.pageSize,
      totalElements: data.totalElements,
      totalPages: data.totalPages,
      lastPage: data.lastPage,
    });
    dispatch({ type: "SUCCESS" });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "ERROR",
      payload: error?.message || "Failed to fetch products",
    });
  }
};

export const fetchCategories = () => async (dispatch) => {
  try {
    dispatch({ type: "CATEGORY_LOADER" });
    const { data } = await api.get(`/public/categories`);
    dispatch({
      type: "FETCH_CATEGORIES",
      payload: data.content,
      pageNumber: data.pageNumber,
      pageSize: data.pageSize,
      totalElements: data.totalElements,
      totalPages: data.totalPages,
      lastPage: data.lastPage,
    });
    dispatch({ type: "CATEGORY_SUCCESS" });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "ERROR",
      payload: error?.message || "Failed to fetch Categories",
    });
  }
};

export const addToCart =
  (data, quantity = 1, toast) =>
  (dispatch, getState) => {
    // find the product
    const { products } = getState().products;
    const product = products.find((item) => item.productId === data.productId);
    // check for stocks
    const isQuantityExist = product.quantity >= quantity;

    if (isQuantityExist) {
      // add
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...data, quantity: quantity },
      });
      localStorage.setItem("cartItems", JSON.stringify(getState().carts.cart));
      toast.success(`${data?.productName} is added to cart`);
    } else {
      // error
      toast.error("out of stock");
    }
  };

export const increaseCartQuantity =
  (data, toast, currentQty, setCurrentQty) => (dispatch, getState) => {
    // find the product
    const { products } = getState().products;
    const product = products.find((item) => item.productId === data.productId);

    const isQuantityExist = product.quantity >= currentQty + 1;

    if (isQuantityExist) {
      setCurrentQty(currentQty + 1);
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...data, quantity: currentQty + 1 },
      });
      localStorage.setItem("cartItems", JSON.stringify(getState().carts.cart));
    } else {
      toast.error("Quantity reached to limit.");
    }
  };

export const decreaseCartQuantity =
  (data, newQuantity) => (dispatch, getState) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...data, quantity: newQuantity },
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().carts.cart));
  };

export const removeFromCart = (data, toast) => (dispatch, getState) => {
  dispatch({ type: "REMOVE_FROM_CART", payload: data });
  toast.success(`${data.productName} is removed from cart`);
  localStorage.setItem("cartItems", JSON.stringify(getState().carts.cart));
};
