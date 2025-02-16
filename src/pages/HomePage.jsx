import StorySlider from "../components/StorySlider";
import SuggestMenu from "../components/SuggestMenu";
import DashboardMenu from "../layouts/DashboardMenu";

const HomePage = () => {
  return (
    <div className="flex">
      {/* Sol Sidebar */}
      <DashboardMenu />

      {/* Əsas Məzmun */}
      <div className="flex-1 min-h-screen ml-64 mr-80 p-4">
        <StorySlider />
      </div>

      {/* Sağ Sidebar */}
      <div className="">
        <SuggestMenu />
      </div>
    </div>
  );
};

export default HomePage;
