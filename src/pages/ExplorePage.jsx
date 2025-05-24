import DashboardMenu from "../layouts/DashboardMenu";
import Feed from "../components/Feed";

const ExplorePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center dark:bg-neutral-950 dark:text-white  p-4">
      <DashboardMenu />
      <Feed />
    </div>
  );
};

export default ExplorePage;
