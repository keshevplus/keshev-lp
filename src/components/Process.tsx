const steps = [
  {
    number: '01',
    title: 'יצירת קשר',
    text: 'משאירים פרטים, ואנחנו קובעים פגישה בזמן שנוח לכם.',
  },
  {
    number: '02',
    title: 'פגישת אבחון',
    text: 'פגישה מקצועית ומעמיקה עם ד"ר איירין כוכב רייפמן.',
  },
  {
    number: '03',
    title: 'תוכנית טיפול',
    text: 'תוכנית מותאמת אישית, עם ליווי להמשך הדרך.',
  },
];

export default function Process() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 text-center mb-14 md:mb-16">
          איך זה עובד
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {steps.map((step, idx) => (
            <div key={step.number} className="relative text-center md:text-right">
              {idx > 0 && (
                <div className="hidden md:block absolute top-6 right-full w-8 h-px bg-gray-200" />
              )}
              <span className="font-serif text-5xl font-bold text-forest/15 block mb-2">
                {step.number}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-base text-gray-600 leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
