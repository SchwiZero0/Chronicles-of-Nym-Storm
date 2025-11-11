import { motion } from "framer-motion";
import sessions from "../data/sessions.json";

export default function Sessions() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl text-[#d4b076] font-bold text-center mb-8">
        Campaign Chronicles
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {sessions.map((s) => (
          <motion.div
            key={s.session}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 bg-[#2a1d12]/80 border border-[#3b2a1a] rounded-2xl shadow-md"
          >
            <h3 className="text-2xl text-[#d4b076] font-semibold mb-2">
              Session {s.session}: {s.title}
            </h3>
            <p className="text-sm text-[#cbb69a] italic mb-3">{s.date}</p>
            <p className="text-base text-[#f1e0c6]/90 leading-relaxed mb-4">
              {s.summary}
            </p>
            <p className="text-sm text-[#bfa88c]">
              <strong>Characters:</strong> {s.characters.join(", ")}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}