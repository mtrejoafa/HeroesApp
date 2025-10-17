import { heroApi } from "../api/api.heroes"
import type { HeroesResponse } from "../interfaces/get-heroes.response";


export const getHeroesByPAge = async (): Promise<HeroesResponse> => {
    const { data } = await heroApi.get<HeroesResponse>(`/`);
    
    const BASE_URL = import.meta.env.VITE_API_URL;

    const heroes = data.heroes.map(heroe => ({
        ...heroe,
        image : `${BASE_URL}/images/${heroe.image}`
    }))
    
    return {
        ...data,
        heroes: heroes
    };
}