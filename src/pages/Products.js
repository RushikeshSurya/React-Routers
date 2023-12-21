import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "prod-1", Title: "Product 1" },
  { id: "prod-2", Title: "Product 2" },
  { id: "prod-3", Title: "Product 3" },
  { id: "prod-4", Title: "Product 4" },
];
export default function Products() {
  return (
    <>
      <h1>Products page</h1>
      <ul>
        <li>
          {PRODUCTS.map((prod) => (
            <li key={prod.id}>
              <Link to={`/products/${prod.id}`}>{prod.Title}</Link>
            </li>
          ))}
        </li>
      </ul>
    </>
  );
}
