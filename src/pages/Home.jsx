import { useSelector } from "react-redux";
import { useCollection } from "../hooks/useCollection";
import Recipes from "../components/Recipes";
import { Link } from "react-router-dom";

function Home() {
  const { user } = useSelector((state) => state.user);
  const { data } = useCollection("Recipes", ["uid", "==", user.uid]);
  console.log(data);
  return (
    <div className="w-full bg-cover bg-center h-screen pt-5 bg-[url('./hot-dog.jpg')] dark:bg-[url('./pngtree.jpg')]">
      <div>
        {data ? (
          <div className="flex justify-center">
            <div>
              <h1 className="text-3xl mb-5 text-white">Recipe</h1>
              {data && <Recipes data={data} />}
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 md:mb-20 mb-0 md:grid-cols-2 sm:grid-cols-1 gap-5 mx-auto text-white">
            <Link
              to="/add_New_Resipet"
              className="card rounded-md glass sm:w-96 w-80 place-content-center grid justify-center"
            >
              <div className="">
                <h1 className="text-9xl text-center p-10 bg-slate-800 border rounded-full w-full h-full flex place-content-center justify-center">
                  +
                </h1>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
