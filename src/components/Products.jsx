import { FaExclamationTriangle } from "react-icons/fa";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Filter from "./Filter.jsx";
import useProductFilter from "../hooks/useProductFilter.jsx";
import { fetchCategories } from "../store/actions/index.js";
import Loader from "./Loader.jsx";
import PageComp from "./PageComp.jsx";

const Products = () => {
  const { isLoading, errorMessage } = useSelector((state) => state.errors);

  const { products, categories, pagination } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useProductFilter();

  return (
    <div className="lg:px-14 sm:px-8 px-4 py-14 2xl:w-[90%] 2xl:mx-auto">
      <Filter categories={categories ? categories : []} />
      {isLoading ? (
        <Loader />
      ) : errorMessage ? (
        <div className="flex items-center justify-center h-[200px]">
          <FaExclamationTriangle className="text-slate-800 text-lg font-medium" />
          <span className="text-slate-800 text-lg font-medium">
            {errorMessage}
          </span>
        </div>
      ) : (
        <div className="min-h-[700px]">
          <div className="pb-6 pt-14 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-6">
            {products &&
              products.map((item, index) => (
                <ProductCard key={index} {...item} />
              ))}
          </div>
          <div className="flex justify-center pt-10">
            <PageComp
              totalPages={pagination?.totalPages}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
