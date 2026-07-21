import type { BaseSyntheticEvent } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-toastify';
import { API_URL, PHONE_DISPLAY, PHONE_TEL } from '../config';

const formSchema = z.object({
  name: z.string().min(2, 'השם חייב להכיל לפחות 2 תווים'),
  email: z.string().email('אנא הכנס כתובת דוא"ל חוקית'),
  phone: z.string().regex(/^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$/, 'מספר טלפון לא תקין'),
  message: z.string().min(2, 'ההודעה חייבת להכיל לפחות 2 תווים'),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(formSchema) });

  const onSubmit = async (data: FormValues, event: BaseSyntheticEvent | undefined) => {
    event?.preventDefault?.();
    const loadingToastId = toast.loading('שולח את הטופס...', { position: 'top-center' });
    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, subject: 'פנייה מדף הנחיתה' }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        toast.dismiss(loadingToastId);
        toast.error(errorData.message || 'אירעה שגיאה בשליחת הטופס.');
        return;
      }

      toast.dismiss(loadingToastId);
      toast.success('הטופס נשלח בהצלחה! ניצור איתך קשר בהקדם.');
      reset();
    } catch (err) {
      toast.dismiss(loadingToastId);
      toast.error('אירעה שגיאה בשליחת הטופס.');
      console.error('Contact form error:', err);
    }
  };

  return (
    <section id="contact" className="bg-white py-20 md:py-28">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">קבעו פגישת ייעוץ</h2>
        <p className="text-lg text-gray-600 mb-10">
          השאירו פרטים ונחזור אליכם בהקדם, או התקשרו ישירות ל-{' '}
          <a href={`tel:${PHONE_TEL}`} className="text-green-700 font-semibold underline underline-offset-2">
            {PHONE_DISPLAY}
          </a>
        </p>

        <form
          className="bg-cream border border-gray-100 rounded-2xl p-6 sm:p-8 text-right"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(onSubmit)(e);
          }}
          noValidate
        >
          <div className="grid grid-cols-1 gap-5 mb-5">
            {[
              { name: 'name' as const, label: 'שם' },
              { name: 'email' as const, label: 'אימייל', type: 'email' },
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
                      : 'border-gray-200 focus:border-green-500'
                  } outline-none`}
                />
                {errors[name] && (
                  <span className="block text-red-600 text-sm mt-1.5">{errors[name]?.message}</span>
                )}
              </div>
            ))}
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
              הודעה
            </label>
            <textarea
              id="message"
              {...register('message')}
              rows={4}
              className={`w-full px-4 py-3 rounded-xl border bg-white text-right transition-colors ${
                errors.message ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-green-500'
              } outline-none`}
            />
            {errors.message && (
              <span className="block text-red-600 text-sm mt-1.5">{errors.message.message}</span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-700 text-white px-6 py-3.5 rounded-xl font-semibold transition-colors duration-200 hover:bg-green-800 disabled:bg-gray-300"
          >
            {isSubmitting ? 'שולח...' : 'שלח הודעה'}
          </button>
        </form>
      </div>
    </section>
  );
}
