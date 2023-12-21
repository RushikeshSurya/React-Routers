import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetails from "./pages/ProductDetails";

const routesDefinition = createRoutesFromElements(
  <Route
    path="/"
    element={<RootLayout />}
    errorElement={<ErrorPage />}
    children={[
      <Route index element={<Home />}></Route>,
      <Route path="/products" element={<Products />}></Route>,
      <Route path="/products/:productId" element={<ProductDetails />}></Route>,
    ]}
  />
);
const router = createBrowserRouter(routesDefinition);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
