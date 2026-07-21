function ChildIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.75} stroke="currentColor" className="h-7 w-7">
      <circle cx="12" cy="7" r="3.25" />
      <path d="M5.5 20.5c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6" strokeLinecap="round" />
    </svg>
  );
}

function AcademicCapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.75} stroke="currentColor" className="h-7 w-7">
      <path d="M12 4.5 3 9l9 4.5 9-4.5-9-4.5Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 11.5V16c0 1.4 2.24 2.5 5 2.5s5-1.1 5-2.5v-4.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 10v5" strokeLinecap="round" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.75} stroke="currentColor" className="h-7 w-7">
      <rect x="3.5" y="8" width="17" height="11" rx="2" />
      <path d="M8.5 8V6.5A2.5 2.5 0 0 1 11 4h2a2.5 2.5 0 0 1 2.5 2.5V8" strokeLinecap="round" />
      <path d="M3.5 13h17" />
    </svg>
  );
}

const audiences = [
  {
    title: 'ילדים',
    text: 'איתור מוקדם, אבחון מותאם גיל וליווי ההורים לאורך התהליך.',
    Icon: ChildIcon,
  },
  {
    title: 'נוער',
    text: 'אבחון ותמיכה בהתמודדות עם לימודים, בחינות ומעברים חברתיים.',
    Icon: AcademicCapIcon,
  },
  {
    title: 'מבוגרים',
    text: 'אבחון ותוכנית טיפול המותאמים לחיי היומיום, עבודה וזוגיות.',
    Icon: BriefcaseIcon,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-cream py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">למי זה מתאים</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-right">
          {audiences.map(({ title, text, Icon }) => (
            <div
              key={title}
              className="bg-white rounded-2xl border border-gray-100 p-8 transition-colors duration-200 hover:border-green-200"
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-50 text-green-700 mb-5">
                <Icon />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-base text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
