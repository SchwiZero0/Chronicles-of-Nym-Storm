import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Chapter() {
  const { id } = useParams();
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    import(`../data/sessions_ch${id}.json`)
      .then((mod) => setSessions(mod.default))
      .catch(() => setSessions([]));
  }, [id]);

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <h2 className="text-3xl text-[#d4b076] font-bold text-center mb-8">
        Chapter {id}
      </h2>

      {sessions.length === 0 && (
        <p className="text-center text-[#bfa88c]">No data available for this chapter yet.</p>
      )}

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
            <p className="text-base text-[#f1e0c6]/90 leading-relaxed mb-4">{s.summary}</p>
            <details className="text-sm text-[#bfa88c]">
              <summary className="cursor-pointer text-[#d4b076] hover:text-[#fce6b5] mb-2">
                Read full log
              </summary>
              <p className="mt-2 whitespace-pre-line">{s.full_text}</p>
            </details>
          </motion.div>
        ))}
      </div>
    </div>
  );
}