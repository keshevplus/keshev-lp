import { ADMIN_DASHBOARD_URL, PHONE_DISPLAY, PHONE_TEL } from '../config';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-4xl mx-auto px-4 text-center md:text-right">
        <p className="text-lg font-semibold mb-1">
          &copy; {new Date().getFullYear()} כל הזכויות שמורות לקשב פלוס
        </p>
        <div className="text-sm text-gray-300 flex flex-wrap justify-center md:justify-start gap-x-4 mt-2">
          <a href={`tel:${PHONE_TEL}`} className="hover:text-orange-400 transition-colors">
            טלפון: {PHONE_DISPLAY}
          </a>
          <a href="mailto:dr@keshevplus.co.il" className="hover:text-orange-400 transition-colors">
            dr@keshevplus.co.il
          </a>
          <a
            href={ADMIN_DASHBOARD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-colors"
          >
            כניסת צוות
          </a>
        </div>
      </div>
    </footer>
  );
}
