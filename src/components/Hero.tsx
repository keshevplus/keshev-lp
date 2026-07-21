export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-orange-400/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 -right-24 h-72 w-72 rounded-full bg-green-300/10 blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-20 md:pt-12 md:pb-28 flex flex-col md:flex-row gap-12 md:gap-10 items-center justify-between">
        <div className="flex flex-col w-full md:w-[54%] order-2 md:order-1 text-center md:text-right">
          <span className="inline-block self-center md:self-end mb-6 text-sm font-semibold text-orange-300 bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
            אבחון מקצועי לקשב וריכוז
          </span>

          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-[1.15] mb-6">
            האבחון הנכון
            <br />
            לא צריך לחכות
          </h1>

          <p className="text-lg md:text-xl text-cream/85 mb-6 max-w-xl md:mr-0 mx-auto">
            בקשב פלוס מקבלים מענה מהיר, אבחון מדויק ותוכנית טיפול אישית - לילדים, לבני נוער
            ולמבוגרים.
          </p>

          <p className="text-sm text-cream/70 mb-8">
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
              className="inline-flex items-center gap-2 border border-white/25 text-white px-7 py-3.5 rounded-xl font-semibold transition-colors duration-200 hover:bg-white/10"
            >
              קראו עוד עלינו
            </a>
          </div>

          <p className="text-sm text-cream/60">מענה אישי תוך זמן קצר</p>
        </div>

        <div className="relative w-full md:w-[38%] flex justify-center order-1 md:order-2">
          <div
            aria-hidden="true"
            className="absolute h-[110%] w-[85%] bg-gradient-to-br from-orange-400/25 to-transparent rounded-[3rem] blur-2xl"
          />
          <img
            src="/assets/images/doctor-hero.png"
            alt="ד&quot;ר איירין כוכב רייפמן"
            className="relative w-full max-w-xs md:max-w-none h-auto rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-2xl rounded-bl-2xl border border-white/10"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-wrap justify-center md:justify-end gap-2 pb-10">
        {['בילדים', 'בנוער', 'במבוגרים'].map((item) => (
          <span
            key={item}
            className="text-sm font-medium text-cream/80 border border-white/15 rounded-full px-4 py-1.5"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
