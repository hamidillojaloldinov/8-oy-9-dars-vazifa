import { IoMdStopwatch } from "react-icons/io";
import { Link } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import toast from "react-hot-toast";

function Recipes({ data }) {
  return (
    <div className="grid lg:grid-cols-3 md:mb-20 mb-0 md:grid-cols-2 sm:grid-cols-1 gap-5 mx-auto text-white">
      {data &&
        data.map((resipe) => {
          return (
            <div className="relative" key={resipe.id}>
              <div className="card-actions justify-end absolute z-[1] sm:left-[330px] left-[265px]">
                <button
                  className="btn btn-square btn-sm m-2"
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                >
                  <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">
                        Do you really want to delete Recipe?
                      </h3>
                      <div className="modal-action">
                        <form method="dialog">
                          <button
                            className="btn mr-5"
                            onClick={() => {
                              deleteDoc(doc(db, "Recipes", resipe.id))
                                .then(() => {
                                  toast.success("Deleted");
                                })
                                .catch((error) => {
                                  toast.error(error.message);
                                });
                            }}
                          >
                            delete
                          </button>
                          <button className="btn">Cancel</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <Link
                to={`/products/${resipe.id}`}
                className="card rounded-3lg h-[460px] glass sm:w-96 w-80 place-content-center"
              >
                <div className="card-body">
                  <h2 className="card-title">{resipe.title}</h2>
                  <p className="line-clamp-3">{resipe.Method}</p>
                </div>
                <div className="flex gap-2 navbar-end w-full pr-10 content-center my-auto absolute top-40">
                  <div className="bg-sky-900 flex items-center px-2 rounded-2xl">
                    !NEW
                  </div>
                  <div className="bg-pink-800 flex items-center px-2 rounded-2xl">
                    <IoMdStopwatch />
                    {resipe.time} minutes
                  </div>
                </div>
                <figure>
                  <img src={resipe.images[0]} alt={resipe.title} />
                </figure>
              </Link>
            </div>
          );
        })}
      <Link
        to="/add_New_Resipet"
        className="card h-[460px] rounded-2xl glass sm:w-96 w-80 place-content-center grid justify-center"
      >
        <h1 className="bg-slate-800 border rounded-full p-8  text-6xl">
          <div className="pb-2 px-3">+</div>
        </h1>
      </Link>
    </div>
  );
}

export default Recipes;
