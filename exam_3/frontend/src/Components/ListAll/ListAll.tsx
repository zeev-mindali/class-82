import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Products } from "../../productModel";
import "./ListAll.css";

function ListAll(): JSX.Element {
  const url = "http://localhost:3001/api/products";

  //update variable, and rerender the component with the new data.
  const [products, setData] = useState<Products[]>([]);
  const navigate = useNavigate();
  //will run only once , when component is loaded
  //the code will not be executed upon re-rendring;
  useEffect(() => {
    axios.get<Products[]>(url).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="ListAll">
      <h1>Product List</h1>
      <hr />
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>product name</th>
            <th>price</th>
            <th>unit</th>
            <th>manufactorer</th>
            <th>last update</th>
            <th>update qty</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.product_name}</td>
              <td>{item.price}</td>
              <td>{item.units}</td>
              <td>{item.manufactor_name}</td>
              <td>{item.last_update?.toLocaleString().split("T")[0]}</td>
              <td>
                <button
                  onClick={() => {
                    //navigate("/donation/new/" + item.id);
                    navigate("/api/units/" + item.id);
                  }}
                >
                  ✍🏻
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    navigate("/api/single/" + item.id);
                  }}
                >
                  ℹ
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListAll;
