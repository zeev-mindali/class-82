import axios from "axios";
import { useState, useEffect, SyntheticEvent } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Products } from "../../productModel";
import "./UpdateQty.css";

function UpdateQty(): JSX.Element {
  const [product, setData] = useState<Products>();
  const [newQty, setQty] = useState(0);

  const params = useParams();
  const navigate = useNavigate();

  const qtyChange = (args: SyntheticEvent) => {
    const qty = (args.target as HTMLInputElement).value;
    setQty(+qty);
    product!.units = +qty;
  };

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
    <div className="UpdateQty">
      <form>
        <h2>Product info</h2>
        <label>id:</label>
        <input type="text" value={product?.id} disabled />

        <label>Product name</label>
        <input type="text" value={product?.product_name} disabled />

        <label>price</label>
        <input type="text" value={product?.price} disabled />

        <label>units ({product?.units})</label>
        <input type="number" value={product?.units} onChange={qtyChange} />

        <label>manufactor</label>
        <input type="text" value={product?.manufactor_name} disabled />

        <label>last update</label>
        <input
          type="text"
          value={product?.last_update?.toLocaleString().split("T")[0]}
          disabled
        />
        <input
          type="button"
          value="update"
          onClick={() => {
            //send new qty to server
            // "/api/products/:id/:units",
            axios.post(
              `http://localhost:3001/api/products/${product?.id}/${newQty}`
            );
            //move to main screen
            navigate("/");
          }}
        />
      </form>
    </div>
  );
}

export default UpdateQty;
