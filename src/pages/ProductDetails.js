import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const params = useParams();
  return (
    <>
      <h1>Product Details!</h1>
      <h3>{params.productId}</h3>
    </>
  );
}
