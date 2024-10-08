import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { Etherspot, Home, Wagmi } from "@/pages";
import IncidentPage from "./pages/incidents";

function App() {
  return (
    <Router>
      <main className="min-h-screen flex flex-col justify-between">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aa" element={<Etherspot />} />
          <Route path="/wagmi" element={<Wagmi />} />
          <Route path="/report" element={<IncidentPage/>} />
        </Routes>
        
        <Toaster />
      </main>
    </Router>
  );
}

export default App;
