
import type { HeroesResponse } from "../interfaces/get-heroes.response";
import type { Hero } from "../interfaces/heroe.interface";
import { HeroeGridCard } from "./HeroeGridCard";

export const HeroeGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      <HeroeGridCard name="Sup" />
    </div>
  );
};
