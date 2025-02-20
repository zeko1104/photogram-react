import Posts from "../components/Posts";
import StorySlider from "../components/StorySlider";
import SuggestMenu from "../components/SuggestMenu";
import DashboardMenu from "../layouts/DashboardMenu";

const HomePage = () => {
  return (
    <div className="flex">
      {/* Sol Sidebar */}
      <DashboardMenu />

      {/* Əsas Məzmun */}
      <div className="flex-1 min-h-screen ml-64 mr-80 p-4 overflow-y-auto">
        <StorySlider />

        {/* Postlar burada göstərilir */}
        <div className="mt-4 space-y-4">
          <Posts />
          <Posts />
          <Posts />
        </div>
      </div>

      {/* Sağ Sidebar */}
      <div className="">
        <SuggestMenu />
      </div>
    </div>
  );
};

export default HomePage;
