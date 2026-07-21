function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.75} stroke="currentColor" className="h-6 w-6">
      <circle cx="12" cy="12" r="8.25" />
      <path d="M12 8v4.25l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.75} stroke="currentColor" className="h-6 w-6">
      <circle cx="12" cy="12" r="8.25" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.75" fill="currentColor" />
    </svg>
  );
}

function HeartHandsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.75} stroke="currentColor" className="h-6 w-6">
      <path
        d="M12 19s-6.5-4-6.5-8.5A3.5 3.5 0 0 1 12 8a3.5 3.5 0 0 1 6.5 2.5C18.5 15 12 19 12 19Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const values = [
  {
    title: 'זמינות מהירה',
    text: 'תיאום פגישה בזמן קצר, בלי המתנה ממושכת.',
    Icon: ClockIcon,
  },
  {
    title: 'אבחון מדויק',
    text: 'תהליך מקצועי ומותאם אישית לכל גיל.',
    Icon: TargetIcon,
  },
  {
    title: 'ליווי לאורך הדרך',
    text: 'מפגישת הייעוץ ועד תוכנית הטיפול - איתכם בכל שלב.',
    Icon: HeartHandsIcon,
  },
];

export default function ValueStrip() {
  return (
    <section className="bg-white py-8 md:py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-6">
        {values.map(({ title, text, Icon }) => (
          <div key={title} className="flex items-start gap-4 text-right">
            <div className="shrink-0 inline-flex items-center justify-center h-11 w-11 rounded-full bg-forest/5 text-forest">
              <Icon />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
