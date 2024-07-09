import { useEffect, useState } from "react";
import { Form, Link, useActionData, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useCreate from "../hooks/useCreate";
import { useSelector } from "react-redux";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

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
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();
  const [nation, setNation] = useState("Uzbek");
  const [method, setMethod] = useState("");
  const [prise, setprise] = useState(0);
  const [data2, setdata2] = useState([]);
  const { user } = useSelector((state) => state.user);
  const { loading, Setloading } = useState(false);
  const userData = useActionData();
  useEffect(() => {
    if (userData) {
      const addTodo = async () => {
        Setloading(true);
      };
      const newRecipe = {
        title: userData.title,
        images: images2,
        time: userData.time,
        Ingredients: Ingredients2,
        Method: userData.Method,
        uid: user.uid,
        prise: +userData.prise,
        nation: userData.nation,
        createdAT: serverTimestamp(),
      };
      addDoc(collection(db, "Recipes"), newRecipe)
        .then(() => {
          toast.success("New Recipe Added");
          navigate("/");
        })
        .catch((error) => toast.error(error.message));
    }
  }, [userData]);
  const InputValue = () => {
    images2.push(images);
    Ingredients2.push(Ingredients);
  };

  const Toasteeror = () => {
    toast.error("You must enter at least 3 ingredients of meal");
  };
  const PreviewModal = () => {
    const data = {
      title: title,
      images: images2,
      time: time,
      Ingredients: Ingredients2,
      Method: method,
      prise: +prise,
      nation: nation,
    };
    setdata2(data);
  };
  return (
    <div className="flex justify-center h-[830px] mb-14">
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
              onChange={(e) => setTitle(e.target.value)}
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
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <div>
            <h3 className="text-lg">Nation:</h3>
            <select
              name="nation"
              className="select select-bordered w-full"
              onChange={(e) => setNation(e.target.value)}
            >
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
                required={Ingredients2.length >= 3 ? false : true}
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
                required={images2.length >= 3 ? false : true}
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
                          <img
                            className="w-20 h-14 rounded-md"
                            src={img}
                            alt=""
                          />
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
              minLength="100"
              placeholder="Enter method of meal"
              onChange={(e) => setMethod(e.target.value)}
            ></textarea>
          </div>
          <label className="grid grid-cols-2 gap-5 mt-2">
            {Ingredients2.length >= 3 && images2.length >= 3 ? (
                <button className="btn btn-accent" disabled={loading}>
                  {loading ? "Adding..." : "Add"}
                </button>
            ) : (
              <input
                className="btn btn-accent"
                type="button"
                onClick={() => Toasteeror()}
                value="Applay"
              />
            )}
            {title == "" &&
            images2.length >= 3 &&
            time == 0 &&
            Ingredients2.length >= 3 &&
            method == "" &&
            prise == 0 ? (
              <input
                onClick={() => toast.error("please fill in the inputs")}
                value="Preview"
                className="btn btn-success"
                type="button"
              />
            ) : (
              <input
                value="Preview"
                onClick={() => {
                  PreviewModal(),
                    document.getElementById("my_modal_4").showModal();
                }}
                className="btn btn-success"
                type="button"
              />
            )}
          </label>
          <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-7xl">
              <div className="my-container grow">
                <div className="mx-auto md:w-[700px] lg:w-[1000px] sm:w-[400px]">
                  <div className="py-10">
                    <h2 className="mb-5 text-2xl font-semibold">
                      Recipe elements
                    </h2>
                    <div className="flex flex-col gap-10">
                      <div className="carousel carousel-center space-x-4 rounded-box bg-neutral p-4 justify-between">
                        {data2 &&
                          data2?.images?.map((img) => {
                            return (
                              <div key={img} className="carousel-item">
                                <img
                                  src={img}
                                  className="max-w-sm rounded-box"
                                />
                              </div>
                            );
                          })}
                      </div>
                      <div>
                        <h2 className="mb-5 text-2xl font-semibold">
                          {data2?.title}
                        </h2>
                        <div className="mb-5 flex items-start gap-2">
                          <span className="font-semibold">Ingrediens: </span>
                          <ul className="flex flex-wrap gap-2">
                            {data2 &&
                              data2?.Ingredients?.map((Ingredient) => {
                                return (
                                  <li key={Ingredient}>
                                    <div className="badge badge-neutral">
                                      {Ingredient}
                                    </div>
                                  </li>
                                );
                              })}
                          </ul>
                        </div>
                        <div className="mb-5">
                          <span className="font-semibold">
                            Cooking time:
                            <span className="ml-2 font-normal">
                              {data2?.time} minutes
                            </span>
                          </span>
                        </div>
                        <div className="mb-5">
                          <span className="font-semibold">
                            Prise:
                            <span className="ml-2 font-normal">
                              {data2?.prise}
                            </span>
                          </span>
                        </div>
                        <div className="flex gap-5 items-start">
                          <h3 className="mb-2 font-semibold">Nation:</h3>
                          <p className="mb-5">{data2?.nation}</p>
                        </div>
                        <div className="flex gap-5 items-start">
                          <h3 className="mb-2 text-xl font-semibold">
                            Method:
                          </h3>
                          <p className="mb-5">{data2?.Method}</p>
                        </div>

                        <div className="sm:flex bleck items-center w-full justify-between">
                          <form method="dialog">
                            <button className="btn btn-secondary">
                              Cancel
                            </button>
                          </form>
                          <button
                            onClick={() => useCreate(Ingredients2, images2)}
                          >
                            <form method="dialog" className="btn btn-secondary">
                              Add
                            </form>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </dialog>
        </Form>
      </div>
    </div>
  );
}

export default AddRecipe;
