import { CoinData } from "../../../redux/CoinRedux";
import "./SingleCoin.css";

function SingleCoin(props: CoinData): JSX.Element {
    return (
        <div className="SingleCoin Box">
             <img src={props.image} width={50}/><br/>
			{props.id}<br/>
            <h2>{props.symbol}</h2><br/>
           
            ILS: {props.rateILS}<br/>
            USD: {props.rateUSD}<br/>
            more info...
        </div>
    );
}

export default SingleCoin;
