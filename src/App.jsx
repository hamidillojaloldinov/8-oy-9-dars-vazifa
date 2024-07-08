import { useDispatch, useSelector } from "react-redux";
import {
  AddRecipe,
  Home,
  ProductId,
  Cart,
  Login,
  Register,
  Error,
  Themes,
  Charts,
} from "./pages";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ProtectedRoutes from "./components/Protectedroutes";

import { action as RegisterAction } from "./pages/Register";
import { action as AddRecipeAction } from "./pages/AddRecipe";
import { action as LoginAction } from "./pages/Login";
import { isAuthChange, login } from "./app/userslice";
import { useEffect } from "react";
import { auth } from "./firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const dispatch = useDispatch();
  const { user, isAuthState } = useSelector((state) => state.user);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/products/:id",
          element: <ProductId />,
        },
        {
          path: "/add_New_Resipet",
          element: <AddRecipe />,
          action: AddRecipeAction,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/themes",
          element: <Themes />,
        },
        {
          path: "/charts",
          element: <Charts />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
      action: LoginAction,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
      action: RegisterAction,
    },
  ]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(login(user));
      dispatch(isAuthChange());
    });
  }, []);

  return <>{isAuthState && <RouterProvider router={routes} />}</>;
}

export default App;
