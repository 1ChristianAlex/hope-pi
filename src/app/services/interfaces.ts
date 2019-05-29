export interface User {
  name?: string;
  email?: string;
  pass?: string;
  uid?: string;
  photoURL?: string;
  displayName?: string;
  bornDate?: string;
  lastname?: string;
  btnConfig?: boolean;
}
export interface newUser {
  name?: string;
  email?: string;
  emailC?: string;
  pass?: string;
  passC?: string;
  bornDate?: string;
  lastname?: string;
  btnConfig?: boolean;
}
export interface Token {
  access_token: string;
  expires_in: number;
  scope: string;
  token_type: string;
}
export interface storageToken {
  isOn: boolean;
  token: Token;
}
export interface docFile {
  name: string;
  size: string | number;
  path: string;
  contentType: string;
  img: string | boolean;
}
export interface Post {
  content?: string;
  ref?: string;
  subtitle?: string;
  thumb?: string;
  title?: string;
}
export interface News {
  posts: Array<Post>;
}
export interface userCaseForm {
  feeling?: string;
  emotion?: string[];
  situation?: string;
  thoughts?: string;
  action?: string;
}
