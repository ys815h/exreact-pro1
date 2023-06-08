import Domain from "./pages/Domain/Domain";
import FindHelperPage from "./pages/FindHelper/FindHelperPage";
import HelperDetailProfilePage from "./pages/HelperDetailProfile/HelperDetailProfilePage";
import HelperProfilePage from "./pages/HelperProfile/HelperProfilePage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Domain />} />
      <Route path="/findHelper" element={<FindHelperPage />} />
      <Route path="/helperProfilePage" element={<HelperProfilePage />} />
      <Route
        path="/HelperDetailProfilePage"
        element={<HelperDetailProfilePage />}
      />
    </Routes>
  );
}

export default App;
