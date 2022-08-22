//id , symbol , image, rate(ils), rate(usd)

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
export enum CoinActionType{
    CoinUpdate = "CoinUpdate",
    CoinAdd = "CoinAdd",
    CoinDelete = "CoinDelete",
    CoinDownload = "CoinDownload",
    CoinClear = "CoinClear",
}

export interface CoinAction{
    type:CoinActionType;
    payload?:any;
}

export function coinAddAction(newCoin:CoinData):CoinAction{
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


//reducer (redux hook, will be called by redux only, not us)
export function coinReducer(currentState:CoinState = new CoinState,action:CoinAction):CoinState{
    const newState = {...currentState};

    switch(action.type){
        case CoinActionType.CoinAdd:

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