export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-20 md:pt-16 md:pb-28 flex flex-col md:flex-row gap-14 md:gap-10 items-center justify-between">
        <div className="flex flex-col w-full md:w-[54%] order-2 md:order-1 text-center md:text-right">
          <span className="inline-block self-center md:self-end mb-6 text-sm font-semibold text-green-800 bg-green-50 border border-green-100 rounded-full px-4 py-1.5">
            אבחון מקצועי לקשב וריכוז
          </span>

          <h1 className="font-serif text-4xl md:text-6xl font-bold text-gray-900 leading-[1.15] mb-6">
            האבחון הנכון
            <br />
            <span className="text-forest">לא צריך לחכות</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-xl md:mr-0 mx-auto">
            בקשב פלוס מקבלים מענה מהיר, אבחון מדויק ותוכנית טיפול אישית - לילדים, לבני נוער
            ולמבוגרים.
          </p>

          <p className="text-sm text-gray-500 mb-8">
            בהובלת ד"ר איירין כוכב רייפמן, מומחית לאבחון וטיפול בהפרעות קשב וריכוז
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-3 mb-6">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-orange-400 text-forest px-7 py-3.5 rounded-xl font-bold transition-colors duration-200 hover:bg-orange-300"
            >
              קבעו תור עכשיו
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-7 py-3.5 rounded-xl font-semibold transition-colors duration-200 hover:bg-gray-50"
            >
              קראו עוד עלינו
            </a>
          </div>

          <p className="text-sm text-gray-500">מענה אישי תוך זמן קצר</p>
        </div>

        <div className="relative w-full md:w-[38%] flex justify-center order-1 md:order-2">
          <div
            aria-hidden="true"
            className="absolute -inset-3 sm:-inset-5 bg-gradient-to-br from-orange-300/40 to-green-700/20 rounded-[2rem] rotate-3"
          />
          <img
            src="/assets/images/doctor-hero.png"
            alt="ד&quot;ר איירין כוכב רייפמן"
            className="relative w-full max-w-xs md:max-w-none h-auto rounded-2xl"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-wrap justify-center md:justify-end gap-2 pb-10">
        {['בילדים', 'בנוער', 'במבוגרים'].map((item) => (
          <span
            key={item}
            className="text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-full px-4 py-1.5"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
