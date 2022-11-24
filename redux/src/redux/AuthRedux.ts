//App State - which info will be common to all components
export enum UserType {"admin","user","guest","company","adv"}

export class AuthState{
    public userName:string="";
    public userRole:UserType=UserType.guest;
}

//action type - which action i will allow
export enum AuthActionType{
    UserLogin = "UserLogin",
    UserLogout = "UserLogout",
    //UserRegister = "UserRegister",
}

//action -> actionType, payload
export interface AuthAction{
    type:AuthActionType,
    payload?:any;
}

//action creators -> function that will invoke reducer
export function UserLoginAction(user:AuthState):AuthAction {
    return {type: AuthActionType.UserLogin, payload:user}
}

export function UserLogoutAction():AuthAction {
    return {type: AuthActionType.UserLogout, payload:null}
}

//reducer -> function that will make the changes
export function authReducer(currentState:AuthState = new AuthState, action:AuthAction):AuthState{
    const newState = {...currentState}; //spread operator

    switch(action.type){
        case AuthActionType.UserLogin:
            newState.userName = action.payload.userName;
            newState.userRole = action.payload.userRole;
        break;

        case AuthActionType.UserLogout:
            newState.userName="";
            newState.userRole=UserType.guest;
        break;
    }

    return newState;
}
