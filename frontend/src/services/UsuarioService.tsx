import api from "./apiBack";

export function obtem(url: string) {
  return api.get(url);
}

export function insere(url: string, objeto: any) {
  return api.post(url, objeto);
}

export function altera(url: string, objeto: any) {
  return api.put(url, objeto);
}

export function exclui(url: string) {
  return api.delete(url);
}
