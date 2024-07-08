import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useActionData } from "react-router-dom";
import { db } from "../firebase/firebaseConfig";
import toast from "react-hot-toast";

function useCreate(Ingredients2, images2) {
  const { user } = useSelector((state) => state.user);
  const userData = useActionData();
  useEffect(() => {
    if (userData) {
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
        })
        .catch((error) => toast.error(error.message));
    }
  }, [userData]);
}

export default useCreate;
