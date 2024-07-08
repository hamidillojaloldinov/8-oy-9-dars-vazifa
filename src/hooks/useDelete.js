import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import toast from "react-hot-toast";

function useDelete(id) {
  deleteDoc(doc(db, "Recipes", id))
    .then(() => {
      toast.success("Deleted");
    })
    .catch((error) => {
      toast.error(error.message);
    });
}

export default useDelete;
