import { Heart, ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroeStats } from "@/heroes/components/HeroeStats";
import { HeroeGrid } from "@/heroes/components/HeroeGrid";
import { useEffect, useState } from "react";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { getHeroesByPAge } from "@/heroes/actions/get-heroes-by-page.action";

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "favorites" | "heroes" | "villains"
    >("favorites");
  
  useEffect(() => {
    getHeroesByPAge().then(heroes => {
      console.log({heroes});
    });
  }, [])
  

  return (
    <>
      <>
        <CustomJumbotron
          tltle="Superheroes Universe"
          description="Discover, explore and manage heroes and villiansDiscover, explore, and manage heroes and villains."
        />

        {/* <CustomBreadcrumbs currentPage="Superheores"/> */}

        <HeroeStats />

        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger onClick={() => setActiveTab("all")} value="all">
              All Characters (16)
            </TabsTrigger>
            <TabsTrigger
              onClick={() => setActiveTab("favorites")}
              value="favorites"
              className="flex items-center gap-2"
            >
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger onClick={() => setActiveTab("heroes")} value="heroes">
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger
              onClick={() => setActiveTab("villains")}
              value="villains"
            >
              Villains (2)
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <h1>All Characters</h1>
            <HeroeGrid />
          </TabsContent>
          <TabsContent value="favorites">
            <h1>Favorites</h1>
            <HeroeGrid />
          </TabsContent>
          <TabsContent value="heroes">
            <h1>Heroes</h1>
            <HeroeGrid />
          </TabsContent>
          <TabsContent value="villains">
            <h1>Villains</h1>
            <HeroeGrid />
          </TabsContent>
        </Tabs>
        
        <CustomPagination totalPages={8}/>
      </>
    </>
  );
};
