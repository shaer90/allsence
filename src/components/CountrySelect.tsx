import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiChevronDown, FiSearch } from 'react-icons/fi';
import { COUNTRIES } from '../data/countries';

interface Props {
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  placeholder?: string;
}

export default function CountrySelect({ value, onChange, required, placeholder = 'اختر الدولة...' }: Props) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  const normalize = (s: string) =>
    s.replace(/[أإآٱ]/g, 'ا').replace(/[ةه]/g, 'ه').replace(/[يى]/g, 'ي').replace(/\s+/g, ' ').trim();

  const filtered = search
    ? COUNTRIES.filter((c) => normalize(c).includes(normalize(search)))
    : COUNTRIES;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => { setOpen((o) => !o); setSearch(''); }}
        className={`input-field w-full flex items-center justify-between text-right ${!value ? 'text-gray-500' : 'text-white'}`}
      >
        <FiChevronDown size={14} className={`text-gray-400 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
        <span>{value || placeholder}</span>
      </button>
      <input tabIndex={-1} required={required} value={value} onChange={() => {}} className="sr-only" />
      <AnimatePresence>
        {open && (
          <>
            <div className="fixed inset-0 z-30" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full mt-1 left-0 right-0 z-40 border border-white/15 rounded-2xl overflow-hidden shadow-2xl"
              style={{ background: '#1a1025' }}
            >
              <div className="flex items-center gap-2 px-3 py-2.5 border-b border-white/10" style={{ background: '#1a1025' }}>
                <FiSearch size={14} className="text-gray-400 flex-shrink-0" />
                <input
                  autoFocus
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="ابحث عن دولة..."
                  className="bg-transparent text-white text-sm outline-none flex-1 placeholder-gray-500"
                />
              </div>
              <div className="max-h-48 overflow-y-auto" style={{ background: '#1a1025' }}>
                {filtered.length === 0 ? (
                  <div className="text-center text-gray-500 text-sm py-4">لا توجد نتائج</div>
                ) : (
                  filtered.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => { onChange(c); setOpen(false); }}
                      className={`w-full text-right px-4 py-2.5 text-sm transition-colors hover:bg-white/5 ${value === c ? 'text-pink-400 font-semibold' : 'text-gray-300'}`}
                    >
                      {c}
                    </button>
                  ))
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
