import React from "react";
import { useCollection } from "../hooks/useCollection";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ProductId() {
  const params = useParams();
  const { user } = useSelector((state) => state.user);
  const { data } = useCollection("Recipes", ["uid", "==", user.uid]);
  const data2 = data?.filter((id) => id.id == params.id)[0];
  return (
    <>
      <main className="my-container grow  ">
        <div className="mx-auto w-[1000px]">
          <div className="py-10">
            <h2 className="mb-5 text-2xl font-semibold">Recipe elements</h2>
            <div className="flex flex-col gap-10">
              <div className="carousel carousel-center space-x-4 rounded-box bg-neutral p-4 justify-between">
                <div className="carousel-item">
                  <img
                    src="https://picsum.photos/200/300"
                    className="max-w-sm rounded-box"
                  />
                </div>
                <div className="carousel-item">
                  <img src="https://picsum.photos/200/300" className="max-w-sm rounded-box" />
                </div>
                <div className="carousel-item">
                  <img src="https://picsum.photos/200/300" className="max-w-sm rounded-box" />
                </div>
              </div>
              <div>
                <h2 className="mb-5 text-2xl font-semibold">{data2?.title}</h2>
                <div className="mb-5 flex items-start gap-2">
                  <span className="font-semibold">Ingrediens: </span>
                  <ul className="flex flex-wrap gap-2">
                    <li>
                      <div className="badge badge-neutral">{data2?.Ingredients}</div>
                    </li>
                  </ul>
                </div>
                <div className="mb-5">
                  <span className="font-semibold">
                    Cooking time:
                    <span className="ml-2 font-normal">{data2?.time} minutes</span>
                  </span>
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="mb-2 text-xl font-semibold">Method</h3>
                  <p className="mb-5">{data2?.Method}</p>
                  <a className="btn btn-secondary ml-auto" href="/">
                    Back
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ProductId;
