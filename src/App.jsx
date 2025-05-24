import { BrowserRouter } from "react-router-dom";
import AppRoute from "./routes/index.jsx";

function App() {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
}

export default App;
