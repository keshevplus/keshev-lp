export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      {/* Decorative soft background blobs - purely visual, no shadow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-green-100 opacity-60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-32 -right-16 h-72 w-72 rounded-full bg-orange-100 opacity-60 blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-20 md:pt-20 md:pb-28 flex flex-col md:flex-row gap-12 md:gap-8 items-center justify-between">
        <div className="flex flex-col w-full md:w-[52%] order-2 md:order-1 text-center md:text-right animate-fade-up">
          <span className="inline-block self-center md:self-end mb-5 text-sm font-semibold text-green-800 bg-green-50 border border-green-100 rounded-full px-4 py-1.5">
            ברוכים הבאים למרפאת "קשב פלוס"
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            ד"ר איירין כוכב רייפמן
            <br />
            <span className="text-green-700">מומחית לאבחון וטיפול בהפרעות קשב וריכוז</span>
          </h1>

          <p className="text-lg text-gray-600 mb-8">בקשב פלוס, תקבלו אבחון מדויק ותוכנית טיפול אישית</p>

          <div className="mb-8">
            <p className="text-xl font-semibold text-gray-900 mb-1">הצעד הראשון מתחיל כאן</p>
            <p className="text-base text-gray-600">קבעו פגישת ייעוץ - ובואו לגלות את הדרך להצלחה</p>
          </div>

          <div className="mb-9 flex flex-wrap justify-center md:justify-end items-center gap-1 text-lg font-medium text-gray-800">
            {['בילדים', 'בנוער', 'במבוגרים'].map((item, idx, arr) => (
              <span key={item} className="inline-flex items-center">
                <span className="bg-white border border-gray-200 rounded-full px-4 py-1.5">{item}</span>
                {idx < arr.length - 1 && <span className="text-orange-500 font-bold mx-2">+</span>}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-green-700 text-white px-7 py-3.5 rounded-xl font-semibold transition-colors duration-200 hover:bg-green-800"
            >
              התחל/י את האבחון
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 border border-orange-200 px-7 py-3.5 rounded-xl font-semibold transition-colors duration-200 hover:bg-orange-100"
            >
              קרא/י עוד עלינו
            </a>
          </div>
        </div>

        <div className="relative w-full md:w-[42%] flex justify-center order-1 md:order-2">
          <img
            src="/assets/images/doctor-hero.png"
            alt="רופאה מומחית לקשב וריכוז"
            className="relative w-full max-w-sm md:max-w-none h-auto rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}
