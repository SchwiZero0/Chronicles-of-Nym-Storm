import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Users, Map, Landmark, Gem } from "lucide-react";
import Sessions from "./pages/Sessions.jsx";
import ChapterList from "./pages/ChapterList.jsx";
import Chapter from "./pages/Chapter.jsx";



export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-[#1a130d] text-[#f1e0c6] font-serif bg-[url('https://www.transparenttextures.com/patterns/old-wall.png')]">
        <header className="border-b border-[#3b2a1a] bg-[#23160e]/90 shadow-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
            <h1 className="text-2xl md:text-3xl font-bold tracking-widest text-[#d4b076]">
              Chronicles of Nym Storm
            </h1>
            <button
              className="md:hidden text-[#d4b076]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
            <nav
              className={`md:flex md:space-x-8 ${menuOpen ? "block" : "hidden"} md:block text-[#f1e0c6]`}
            >
              <Link to="/" className="hover:text-[#d4b076] transition">Home</Link>
              <Link to="/chapters" className="hover:text-[#d4b076] transition">Chapters</Link>
              <Link to="/characters" className="hover:text-[#d4b076] transition">Characters</Link>
              <Link to="/npcs" className="hover:text-[#d4b076] transition">NPCs</Link>
              <Link to="/places" className="hover:text-[#d4b076] transition">Places</Link>
              <Link to="/factions" className="hover:text-[#d4b076] transition">Factions</Link>
              <Link to="/artifacts" className="hover:text-[#d4b076] transition">Artifacts</Link>
            </nav>
          </div>
        </header>

        <main className="max-w-6xl mx-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sessions" element={<Sessions title="Test" icon={<BookOpen />} />} />
            <Route path="/characters" element={<Section title="Characters" icon={<Users />} />} />
            <Route path="/npcs" element={<Section title="NPCs" icon={<Users />} />} />
            <Route path="/places" element={<Section title="Places" icon={<Map />} />} />
            <Route path="/factions" element={<Section title="Factions" icon={<Landmark />} />} />
            <Route path="/artifacts" element={<Section title="Artifacts" icon={<Gem />} />} />
            <Route path="/chapters" element={<ChapterList />} />
            <Route path="/chapters/:id" element={<Chapter title="Chapters" icon={<BookOpen />}/>} />
          </Routes>
        </main>

        <footer className="text-center text-sm py-4 border-t border-[#3b2a1a] mt-10 text-[#bfa88c]">
          © {new Date().getFullYear()} Chronicles of Nym Storm — All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-6"
    >
      <h2 className="text-4xl mb-4 text-[#d4b076] font-bold tracking-wide">
        Chronicles of Nym Storm
      </h2>
      <p className="text-lg max-w-3xl mx-auto leading-relaxed text-[#f1e0c6]/90">
        The story of <span className="italic text-[#d4b076]">Nym Storm</span> follows a band of unlikely adventurers 
        as they traverse Faerûn during the rise of the Cult of the Dragon.  
        From the burning walls of Greenest to the shadowed lairs of dragons,  
        these chronicles preserve every trial, triumph, and tragedy.
      </p>
      <p className="text-[#cbb69a]">
        Begin reading from <Link to="/chapters/1" className="font-semibold text-[#d4b076]">Chapter One: Greenest in Flames</Link>.
      </p>
      <a
        href="/chapters"
        className="inline-block mt-6 px-6 py-3 bg-[#3b2a1a] border border-[#d4b076] text-[#d4b076] rounded-xl shadow-md hover:bg-[#d4b076] hover:text-[#1a130d] transition"
      >
        View Campaign Chapters
      </a>
    </motion.div>
  );
}

function Section({ title, icon }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
      <div className="flex justify-center items-center space-x-3 mb-6">
        {icon}
        <h2 className="text-3xl text-[#d4b076] font-bold tracking-wide">{title}</h2>
      </div>
      <p className="text-lg text-[#f1e0c6]/90">
        This section will soon be filled with detailed lore extracted from the campaign records.
      </p>
    </motion.div>
  );
}