import { heroApi } from "../api/api.heroes"


export const getHeroesByPAge = async () => {
    const { data } = await heroApi.get(`/`);
    return data;
}