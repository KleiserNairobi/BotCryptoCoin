import api from "./apiBack";
import { ILogin } from "../models/LoginModel";

export function autenticar(data: ILogin) {
  return api.post("auth/login", data);
}
