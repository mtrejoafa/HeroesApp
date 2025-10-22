import { Badge } from "@/components/ui/badge";
import { Heart, Trophy, Users } from "lucide-react";
import { HeroeStatCard } from "./HeroeStatCard";
import { useHeroSummary } from "../hooks/useHeroSummary";

export const HeroeStats = () => {
  const { data: summary } = useHeroSummary();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <HeroeStatCard
        title="Total Characters"
        icon={<Users className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-2xl font-bold">{summary?.totalHeroes}</div>
        <div className="flex gap-1 mt-2">
          <Badge variant="secondary" className="text-xs">
            {summary?.heroCount}
          </Badge>
          <Badge variant="destructive" className="text-xs">
            {summary?.villainCount}
          </Badge>
        </div>
      </HeroeStatCard>

      <HeroeStatCard
        title="Favorites"
        icon={<Heart className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-2xl font-bold text-red-600">3</div>
        <p className="text-xs text-muted-foreground">18.8% of total</p>
      </HeroeStatCard>

      <HeroeStatCard
        title="Strongest"
        icon={<Heart className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-lg font-bold">{summary?.strongestHero.alias}</div>
        <p className="text-xs text-muted-foreground">Strength: 10/{ summary?.strongestHero.strength }</p>
      </HeroeStatCard>

      <HeroeStatCard
        title="Smartest"
        icon={<Trophy className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-lg font-bold">{summary?.smartestHero.alias}</div>
        <p className="text-xs text-muted-foreground">Intelligence: 10/{summary?.smartestHero.intelligence}</p>
      </HeroeStatCard>
    </div>
  );
};
