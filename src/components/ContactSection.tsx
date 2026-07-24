import type { BaseSyntheticEvent } from 'react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-toastify';
import { API_URL, PHONE_DISPLAY, PHONE_TEL } from '../config';

const SERVICE_OPTIONS = [
  { value: 'diagnosis', label: 'אבחון' },
  { value: 'followup', label: 'מעקב' },
  { value: 'treatment', label: 'טיפול' },
] as const;

type ServiceType = (typeof SERVICE_OPTIONS)[number]['value'];

const buildFormSchema = (requireMessage: boolean) => z.object({
  name: z.string().min(2, 'השם חייב להכיל לפחות 2 תווים'),
  email: z.string().email('אנא הכנס כתובת דוא"ל חוקית'),
  phone: z.string().regex(/^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$/, 'מספר טלפון לא תקין'),
  serviceType: z.enum(['diagnosis', 'followup', 'treatment']),
  message: requireMessage
    ? z.string().trim().min(1, 'נא למלא הודעה')
    : z.string().optional().default(''),
});

type FormValues = z.infer<ReturnType<typeof buildFormSchema>>;

export default function ContactSection() {
  const [requireMessage, setRequireMessage] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    schedulingUrl: string | null;
    serviceLabel: string;
  } | null>(null);
  const [skipMessageVisible, setSkipMessageVisible] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/api/settings/contact-form`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && typeof data.requireMessage === 'boolean') {
          setRequireMessage(data.requireMessage);
        }
      })
      .catch(() => {});
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(buildFormSchema(requireMessage)),
    defaultValues: { serviceType: 'diagnosis' as ServiceType },
  });

  const trackEvent = (eventName: string) => {
    const win = window as typeof window & {
      gtag?: (...args: unknown[]) => void;
      dataLayer?: unknown[];
    };
    if (typeof win.gtag === 'function') {
      win.gtag('event', eventName);
      return;
    }
    if (Array.isArray(win.dataLayer)) {
      win.dataLayer.push({ event: eventName });
    }
  };

  const onSubmit = async (data: FormValues, event: BaseSyntheticEvent | undefined) => {
    event?.preventDefault?.();
    trackEvent('lp_contact_form_submitted');
    const loadingToastId = toast.loading('שולח את הטופס...', { position: 'top-center' });
    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          subject: 'פנייה מדף הנחיתה',
          landingPage: window.location.origin,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        toast.dismiss(loadingToastId);
        trackEvent('lp_contact_form_error');
        toast.error(errorData.message || 'לא הצלחנו לשלוח את הפרטים. נסו שוב או צרו איתנו קשר בטלפון או בוואטסאפ.');
        return;
      }

      const result = await response.json().catch(() => ({}));
      toast.dismiss(loadingToastId);
      trackEvent('lp_contact_form_success');
      toast.success('הפרטים התקבלו בהצלחה');
      setSubmissionResult({
        schedulingUrl: result?.scheduling?.url || null,
        serviceLabel: result?.scheduling?.serviceLabel || SERVICE_OPTIONS.find((option) => option.value === data.serviceType)?.label || 'אבחון',
      });
      setSkipMessageVisible(false);
      reset();
    } catch (err) {
      toast.dismiss(loadingToastId);
      trackEvent('lp_contact_form_error');
      toast.error('לא הצלחנו לשלוח את הפרטים. נסו שוב או צרו איתנו קשר בטלפון או בוואטסאפ.');
      console.error('Contact form error:', err);
    }
  };

  const handleSchedulingContinue = () => {
    if (!submissionResult?.schedulingUrl) return;
    trackEvent('preferred_date_cta_clicked');
    window.location.assign(submissionResult.schedulingUrl);
  };

  const handleSkipScheduling = () => {
    trackEvent('preferred_date_skipped');
    setSkipMessageVisible(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-12 md:py-16">
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">קבעו פגישת ייעוץ</h2>
        <p className="text-base text-gray-600 mb-1">
          השאירו פרטים ונחזור אליכם בהקדם, או התקשרו ישירות ל-{' '}
          <a href={`tel:${PHONE_TEL}`} className="text-forest font-semibold underline underline-offset-2">
            {PHONE_DISPLAY}
          </a>
        </p>
        <p className="text-sm text-gray-500 mb-6">מילוי הטופס לוקח פחות מדקה</p>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-3 sm:-inset-4 bg-gradient-to-br from-green-700/10 to-orange-300/25 rounded-2xl rotate-1"
          />
          {submissionResult ? (
            <div className="relative bg-cream rounded-2xl p-5 sm:p-7 text-right" role="status" aria-live="polite">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-forest text-white text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
                הפרטים התקבלו בהצלחה
              </h3>
              <p className="text-base text-gray-700 text-center mb-6">
                צוות המרפאה יחזור אליכם בהקדם להמשך התהליך ולתיאום התור.
              </p>

              <div className="rounded-2xl border border-orange-200 bg-white p-4 sm:p-5 shadow-sm">
                <p className="text-sm font-semibold text-forest mb-1">{submissionResult.serviceLabel}</p>
                <h4 className="text-xl font-bold text-gray-900 mb-2">רוצים לזרז את התהליך?</h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                  אפשר לבחור עכשיו מועד מועדף. בחירת המועד אינה מהווה אישור סופי, וצוות המרפאה יאשר את התור לאחר בדיקת הפרטים.
                </p>
                {submissionResult.schedulingUrl ? (
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={handleSchedulingContinue}
                      className="flex-1 bg-orange-400 text-forest px-5 py-3 rounded-xl font-bold transition-all duration-200 hover:bg-orange-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
                    >
                      לבחירת מועד מועדף
                    </button>
                    <button
                      type="button"
                      onClick={handleSkipScheduling}
                      className="flex-1 border border-gray-200 bg-white text-gray-700 px-5 py-3 rounded-xl font-bold transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2"
                    >
                      לא עכשיו, תודה
                    </button>
                  </div>
                ) : (
                  <p className="rounded-xl bg-orange-50 px-4 py-3 text-sm text-gray-700">
                    בחירת מועד אינה זמינה כרגע. הפרטים שלכם נשמרו וצוות המרפאה יחזור אליכם בהקדם.
                  </p>
                )}
                {skipMessageVisible && (
                  <p className="mt-4 rounded-xl bg-green-50 px-4 py-3 text-sm text-forest">
                    אין בעיה. הפרטים שלכם התקבלו וצוות המרפאה יחזור אליכם בהקדם.
                  </p>
                )}
              </div>
            </div>
          ) : (
          <form
            className="relative bg-cream rounded-2xl p-5 sm:p-7 text-right"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(onSubmit)(e);
            }}
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {[
                { name: 'name' as const, label: 'שם' },
                { name: 'phone' as const, label: 'טלפון', type: 'tel' },
              ].map(({ name, label, type = 'text' }) => (
                <div key={name}>
                  <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1.5">
                    {label}
                  </label>
                  <input
                    id={name}
                    {...register(name)}
                    type={type}
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-right transition-colors ${
                      errors[name]
                        ? 'border-red-400 focus:border-red-500'
                        : 'border-gray-200 focus:border-orange-400'
                    } outline-none`}
                  />
                  {errors[name] && (
                    <span className="block text-red-600 text-sm mt-1.5">{errors[name]?.message}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                אימייל
              </label>
              <input
                id="email"
                {...register('email')}
                type="email"
                className={`w-full px-4 py-3 rounded-xl border bg-white text-right transition-colors ${
                  errors.email ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-orange-400'
                } outline-none`}
              />
              {errors.email && (
                <span className="block text-red-600 text-sm mt-1.5">{errors.email.message}</span>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1.5">
                סוג השירות
              </label>
              <select
                id="serviceType"
                {...register('serviceType')}
                className={`w-full px-4 py-3 rounded-xl border bg-white text-right transition-colors ${
                  errors.serviceType ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-orange-400'
                } outline-none`}
              >
                {SERVICE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
              {errors.serviceType && (
                <span className="block text-red-600 text-sm mt-1.5">{errors.serviceType.message}</span>
              )}
            </div>

            <div className="mb-5">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                הודעה{requireMessage ? ' *' : ''}
              </label>
              <textarea
                id="message"
                {...register('message')}
                rows={3}
                className={`w-full px-4 py-3 rounded-xl border bg-white text-right transition-colors ${
                  errors.message ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-orange-400'
                } outline-none`}
              />
              {errors.message && (
                <span className="block text-red-600 text-sm mt-1.5">{errors.message.message}</span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-400 text-forest px-6 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:bg-orange-300 hover:shadow-md disabled:bg-gray-300 disabled:text-gray-500 disabled:shadow-none"
            >
              {isSubmitting ? 'שולח...' : 'קבעו פגישת ייעוץ עכשיו'}
            </button>
          </form>
          )}
        </div>
      </div>
    </section>
  );
}
