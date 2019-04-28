export interface User{
    name?:string,
    email?:string,
    pass?:string,
    uid?: string,
    photoURL?: string,
    displayName?: string,
    bornDate?:string,
    lastname?:string,
    btnConfig?:boolean
}
export interface newUser{
    name?:string,
    email?:string,
    emailC?:string,
    pass?:string,
    passC?:string,
    bornDate?:string,
    lastname?:string,
    btnConfig?:boolean
}
export interface Token{
    access_token:string,
    expires_in:number,
    scope:string,
    token_type:string,
}
export interface storageToken{
    isOn:boolean,
    token: Token
}