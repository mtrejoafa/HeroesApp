import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroeStats } from "@/heroes/components/HeroeStats";
import { HeroeGrid } from "@/heroes/components/HeroeGrid";
import { useMemo } from "react";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { useSearchParams } from "react-router";
import { useHeroSummary } from "@/heroes/hooks/useHeroSummary";
import { usePaginatedHero } from "@/heroes/hooks/usePaginatedHero";

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeTab = searchParams.get("tab") ?? "all";
  const page = searchParams.get("page") ?? "1";
  const limit = searchParams.get("limit") ?? "6";
  const category = searchParams.get('category') ?? "all";

  const selectedTab = useMemo(() => {
    const validTabs = ["all", "favorites", "heroes", "villains"];
    return validTabs.includes(activeTab) ? activeTab : "all";
  }, [activeTab]);

  const { data: heroesResponse } = usePaginatedHero(
    Number(page),
    Number(limit),
    category
  );

  const { data: summary } = useHeroSummary();

  return (
    <>
      <>
        <CustomJumbotron
          tltle="Superheroes Universe"
          description="Discover, explore and manage heroes and villiansDiscover, explore, and manage heroes and villains."
        />

        {/* <CustomBreadcrumbs currentPage="Superheores"/> */}

        <HeroeStats />

        <Tabs value={selectedTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              value="all"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set('tab', 'all');
                  prev.set('category', 'all');
                  prev.set('page', '1');
                  return prev;
                })
              }
            >
              All Characters ({summary?.totalHeroes})
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              className="flex items-center gap-2"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set('tab', 'favorites');
                  return prev;
                })
              }
            >
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger
              value="heroes"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set('tab', 'heroes');
                  prev.set('category', 'hero');
                  prev.set('page', '1');
                  return prev;
                })
              }
            >
              Heroes ({summary?.heroCount})
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set('tab', 'villains');
                  prev.set('category', 'villain');
                  prev.set('page', '1');
                  return prev;
                })
              }
            >
              Villains ({summary?.villainCount})
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <h1>All Characters</h1>
            <HeroeGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
          <TabsContent value="favorites">
            <h1>Favorites</h1>
            <HeroeGrid heroes={[]} />
          </TabsContent>
          <TabsContent value="heroes">
            <h1>Heroes</h1>
            <HeroeGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
          <TabsContent value="villains">
            <h1>Villains</h1>
            <HeroeGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
        </Tabs>

        <CustomPagination totalPages={heroesResponse?.pages ?? 1} />
      </>
    </>
  );
};
