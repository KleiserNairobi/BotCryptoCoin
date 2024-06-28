import api from "./apiBack";
import { ILogin } from "../models/LoginModel";

export function logar(data: ILogin) {
  return api.post("auth/login", data);
}
