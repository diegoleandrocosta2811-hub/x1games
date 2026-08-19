import type { Store } from "@/types";

export const stores: Store[] = [
  {
    id: "sorocaba",
    name: "X1 Sorocaba",
    city: "Sorocaba",
    state: "SP",
    address: "PREENCHER_ENDERECO",
    phone: "PREENCHER_TELEFONE",
    whatsapp: "PREENCHER_WHATSAPP",
    hours: "PREENCHER_HORARIO",
    googleMapsUrl: "PREENCHER_GOOGLE_MAPS_URL",
    latitude: null,
    longitude: null,
  },
  {
    id: "tatui-1",
    name: "X1 Tatuí Unidade 1",
    city: "Tatuí",
    state: "SP",
    address: "PREENCHER_ENDERECO",
    phone: "PREENCHER_TELEFONE",
    whatsapp: "PREENCHER_WHATSAPP",
    hours: "PREENCHER_HORARIO",
    googleMapsUrl: "PREENCHER_GOOGLE_MAPS_URL",
    latitude: null,
    longitude: null,
  },
  {
    id: "tatui-2",
    name: "X1 Tatuí Unidade 2",
    city: "Tatuí",
    state: "SP",
    address: "PREENCHER_ENDERECO",
    phone: "PREENCHER_TELEFONE",
    whatsapp: "PREENCHER_WHATSAPP",
    hours: "PREENCHER_HORARIO",
    googleMapsUrl: "PREENCHER_GOOGLE_MAPS_URL",
    latitude: null,
    longitude: null,
  },
];

export function getStoresByCity(city: string): Store[] {
  return stores.filter(
    (store) => store.city.toLowerCase() === city.toLowerCase(),
  );
}
