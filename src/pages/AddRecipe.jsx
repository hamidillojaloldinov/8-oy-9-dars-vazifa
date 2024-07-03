import { useEffect } from "react";
import { Form, Link, useActionData } from "react-router-dom";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let title = formData.get("title");
  let images = formData.get("images");
  let time = formData.get("time");
  let Ingredients = formData.get("Ingredients");
  let Method = formData.get("Method");
  return { title, images, time, Ingredients, Method };
};

function AddRecipe() {
  const { user } = useSelector((state) => state.user);
  const userData = useActionData();
  console.log(userData);
  useEffect(() => {
    if (userData) {
      const newRecipe = {
        title: userData.title,
        images: userData.images,
        time: userData.time,
        Ingredients: userData.Ingredients,
        Method: userData.Method,
        uid: user.uid,
      };
      addDoc(collection(db, "Recipes"), newRecipe)
        .then(() => {
          toast.success("New Recipe Added");
        })
        .catch((error) => toast.error(error.message));
      userData.title = "";
      userData.images = "";
      userData.time = "";
      userData.Ingredients = "";
      userData.Method = "";
      user.uid = "";
    }
  }, [userData]);
  return (
    <div className="flex justify-center h-[500px]">
      <div>
        <h1 className="text-3xl text-center mt-2">Add New Resipe</h1>
        <Form method="post" className="sm:w-96 w-72 mt-2">
          <div>
            <h3 className="text-lg">Title:</h3>
            <input
              className="border w-full border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              placeholder="Enter your meal name"
              name="title"
            />
          </div>
          <div>
            <h className="text-lg">Cooking time:</h>
            <input
              className="border w-full border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="number"
              placeholder="Enter preparation time of your meal"
              name="time"
              min="2"
              max="3600"
            />
          </div>
          <div>
            <h3 className="text-lg">Ingredients:</h3>
            <div className="flex items-center gap-2">
              <input
                className="border w-full border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                placeholder="Enter ingredients of meal"
                name="Ingredients"
                min="3"
              />
              <button className="btn btn-accent  rounded-xl w-20">+</button>
            </div>
            <div>
              <h3>
                Ingredients:
                <span className="border-2 p-1 text-sm  rounded-full mt-3">
                  No ingredients yet
                </span>
              </h3>
            </div>
          </div>
          <div>
            <h3 className="text-lg">Image URL:</h3>
            <div className="flex items-center gap-2">
              <input
                className="border w-full border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="url"
                placeholder="Enter image URL"
                name="images"
                min="3"
              />
              <button className="btn btn-accent rounded-xl  w-20">+</button>
            </div>
            <h3>
              Images:
              <span className="border-2 p-1 rounded-full  text-sm mt-3">
                No images yet
              </span>
            </h3>
          </div>
          <div>
            <h3 className="text-lg">Method:</h3>
            <textarea
              className="border w-full border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Enter method of meal"
              name="Method"
            ></textarea>
          </div>
          <label className="grid grid-cols-2 gap-5 mt-2">
            <button className="btn btn-accent">
              {/* <Link to="/"> */}
              Applay
              {/* </Link> */}
            </button>
            <button className="btn btn-success">Preview</button>
          </label>
        </Form>
      </div>
    </div>
  );
}

export default AddRecipe;
