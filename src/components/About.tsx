export default function About() {
  return (
    <section id="about" className="bg-cream py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-8">אודות קשב פלוס</h2>

        <div className="space-y-5 text-lg text-gray-600 leading-relaxed text-right">
          <p>
            קשב פלוס היא מרפאה המתמחה באבחון וטיפול בהפרעות קשב וריכוז (ADHD), בהובלת ד"ר איירין
            כוכב רייפמן. אנו מציעים תהליך אבחון מקצועי ומדויק, ותוכנית טיפול המותאמת אישית לכל
            מטופל/ת.
          </p>
          <p>מפגישת הייעוץ הראשונה ועד לתוכנית הטיפול - נלווה אתכם בכל שלב בדרך להצלחה.</p>
        </div>

        <div className="mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-forest text-white px-7 py-3.5 rounded-xl font-semibold transition-colors duration-200 hover:bg-forest-light"
          >
            צור קשר לייעוץ
          </a>
        </div>
      </div>
    </section>
  );
}
