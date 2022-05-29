import { $api } from ".";

export const getAllGeo = async () => {
  return $api.post("/vacancy/geo-state");
};
