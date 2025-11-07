import { MdArrowBack, MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <>
      <div className="lg:px-14 sm:px-8 px-4 py-10">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
            <MdShoppingCart size={36} className="text-gray-700" />
            Your Cart
          </h1>
          <p className="text-lg text-gray-600 mt-2">All your selected items</p>
        </div>

        <div className="h-80 flex items-center justify-center border-t-[1.5px] border-gray-400">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-2xl md:text-4xl text-gray-900">
              Your Cart is Empty!!
            </h2>
            <p className="text-gray-600 md:text-lg">
              Add some products to get started
            </p>
            <Link
              to={"/products"}
              className="flex items-center gap-1 text-blue-500 hover:text-blue-600 transition-colors duration-300"
            >
              <MdArrowBack size={20} />
              <span className="font-medium">Start Shopping</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmptyCart;
