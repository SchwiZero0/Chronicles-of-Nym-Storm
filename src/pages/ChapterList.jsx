import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const chapters = [
  { id: 1, title: "Chapter 01 — Greenest in Flames", summary: "The beginning of the journey — the caravan to Greenest and the siege that follows." },
  { id: 2, title: "Chapter 02 — The Cultist Encampment", summary: "Infiltration into the cult’s camp and discovery of the dragon eggs." },
  { id: 3, title: "Chapter 03 — The Dragon Hatchery", summary: "The group delves into the dragon hatchery, uncovering horrors within its depths."},
  { id: 4, title: "Chapter 04 — On The Road", summary: "The group begins their journey to Berdusk, joined by Lia and Hozorlig."},
  { id: 5, title: "Chapter 05 — The Wood of Sharp Teeth", summary: "In Hornhollow, the group meets Olin, who warns of hooded men entering the Sharp Teeth Woods."},
  { id: 6, title: "Chapter 06 — On The Road Again", summary: "The group’s sudden arrival in Baldur’s Gate brings them into contact with Eva and the Zhentarim, who coerce them into collaboration."},
  { id: 7, title: "Chapter 07 — On The Road Again (2)", summary: "The group begins their calm voyage to Waterdeep. Through Sendings, they reach out to their allies, seeking support and evidence against the Cult of the Dragon."},

  // Mais serão adicionados aqui
];

export default function ChapterList() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h2 className="text-3xl text-[#d4b076] font-bold text-center mb-6">Campaign Chapters</h2>
      {chapters.map((ch) => (
        <motion.div
          key={ch.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 bg-[#2a1d12]/80 border border-[#3b2a1a] rounded-2xl shadow-md hover:bg-[#3b2615]/80 transition"
        >
          <h3 className="text-2xl text-[#d4b076] mb-2 font-semibold">{ch.title}</h3>
          <p className="text-[#f1e0c6]/90 mb-3">{ch.summary}</p>
          <Link to={`/chapters/${ch.id}`} className="text-[#d4b076] underline hover:text-[#fce6b5]">
            View Chapter
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
