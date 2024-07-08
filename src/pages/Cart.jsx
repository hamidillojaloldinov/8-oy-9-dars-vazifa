import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { changeAmount, removeAll, removeProduct } from "../app/userslice";

function Cart() {
  const { calculator } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [prises, setPrises] = useState(0);
  if (calculator.products.length == 0) {
    return (
      <>
        <div className="m-auto flex justify-center items-center h-[500px] max-w-[1220px]">
          <div className="flex flex-col text-center justify-center items-center">
            <img src="" alt="" />
            <h1 className="font-semibold text-[34px]">
              Your cart is empty and sad :{`(`}
            </h1>
            <p className="text-[16px] font-normal text-[#807D7E]">
              Add something to make it happy!
            </p>
            <Link to="/">
              <button className="mt-[50px] text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-300 font-bold w-[250px] h-[61px] bg-[#8A33FD] rounded-[8px]">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="mx-48 mt-10">
        <h1 className="text-4xl ">Shopping Cart</h1>
        <div className="grid sm:grid-cols-2 grid-cols-1">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {calculator.products.map((product) => {
                  return (
                    <tr key={product.id}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src={product.images[0]}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div></div>
                        </div>
                      </td>
                      <td>
                        <div className="w-40 text-xl">{product.title}</div>
                        <div className="text-sm opacity-50">
                          {product.prise}.000 so'm
                        </div>
                      </td>
                      {/* {setPrises(prises + product.prise)} */}
                      <td>
                        <div className="flex items-center gap-2">
                          <button
                            className="px-2 text-indigo-950 border-indigo-950 border-2 rounded-full"
                            onClick={() =>
                              dispatch(
                                changeAmount({
                                  id: product.id,
                                  type: "increase",
                                })
                              )
                            }
                          >
                            +
                          </button>
                          <h1 className="px-2 text-indigo-950 bg-teal-100 py-1 rounded-md">
                            {product.amount}
                          </h1>
                          <button
                            className="px-2 text-indigo-950 border-indigo-950 border-2 rounded-full"
                            onClick={() =>
                              dispatch(
                                changeAmount({
                                  id: product.id,
                                  type: "decrease",
                                })
                              )
                            }
                            disabled={product.amount == 1 ? true : false}
                          >
                            -
                          </button>
                        </div>
                      </td>
                      <th>
                        <button
                          onClick={() => dispatch(removeProduct(product.id))}
                          className="btn btn-ghost btn-xs"
                        >
                          <FaTrashAlt className="h-5 w-4" />
                        </button>
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="sm:w-96 w-70 sm:ml-40 ml-0">
            <h3 className="text-xl">Order Summary</h3>
            <div className="bg-teal-100 rounded-md gap-10 text-center py-2">
              <input
                type="text"
                className="bg-teal-100 h-full mr-5"
                placeholder="Enter promo code..."
              />
              <button className="bg-indigo-950 btn text-white">Apply</button>
            </div>
            <div>
              <div className="flex justify-between px-2 items-center py-2 mt-5 border-y-2 border-indigo-500">
                <h4 className="text-lg">Item {calculator.products.length}</h4>
                <h4>{calculator.price}.000 so'm</h4>
              </div>
              <div className="">
                <div className="flex justify-between items-center px-2 pt-2">
                  <h5>Subtotal: </h5>
                  <h4>{calculator.price}.000 so'm</h4>
                </div>
                <div className="flex justify-between items-center px-2  mt-5">
                  <h2 className="text-lg">Total:</h2>
                  <h4>{calculator.price}.000 so'm</h4>
                </div>
              </div>
            </div>
            <button
              className="btn w-full mt-2"
              onClick={() => dispatch(removeAll())}
            >
              Check out
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
