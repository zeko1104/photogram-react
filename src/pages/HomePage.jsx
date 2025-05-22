import Posts from "../components/Posts";
import StorySlider from "../components/StorySlider";
import SuggestMenu from "../components/SuggestMenu";
import DashboardMenu from "../layouts/DashboardMenu";

const HomePage = () => {
  return (
    <div className="dark:bg-neutral-950 dark:text-white flex flex-col sm:flex-row">
      
      <DashboardMenu />

      {/* Story*/}
      <div className="flex-1 sm:ml-64 sm:mr-80 p-4 overflow-y-auto">
        
        <StorySlider />

        {/* Postlar */}
        <div className="space-y-4 mt-4">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <Posts key={index} />
          ))}
        </div>
      </div>

      
      <div className="hidden sm:block">
        <SuggestMenu />
      </div>
    </div>
  );
};

export default HomePage;
