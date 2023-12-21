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


const routesDefinition = createRoutesFromElements(
  
    <Route
      path="/"
      element={<RootLayout />}
      errorElement={<ErrorPage />}
      children={[
        <Route path="/" element={<Home />}></Route>,
        <Route path="/products" element={<Products />}></Route>,
      ]}
    />
  
);
const router = createBrowserRouter(routesDefinition);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
