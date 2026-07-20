const audiences = [
  { title: 'ילדים', text: 'איתור מוקדם, אבחון מותאם גיל וליווי ההורים לאורך התהליך.' },
  { title: 'נוער', text: 'אבחון ותמיכה בהתמודדות עם לימודים, בחינות ומעברים חברתיים.' },
  { title: 'מבוגרים', text: 'אבחון ותוכנית טיפול המותאמים לחיי היומיום, עבודה וזוגיות.' },
];

export default function Services() {
  return (
    <section id="services" className="bg-white/80 py-16">
      <div className="max-w-4xl mx-auto px-4 text-right">
        <h2 className="text-3xl font-bold mb-8 text-green-800">למי זה מתאים</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {audiences.map((a) => (
            <div key={a.title} className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-green-800 mb-2">{a.title}</h3>
              <p className="text-base text-gray-700">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
