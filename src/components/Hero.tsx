export default function Hero() {
  return (
    <section className="w-full bg-white/50">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-8 items-center justify-between pt-10 pb-10">
        <div className="flex flex-col w-full md:w-[55%] order-2 md:order-1 text-center md:text-right">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            ברוכים הבאים למרפאת "קשב פלוס"
          </h1>

          <p className="text-2xl font-bold mb-2 text-green-800">
            ד"ר איירין כוכב רייפמן
            <br />
            מומחית לאבחון וטיפול בהפרעות קשב וריכוז
          </p>
          <p className="text-lg mb-6">בקשב פלוס, תקבלו אבחון מדויק ותוכנית טיפול אישית</p>

          <p className="text-xl font-semibold mb-2">הצעד הראשון מתחיל כאן</p>
          <p className="text-lg mb-6">קבעו פגישת ייעוץ - ובואו לגלות את הדרך להצלחה</p>

          <div className="mb-6 flex flex-wrap justify-center md:justify-end gap-2">
            {['בילדים', 'בנוער', 'במבוגרים'].map((item, idx, arr) => (
              <span key={item} className="inline-flex items-center text-lg">
                {item}
                {idx < arr.length - 1 && <span className="text-green-600 font-bold mx-2">+</span>}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-4 mt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-full shadow-md font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 hover:bg-green-600"
            >
              התחל/י את האבחון
              <img src="/assets/images/leafinverse.png" alt="" className="h-4 w-auto" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 bg-orange-400 text-white px-6 py-3 rounded-full shadow-md font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 hover:bg-orange-500"
            >
              קרא/י עוד עלינו
              <img src="/assets/images/leaf.png" alt="" className="h-4 w-auto" />
            </a>
          </div>
        </div>

        <div className="w-full md:w-[45%] flex justify-center md:justify-start order-1 md:order-2">
          <img
            src="/assets/images/doctor-hero.png"
            alt="רופאה מומחית לקשב וריכוז"
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
