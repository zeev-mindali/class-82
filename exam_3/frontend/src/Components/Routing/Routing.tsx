import { Route, Routes } from "react-router-dom";
import ListAll from "../ListAll/ListAll";
import SingleProduct from "../SingleProduct/SingleProduct";
import UpdateQty from "../UpdateQty/UpdateQty";

function Routing(): JSX.Element {
  return (
    <div className="Routing">
      <Routes>
        <Route path="/api/all" element={<ListAll />} />
        <Route path="/api/units" element={<UpdateQty />} />
        <Route path="/api/single/:id" element={<SingleProduct/>}/>
        <Route path="*" element={<ListAll />} />
      </Routes>
    </div>
  );
}

export default Routing;
