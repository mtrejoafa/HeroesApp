import type { Hero } from "../interfaces/heroe.interface";
import { HeroeGridCard } from "./HeroeGridCard";

interface Props {
  heroes: Hero[];
}

export const HeroeGrid = ({ heroes }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      {heroes.map((heroe) => (
        <HeroeGridCard key={heroe.id} {...heroe} />
      ))}
    </div>
  );
};
