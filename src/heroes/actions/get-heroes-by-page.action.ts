import { heroApi } from "../api/api.heroes";
import type { HeroesResponse } from "../interfaces/get-heroes.response";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getHeroesByPAge = async (
  page: number,
  limit: number,
  category:string,
): Promise<HeroesResponse> => {
  if (isNaN(page)) {
    page = 1;
  }

  if (isNaN(limit)) {
    limit = 6;
  }

  const { data } = await heroApi.get<HeroesResponse>(`/`, {
    params: {
      limit: limit,
      offset: (page - 1) * limit,
      category: category
    },
  });

  const heroes = data.heroes.map((heroe) => ({
    ...heroe,
    image: `${BASE_URL}/images/${heroe.image}`,
  }));

  return {
    ...data,
    heroes: heroes,
  };
};
