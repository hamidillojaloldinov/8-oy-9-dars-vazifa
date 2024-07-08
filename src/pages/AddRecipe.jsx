import { useEffect, useState } from "react";
import { Form, Link } from "react-router-dom";
import toast from "react-hot-toast";
import useCreate from "../hooks/useCreate";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let title = formData.get("title");
  let images = formData.get("images");
  let time = formData.get("time");
  let Ingredients = formData.get("Ingredients");
  let Method = formData.get("Method");
  let prise = formData.get("prise");
  let nation = formData.get("nation");
  return { title, images, time, Ingredients, Method, prise, nation };
};

function AddRecipe() {
  const [images2, setImages2] = useState([]);
  const [images, setImages] = useState("");
  const [Ingredients2, setIngredients2] = useState([]);
  const [Ingredients, setIngredients] = useState("");
  const [prise, setprise] = useState(0);

  useCreate(Ingredients2, images2);

  const InputValue = () => {
    images2.push(images);
    Ingredients2.push(Ingredients);
  };
  const Toasteeror = () => {
    toast.error("You must enter at least 3 ingredients of meal");
  };
  return (
    <div className="flex justify-center h-[780px] mb-14">
      <div>
        <h1 className="text-3xl text-center mt-2">Add New Resipe</h1>
        <Form method="post" className="sm:w-[484px] w-80 mt-2">
          <div>
            <h3 className="text-lg">Title:</h3>
            <input
              required
              className="border w-full border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              placeholder="Enter your meal name"
              name="title"
            />
          </div>
          <div>
            <h1 className="text-lg">Cooking time:</h1>
            <input
              required
              className="border w-full border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="number"
              placeholder="Enter preparation time of your meal"
              name="time"
              min="2"
              max="3600"
            />
          </div>
          <div>
            <h3 className="text-lg">Nation:</h3>
            <select name="nation" className="select select-bordered  w-full">
              <option>Uzbek</option>
              <option>Turky</option>
              <option>Russia</option>
              <option>Outher</option>
              <option>Europa</option>
            </select>
          </div>
          <div>
            <h3 className="text-lg">Ingredients:</h3>
            <div className="flex items-center gap-2">
              <input
                required
                className="border w-full border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                placeholder="Enter ingredients of meal"
                name="Ingredients"
                min="3"
                value={Ingredients}
                onChange={(e) => setIngredients(e.target.value)}
              />
              <input
                required
                type="button"
                className="btn btn-accent  rounded-xl w-20"
                value="+"
                onClick={() => {
                  Ingredients2.push(Ingredients), setIngredients("");
                }}
              />
            </div>
            <h3 className="flex items-center gap-2">
              Ingredients:
              <span className=" flex text-sm">
                {Ingredients2.length == 0 ? (
                  <h2 className="border-2 p-1 text-sm rounded-full">
                    No Ingredients yet
                  </h2>
                ) : (
                  <ul className="flex items-center gap-2">
                    {Ingredients2.map((Ingredient) => {
                      return (
                        <li
                          key={Ingredient}
                          className="relative flex items-center"
                        >
                          <div className="w-10 truncate">{Ingredient}</div>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </span>
            </h3>
          </div>
          <div>
            <h3 className="text-lg">Image URL:</h3>
            <div className="flex items-center gap-2">
              <input
                required
                className="border w-full border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="url"
                placeholder="Enter image URL"
                name="images"
                min="13"
                value={images}
                onChange={(e) => setImages(e.target.value)}
              />
              <input
                className="btn btn-accent rounded-xl w-20"
                onClick={() => {
                  images2.push(images), setImages("");
                }}
                type="button"
                value="+"
              />
            </div>
            <h3 className="flex items-center gap-2">
              Images:
              <span className=" flex text-sm">
                {images2.length == 0 ? (
                  <h2 className="border-2 p-1 text-sm rounded-full">
                    No images yet
                  </h2>
                ) : (
                  <ul className="flex items-center gap-2">
                    {images2.map((img) => {
                      return (
                        <li key={img} className="relative flex items-center">
                          <img className="w-20 rounded-md" src={img} alt="" />
                        </li>
                      );
                    })}
                  </ul>
                )}
              </span>
            </h3>
          </div>
          <div>
            <h3 className="text-lg">
              prise:
              <input
                required
                type="number"
                className="w-[54px]"
                onChange={(e) => setprise(e.target.value)}
                value={prise}
                max="10000"
              />
              .000 so'm
            </h3>
            <div className="flex items-center gap-2">
              <input
                required
                className="border w-full border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="range"
                name="prise"
                min="1"
                max="10000"
                onChange={(e) => setprise(e.target.value)}
                value={prise}
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg">Method:</h3>
            <textarea
              required
              className="border w-full border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="Method"
              cols="30"
              rows="5"
              minLength="50"
              placeholder="Enter method of meal"
            ></textarea>
          </div>
          <label className="grid grid-cols-2 gap-5 mt-2">
            {Ingredients2.length >= 3 && images2.length >= 3 ? (
              <button onClick={() => InputValue()} className="btn btn-accent">
                Applay
              </button>
            ) : (
              <input
                className="btn btn-accent"
                type="button"
                onClick={() => Toasteeror()}
                value="Applay"
              />
            )}
            <button className="btn btn-success">Preview</button>
          </label>
        </Form>
      </div>
    </div>
  );
}

export default AddRecipe;
