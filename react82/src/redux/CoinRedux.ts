//id , symbol , image, rate(ils), rate(usd)

//step I - which data we need (data structure)
export class CoinData{
    id:string;
    symbol:string;
    image:string
    rateILS:number;
    rateUSD:number;
}

export class CoinState{
    public coins:CoinData[] = [];
}

//actions : update, add, delete, download???
//Step II - what is the methods that we should implement
export enum CoinActionType{
    CoinUpdate = "CoinUpdate",
    CoinAdd = "CoinAdd",
    CoinDelete = "CoinDelete",
    CoinDownload = "CoinDownload",
    CoinClear = "CoinClear",
}

//Step III - data structure of our redux state
export interface CoinAction{
    type:CoinActionType;
    payload?:any;
}

//Step IV - our functions
export function coinAddAction(newCoin:String):CoinAction{
    return {type: CoinActionType.CoinAdd, payload:newCoin}
}

export function coinUpdateAction(newCoin:CoinData):CoinAction{
    return {type: CoinActionType.CoinUpdate, payload:newCoin}
}

export function coinClearAction():CoinAction{
    return {type:CoinActionType.CoinClear}
}

export function coinDeleteAction(coinId:string){
    return {type:CoinActionType.CoinDelete, payload:coinId}
}

//snir
//Step V - our reducer function
//reducer (redux hook, will be called by redux only, not us)
export function CoinReducer(currentState:CoinState = new CoinState,action:CoinAction):CoinState{
    const newState = {...currentState};
    //for fix the redux bug...
    let coins = newState.coins.map(value => Object.assign({}, value));
    switch(action.type){
        case CoinActionType.CoinAdd:
            coins.push(JSON.parse(action.payload));
            newState.coins=coins;
            break;

        case CoinActionType.CoinDelete:

            break;

        case CoinActionType.CoinUpdate:

            break;

        case CoinActionType.CoinDownload:

            break;

        case CoinActionType.CoinClear:
            newState.coins = [];
        break;
    }

    return newState;
}