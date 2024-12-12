import { Routes, Route } from "react-router";
import MarketPlace from "./pages/MarketPlace.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AccountSettings from "./pages/Account-settings.jsx";
import PetDetails from "./pages/PetDetails.jsx";
import ProtectedLayout from "./layouts/ProtectedLayout.jsx";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        {/*Example of Dynamic Page Routing */}
        <Route path="marketplace">
          <Route index element={<MarketPlace />} />
          {/*Example of Dynamic Page Routing */}
          <Route path=":pet_id" element={<PetDetails />} />
        </Route>
        {/*Example of Nested Page Routing */}{" "}
        {/*Adding the protected layout causes any login the protected layout to apply on the child(dashboard e.g login access) */}
        <Route path="dashboard" element={<ProtectedLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="settings" element={<AccountSettings />} />
        </Route>
      </Route>

      {/*Handle Every Error from user navigation */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
