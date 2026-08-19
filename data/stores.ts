import type { Store } from "@/types";

export const stores: Store[] = [
  {
    id: "sorocaba",
    name: "X1 Sorocaba",
    city: "Sorocaba",
    state: "SP",
    address: "PREENCHER_ENDERECO",
    phone: "(15) 99732-6538",
    whatsapp: "5515997326538",
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
    phone: "(15) 99732-6538",
    whatsapp: "5515997326538",
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
    phone: "(15) 99732-6538",
    whatsapp: "5515997326538",
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
