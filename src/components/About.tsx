export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 text-right">
        <h2 className="text-3xl font-bold mb-6 text-green-800">אודות קשב פלוס</h2>
        <p className="text-lg mb-4">
          קשב פלוס היא מרפאה המתמחה באבחון וטיפול בהפרעות קשב וריכוז (ADHD), בהובלת ד"ר איירין
          כוכב רייפמן. אנו מציעים תהליך אבחון מקצועי ומדויק, ותוכנית טיפול המותאמת אישית לכל
          מטופל/ת.
        </p>
        <p className="text-lg">
          מפגישת הייעוץ הראשונה ועד לתוכנית הטיפול - נלווה אתכם בכל שלב בדרך להצלחה.
        </p>
        <div className="flex flex-wrap justify-end gap-4 mt-8">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-green-800 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-md font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            צור קשר לייעוץ
            <img src="/assets/images/leafinverse.png" alt="" className="h-4 w-auto" />
          </a>
        </div>
      </div>
    </section>
  );
}
