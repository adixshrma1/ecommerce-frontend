import { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import SetQuantity from "./SetQuantity";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import {
  decreaseCartQuantity,
  increaseCartQuantity,
  removeFromCart,
} from "../../store/actions";
import { formatPrice } from "../../utils/formatPrice";
import truncateText from "../../utils/truncateText";

const ItemContent = ({
  productId,
  productName,
  image,
  description,
  quantity,
  price,
  discount,
  specialPrice,
  cartId,
}) => {
  const [currQuantity, setCurrQuantity] = useState(quantity);
  const dispatch = useDispatch();
  const handleQtyIncrease = (cartItem) => {
    dispatch(
      increaseCartQuantity(cartItem, toast, currQuantity, setCurrQuantity)
    );
  };
  const handleQtyDecrease = (cartItem) => {
    if (currQuantity > 1) {
      const newQuantity = currQuantity - 1;
      setCurrQuantity(newQuantity)
      dispatch(
        decreaseCartQuantity(cartItem, newQuantity)
      );
    }
  };

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem, toast))
  }

  return (
    <>
      <div
        className="grid md:grid-cols-5 grid-cols-4 md:text-base text-sm gap-4 items-center 
        border border-slate-200 px-4 py-2 rounded"
      >
        <div className="md:col-span-2 justify-self-start flex flex-col gap-2">
          <div className="flex md:flex-row flex-col lg:gap-4 sm:gap-3 gap-0 items-start">
            <h3 className="lg:text-base text-sm font-semibold text-slate-600">
              {truncateText(productName)}
            </h3>
          </div>

          <div className="md:w-36 sm:w-24 w-12">
            <img
              src={image}
              alt={productName}
              className="md:w-36 sm:h-24 h-12 w-full object-cover rounded"
            />

            <div className="flex items-start gap-5 mt-3">
              <button
                onClick={() => handleRemoveFromCart({
                  productId,
                  productName
                })}
                className="flex items-center font-semibold space-x-2 px-4 py-1 text-xs cursor-pointer
              border border-rose-600 text-rose-600 rounded-md hover:bg-red-200 transition-colors duration-200"
              >
                <HiOutlineTrash />
                remove
              </button>
            </div>
          </div>
        </div>

        <div className="justify-self-center lg:text-base text-sm text-slate-600 font-semibold">
          {formatPrice(Number(specialPrice))}
        </div>

        <div className="justify-self-center">
          <SetQuantity
            quantity={currQuantity}
            cardCounter={true}
            handleQtyIncrease={() =>
              handleQtyIncrease({
                productId,
                productName,
                image,
                description,
                quantity,
                price,
                discount,
                specialPrice,
              })
            }
            handleQtyDecrease={() =>
              handleQtyDecrease({
                productId,
                productName,
                image,
                description,
                quantity,
                price,
                discount,
                specialPrice,
              })
            }
          />
        </div>

        <div className="justify-self-center lg:text-base text-sm text-slate-600 font-semibold">
          {formatPrice(Number(currQuantity) * Number(specialPrice))}
        </div>
      </div>
    </>
  );
};

export default ItemContent;
