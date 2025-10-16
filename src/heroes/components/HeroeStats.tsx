import { Badge } from "@/components/ui/badge";
import { Heart, Trophy, Users } from "lucide-react";
import { HeroeStatCard } from "./HeroeStatCard";

export const HeroeStats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <HeroeStatCard
        title="Total Characters"
        icon={<Users className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-2xl font-bold">16</div>
        <div className="flex gap-1 mt-2">
          <Badge variant="secondary" className="text-xs">
            12 Heroes
          </Badge>
          <Badge variant="destructive" className="text-xs">
            2 Villains
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
        <div className="text-lg font-bold">Superman</div>
        <p className="text-xs text-muted-foreground">Strength: 10/10</p>
      </HeroeStatCard>

      <HeroeStatCard
        title="Smartest"
        icon={<Trophy className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-lg font-bold">Batman</div>
        <p className="text-xs text-muted-foreground">Intelligence: 10/10</p>
      </HeroeStatCard>
    </div>
  );
};
