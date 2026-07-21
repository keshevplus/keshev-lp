export default function About() {
  return (
    <section id="about" className="bg-white py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8 md:mb-10">
          אודות קשב פלוס
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="relative order-1 max-w-sm mx-auto md:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -inset-3 sm:-inset-4 bg-gradient-to-br from-green-700/15 to-orange-300/30 rounded-2xl -rotate-2"
            />
            <img
              src="/assets/images/doctor-hero.png"
              alt="ד&quot;ר איירין כוכב רייפמן"
              className="relative rounded-xl w-full h-auto object-cover"
            />
          </div>

          <div className="order-2 bg-cream border border-gray-100 rounded-2xl p-6 sm:p-7 text-right">
            <h3 className="text-xl font-bold text-forest mb-4">ד"ר איירין כוכב רייפמן</h3>
            <div className="space-y-4 text-base md:text-lg text-gray-600 leading-relaxed">
              <p>
                קשב פלוס היא מרפאה המתמחה באבחון וטיפול בהפרעות קשב וריכוז (ADHD), בהובלת ד"ר
                איירין כוכב רייפמן. אנו מציעים תהליך אבחון מקצועי ומדויק, ותוכנית טיפול המותאמת
                אישית לכל מטופל/ת.
              </p>
              <p>מפגישת הייעוץ הראשונה ועד לתוכנית הטיפול - נלווה אתכם בכל שלב בדרך להצלחה.</p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-forest text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 hover:bg-forest-light mt-5"
            >
              צור קשר לייעוץ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
