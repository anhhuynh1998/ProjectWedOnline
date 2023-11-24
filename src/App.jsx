import { Route, Routes } from "react-router-dom";
import Admin from "./components/admin/layouts/Admin";
import HomeScreen from "./pages/home/HomeScreen";


function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/*" element={<HomeScreen />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
