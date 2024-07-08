import { useSelector } from "react-redux";
import { useCollection } from "../hooks/useCollection";
import Recipes from "../components/Recipes";
import { Link } from "react-router-dom";

function Home() {
  const { user } = useSelector((state) => state.user);
  const { data } = useCollection(
    "Recipes",
    ["uid", "==", user.uid],
    ["createdAT"]
  );
  return (
    <div>
      <img
        className="w-full bg-cover bg-center h-screen z-[-1] absolute"
        src="/hot-dog.jpg"
        alt=""
      />
      <div className="pt-5">
        {data ? (
          <div className="flex justify-center">
            <div>
              <h1 className="text-3xl mb-5 text-white">Recipe</h1>
              {data && <Recipes data={data} />}
            </div>
          </div>
        ) : (
          <div className="w-full mx-[700px]">
            <span className="loading loading-ring text-white w-20 my-60"></span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
