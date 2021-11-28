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
          <Route path="/artist" element={<ArtistDetails />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>
      <Footer />;
    </Router>
  );
}
