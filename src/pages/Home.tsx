import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { FiShield, FiDroplet, FiStar, FiUsers, FiArrowLeft, FiCheck } from 'react-icons/fi';

// ─── Product Data ────────────────────────────────────────────────────────────
const products = [
  {
    id: 1,
    name: 'Daily Pads',
    nameAr: 'فوط يومية',
    desc: 'حماية يومية ناعمة — 60 فوطة يومية برائحة الصابون',
    count: '60',
    color: '#E91E8C',
    bg: 'from-pink-900/60 to-pink-950/80',
    border: 'border-pink-500/30',
    glow: 'rgba(233,30,140,0.3)',
    badge: 'الأكثر مبيعاً',
  },
  {
    id: 2,
    name: 'Ultra Night',
    nameAr: 'فوط ليلية ألترا',
    desc: 'حماية ليلية فائقة — تقنية Liquid Lock GEL اليابانية المتقدمة',
    count: '7',
    color: '#1565C0',
    bg: 'from-blue-900/60 to-blue-950/80',
    border: 'border-blue-500/30',
    glow: 'rgba(21,101,192,0.3)',
    badge: '100% قطن',
  },
  {
    id: 3,
    name: 'Plus',
    nameAr: 'فوط بلس',
    desc: 'حماية متطورة طوال اليوم — تقنية Liquid Lock GEL اليابانية',
    count: '8',
    color: '#6A1B9A',
    bg: 'from-purple-900/60 to-purple-950/80',
    border: 'border-purple-500/30',
    glow: 'rgba(106,27,154,0.3)',
    badge: 'Extra Large',
  },
  {
    id: 4,
    name: 'Premium XXL',
    nameAr: 'بريميوم XXL',
    desc: 'مخصصة للنساء اللواتي يعانين من PCOS والحساسية والبشرة الحساسة',
    count: '7',
    color: '#E65100',
    bg: 'from-orange-900/60 to-orange-950/80',
    border: 'border-orange-500/30',
    glow: 'rgba(230,81,0,0.3)',
    badge: '100 طبقة تنفس',
  },
  {
    id: 5,
    name: 'Premium Pants',
    nameAr: 'بنطلون بريميوم',
    desc: 'راحة قصوى وثقة كاملة — تصميم انسيابي يشبه الملابس الداخلية',
    count: '3',
    color: '#AD1457',
    bg: 'from-rose-900/60 to-rose-950/80',
    border: 'border-rose-500/30',
    glow: 'rgba(173,20,87,0.3)',
    badge: 'Super Comfort',
  },
];

const features = [
  { icon: FiShield, title: 'حماية 360°', desc: 'تغطية كاملة من كل الاتجاهات طوال اليوم' },
  { icon: FiDroplet, title: 'Liquid Lock GEL', desc: 'تقنية يابانية متقدمة تحبس السوائل فوراً' },
  { icon: FiStar, title: '100% قطن', desc: 'مصنوعة من أجود أنواع القطن الطبيعي' },
  { icon: FiUsers, title: 'نظام الأعضاء', desc: 'انضمي واكسبي عمولة من كل عملية بيع' },
];

const stats = [
  { value: '+50,000', label: 'عميلة راضية' },
  { value: '5', label: 'منتجات متميزة' },
  { value: '360°', label: 'حماية ضامنة' },
  { value: '100%', label: 'قطن طبيعي' },
];

// ─── Animations ──────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: EASE }
  }),
};

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.section>
  );
}

// ─── Product Card ─────────────────────────────────────────────────────────────
function ProductCard({ p, i }: { p: typeof products[0]; i: number }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={i}
      className={`relative card-3d rounded-3xl p-6 bg-gradient-to-b ${p.bg} border ${p.border} overflow-hidden group cursor-pointer`}
      style={{ boxShadow: `0 8px 40px ${p.glow}` }}
    >
      {/* Badge */}
      <div
        className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full text-white"
        style={{ backgroundColor: p.color }}
      >
        {p.badge}
      </div>

      {/* Count */}
      <div className="text-6xl font-black text-white/10 mb-1 leading-none select-none">
        {p.count}
      </div>

      {/* Name */}
      <div className="mb-2">
        <div className="text-xs text-gray-400 uppercase tracking-widest">allsence</div>
        <h3 className="text-xl font-black text-white">{p.name}</h3>
        <div className="text-sm font-semibold" style={{ color: p.color }}>{p.nameAr}</div>
      </div>

      {/* Desc */}
      <p className="text-gray-400 text-sm leading-relaxed mt-3 mb-5">{p.desc}</p>

      {/* CTA */}
      <Link
        to="/products"
        className="flex items-center gap-2 text-sm font-bold transition-all group-hover:gap-3"
        style={{ color: p.color }}
      >
        اطلبي الآن <FiArrowLeft />
      </Link>

      {/* Glow orb */}
      <div
        className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-40"
        style={{ backgroundColor: p.color }}
      />
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="pt-16">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-900/10 rounded-full blur-[150px]" />
        </div>

        {/* Floating dots decoration */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-pink-400/40 rounded-full animate-float"
            style={{
              top: `${20 + i * 12}%`,
              left: `${5 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm text-pink-300 mb-8"
          >
            <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
            منتجات العناية النسائية المتميزة
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            <span className="text-white">راحتك</span>
            <br />
            <span className="text-gradient-pink">مش رفاهية</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            اكتشفي منتجات Allsence — تقنية Liquid Lock GEL اليابانية المتقدمة،
            100% قطن طبيعي، حماية 360° تمنحك ثقة بلا حدود.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="btn-primary text-base py-4 px-8">
              تسوقي الآن
            </Link>
            <Link to="/register?type=member" className="btn-outline text-base py-4 px-8">
              انضمي كعضوة واكسبي
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-gray-500">
            {['شحن سريع', '100% قطن طبيعي', 'ضمان الجودة', 'دفع آمن'].map((b) => (
              <div key={b} className="flex items-center gap-1.5">
                <FiCheck className="text-pink-400" size={14} />
                {b}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600"
        >
          <span className="text-xs">اسكرولي لأسفل</span>
          <div className="w-5 h-8 border-2 border-gray-700 rounded-full flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-pink-400 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────────────── */}
      <Section className="py-16 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-black text-gradient-pink mb-1">{s.value}</div>
              <div className="text-sm text-gray-400">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── Products ──────────────────────────────────────────────────────── */}
      <Section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="section-title">منتجاتنا</h2>
            <p className="section-subtitle">اختاري المنتج المناسب لاحتياجاتك</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {products.map((p, i) => (
              <ProductCard key={p.id} p={p} i={i} />
            ))}
          </div>

          <motion.div variants={fadeUp} custom={6} className="text-center mt-10">
            <Link to="/products" className="btn-primary inline-flex">
              تصفح جميع المنتجات
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* ── Features ──────────────────────────────────────────────────────── */}
      <Section className="py-20 px-4 bg-gradient-to-b from-transparent via-pink-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="section-title">لماذا Allsence؟</h2>
            <p className="section-subtitle">تقنية متقدمة وراحة حقيقية</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="glass-card rounded-2xl p-6 text-center group hover:border-pink-500/40 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-500/20 transition-all">
                  <f.icon className="text-pink-400 text-2xl" />
                </div>
                <h3 className="text-white font-bold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── MLM CTA ───────────────────────────────────────────────────────── */}
      <Section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeUp}
            className="relative glass-card rounded-3xl p-10 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-l from-pink-900/30 to-purple-900/20 pointer-events-none" />
            <div className="relative z-10">
              <div className="text-4xl mb-4">💜</div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                انضمي كعضوة واكسبي
              </h2>
              <p className="text-gray-300 text-lg mb-3 leading-relaxed">
                احصلي على كود إحالة خاص بك وابدئي بكسب عمولة من كل عملية بيع تتم عبر فريقك
                المكون من <span className="text-pink-400 font-bold">5 مستويات</span>.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
                {['كود إحالة خاص', 'عمولة من 5 مستويات', 'لوحة تحكم كاملة', 'دفع شهري'].map((f) => (
                  <div key={f} className="flex items-center gap-1.5 text-gray-300">
                    <FiCheck className="text-pink-400" />
                    {f}
                  </div>
                ))}
              </div>
              <Link to="/register?type=member" className="btn-primary text-base py-4 px-10">
                ابدئي رحلتك الآن
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ── How It Works ──────────────────────────────────────────────────── */}
      <Section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="section-title">كيف يعمل نظام الأعضاء؟</h2>
            <p className="section-subtitle">3 خطوات بسيطة للبدء</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-12 right-1/6 left-1/6 h-0.5 bg-gradient-to-l from-purple-500/30 via-pink-500/50 to-purple-500/30" />

            {[
              { step: '١', title: 'سجلي كعضوة', desc: 'أنشئي حسابك واختاري نوع العضوية' },
              { step: '٢', title: 'احصلي على كودك', desc: 'ستحصلين على كود إحالة خاص بك فوراً' },
              { step: '٣', title: 'اكسبي عمولتك', desc: 'شاركي كودك واكسبي من كل مبيعات فريقك' },
            ].map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-600 to-pink-800 flex items-center justify-center text-3xl font-black text-white mb-4 animate-pulse-glow z-10">
                  {s.step}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

    </div>
  );
}
