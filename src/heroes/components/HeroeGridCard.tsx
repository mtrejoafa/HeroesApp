import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, Eye, Gauge, Heart, Shield, Zap } from "lucide-react";
import { useNavigate } from "react-router";

interface Props {
  name: string;
  id: string;
  slug: string;
  alias: string;
  powers: string[];
  description: string;
  strength: number;
  intelligence: number;
  speed: number;
  durability: number;
  team: string;
  image: string;
  firstAppearance: string;
  status: string;
  category: string;
  universe: string;
}

export const HeroeGridCard = ({ name, alias, category, description, durability, firstAppearance, id, image, intelligence, powers, slug, speed,status, strength, team, universe }: Props) => {
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/heroes/${slug}`);
  };
  
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50">
      <div className="relative h-64">
        <img
          src={image}
          alt={name}
          className="object-cover transition-all duration-500 group-hover:scale-110 absolute top-[-30px] w-full h-[410px]"
          onClick={handleClick}
        />

        {/* Status indicator */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <Badge
            variant="secondary"
            className="text-xs bg-white/90 text-gray-700"
          >
            {status}
          </Badge>
        </div>

        {/* Universe badge */}
        <Badge className="absolute top-3 right-3 text-xs bg-blue-600 text-white">
          {universe}
        </Badge>

        {/* Favorite button */}
        <Button
          size="sm"
          variant="ghost"
          className="absolute bottom-3 right-3 bg-white/90 hover:bg-white"
        >
          <Heart className="h-4 w-4 fill-red-500 text-red-500" />
        </Button>

        {/* View details button */}
        <Button
          size="sm"
          variant="ghost"
          className="absolute bottom-3 left-3 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Eye className="h-4 w-4 text-gray-600" />
        </Button>
      </div>

      <CardHeader className="py-3 z-10 bg-gray-100/50 backdrop-blur-sm relative top-1 group-hover:top-[-10px] transition-all duration-300">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h3 className="font-bold text-lg leading-tight">{alias}</h3>
            <p className="text-sm text-gray-600">{name}</p>
          </div>
          <Badge className="text-xs bg-green-100 text-green-800 border-green-200">
            {category}
          </Badge>
        </div>
        <Badge variant="outline" className="w-fit text-xs">
          {team}
        </Badge>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-gray-600 line-clamp-2">
          {description}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <Zap className="h-3 w-3 text-orange-500" />
              <span className="text-xs font-medium">Strength</span>
            </div>
            <Progress value={strength * 10} className="h-2" activeColor="bg-orange-500" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <Brain className="h-3 w-3 text-blue-500" />
              <span className="text-xs font-medium">Intelligence</span>
            </div>
            <Progress value={intelligence * 10} className="h-2" activeColor="bg-blue-500" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <Gauge className="h-3 w-3 text-green-500" />
              <span className="text-xs font-medium">Speed</span>
            </div>
            <Progress value={speed * 10} className="h-2" activeColor="bg-green-500" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <Shield className="h-3 w-3 text-purple-500" />
              <span className="text-xs font-medium">Durability</span>
            </div>
            <Progress value={durability * 10} className="h-2" activeColor="bg-purple-500" />
          </div>
        </div>

        {/* Powers */}
        <div className="space-y-2">
          <h4 className="font-medium text-sm">Powers:</h4>
          <div className="flex flex-wrap gap-1">
            {powers.slice(0, 2).map((power) => (
              <Badge key={power} variant="outline" className="text-xs">
                {power}
              </Badge>
            ))}
            {powers.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{powers.length - 2} more
              </Badge>
            )}
          </div>
        </div>

        <div className="text-xs text-gray-500 pt-2 border-t">
          First appeared: {firstAppearance}
        </div>
      </CardContent>
    </Card>
  );
};
