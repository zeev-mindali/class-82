import axios from "axios";
import { useEffect } from "react";
import { coinAddAction, CoinData } from "../../../redux/CoinRedux";
import { store } from "../../../redux/store";
import "./Coins.css";

function Coins(): JSX.Element {

    useEffect(() =>{
        //check if we have coins
        if (store.getState().CoinState.coins.length > 0){
            //we have data, no need to load from remote api
            console.log("data aviable");
            console.log("total coins: "+store.getState().CoinState.coins.length);
        } else {
            //we dont have a data, let's load and add each data to our redux...
            console.log("no data");
            axios.get("https://api.coingecko.com/api/v3/coins")
            .then(response => {
                //console.log(response.data);
                response.data.map((item: any)=>{
                    const myData = new CoinData();
                    myData.id = item.id;
                    myData.symbol = item.symbol;
                    myData.image = item.image.thumb;
                    myData.rateILS = item.market_data.current_price.ils;
                    myData.rateUSD = item.market_data.current_price.usd;
                    console.log(myData);
                    store.dispatch(coinAddAction(JSON.stringify(myData)));   
                                 
                })
            })
            .catch(err=>console.log(err));
        }
    },[])

    return (
        <div className="Coins">
			<h1>Coins</h1><hr/>

        </div>
    );
}

export default Coins;
