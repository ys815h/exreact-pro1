import Domain from "./pages/Domain/Domain";
import FindHelperPage from "./pages/FindHelper/FindHelperPage";
import HelperDetailProfile from "./pages/HelperDetailProfile/HelperDetailProfile";
import HelperProfilePage from "./pages/HelperProfile/HelperProfilePage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Domain />} />
      <Route path="/findHelper" element={<FindHelperPage />} />
      <Route path="/helperProfilePage/1" element={<HelperProfilePage />} />
      <Route
        path="/helperDetailProfile"
        // path="/helperDetailProfile/:id"
        element={<HelperDetailProfile />}
      />
    </Routes>
  );
}

export default App;
