import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Products } from "../../productModel";
import "./SingleProduct.css";

function SingleProduct(): JSX.Element {
  const [product, setData] = useState<Products>();
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const id = +(params.id || 0);
    axios
      .get<Products[]>("http://localhost:3001/api/single/" + id)
      .then((response) => {
        console.log(response.data[0]);
        setData(response.data[0]);
      });
  }, []);
  return (
    <div className="SingleProduct">
      <form>
        <h2>Product info</h2>
        <label>id:</label>
        <input type="text" value={product?.id} disabled />

        <label>Product name</label>
        <input type="text" value={product?.product_name} disabled />

        <label>price</label>
        <input type="text" value={product?.price} disabled />

        <label>units</label>
        <input type="number" value={product?.units} disabled />

        <label>manufactor</label>
        <input type="text" value={product?.manufactor_name} disabled />

        <label>last update</label>
        <input
          type="text"
          value={product?.last_update?.toLocaleString().split("T")[0]}
          disabled
        />
        <input type="button" onClick={() => navigate("/")} value="close" />
      </form>
    </div>
  );
}

export default SingleProduct;
