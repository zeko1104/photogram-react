import { useTheme } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react"; 

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800">
      {theme === "dark" ? <Sun className="text-yellow-500" /> : <Moon className="text-gray-900" />}
    </button>
  );
};

export default DarkModeToggle;
