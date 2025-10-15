import api from "../../api/api";

export const fetchProducts = () => async (dispatch) =>{
    try {
        dispatch({ type: "FETCHING" })
        const { data } = await api.get(`/public/products`);
        dispatch({
            type: "FETCH_PRODUCTS",
            payload: data.content,
            pageNumber: data.pageNumber,
            pageSize: data.pageSize,
            totalElements: data.totalElements,
            totalPages: data.totalPages,
            lastPage: data.lastPage
        })
        dispatch({ type: "SUCCESS" })
    } catch (error) {
        console.log(error);
        dispatch({ 
            type: "ERROR",
            payload: error?.message || "Failed to fetch products"
        })
    }
}