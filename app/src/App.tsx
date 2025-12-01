import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./layouts/NavigationBar/NavigationBar";
import Footer from "./layouts/Footer/Footer";
import HabbitsPage from "./pages/HabbitsPage/HabbitsPage";
import HabbitPage from "./pages/HabbitPage/HabbitPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import ArchivedHabbitsPage from "./pages/ArchivedHabbitsPage/ArchivedHabbitsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <NavigationBar />
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<HabbitsPage />} />
          <Route path="/habbit" element={<HabbitPage />} />
          <Route path="/archived-habbits" element={<ArchivedHabbitsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/about" element={<SettingsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<RegisterPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
