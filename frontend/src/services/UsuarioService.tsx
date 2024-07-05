import api from "./apiBack";
import { IUser } from "../models/UserModel";

export function obtem(url: string) {
  return api.get(url);
}

export function insere(objeto: IUser) {
  return api.post("users", objeto);
}

export function altera(objeto: IUser) {
  return api.put("users", objeto);
}

export function exclui(url: string) {
  return api.delete(url);
}
