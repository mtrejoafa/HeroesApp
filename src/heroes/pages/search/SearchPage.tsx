import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroeStats } from "@/heroes/components/HeroeStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        tltle="Search Heroes"
        description="Discover, explore and manage heroes and villiansDiscover, explore, and manage heroes and villains."
      />
      {/* <CustomBreadcrumbs currentPage="Heroe"/> */}
      <HeroeStats />
      <SearchControls />
    </>
  );
};

export default SearchPage;
