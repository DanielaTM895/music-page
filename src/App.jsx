import { NavBar } from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArtistDetails from "./pages/ArtistDetails";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";
export function App() {
  return (
    <Router>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/music-page/artist" element={<ArtistDetails />} />
          <Route path="/music-page" element={<LandingPage />} />
        </Routes>
      </main>
      <Footer />;
    </Router>
  );
}
