import { ADMIN_DASHBOARD_URL, PHONE_DISPLAY, PHONE_TEL } from '../config';

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-gray-200 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} כל הזכויות שמורות לקשב פלוס
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-600">
          <a href={`tel:${PHONE_TEL}`} className="hover:text-forest transition-colors">
            טלפון: {PHONE_DISPLAY}
          </a>
          <a href="mailto:dr@keshevplus.co.il" className="hover:text-forest transition-colors">
            dr@keshevplus.co.il
          </a>
          <a
            href={ADMIN_DASHBOARD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-forest transition-colors"
          >
            כניסת צוות
          </a>
        </div>
      </div>
    </footer>
  );
}
