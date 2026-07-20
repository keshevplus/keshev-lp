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
    <section id="contact" className="bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-green-800 text-right">קבעו פגישת ייעוץ</h2>
        <p className="text-lg mb-8 text-right">
          השאירו פרטים ונחזור אליכם בהקדם, או התקשרו ישירות ל-
          <a href={`tel:${PHONE_TEL}`} className="text-green-700 underline font-semibold">
            {PHONE_DISPLAY}
          </a>
        </p>

        <form
          className="bg-orange-400/65 p-6 rounded-lg shadow-lg w-full"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(onSubmit)(e);
          }}
          noValidate
        >
          <div className="grid grid-cols-1 gap-4 mb-4">
            {[
              { name: 'name' as const, label: 'שם' },
              { name: 'email' as const, label: 'אימייל', type: 'email' },
              { name: 'phone' as const, label: 'טלפון', type: 'tel' },
            ].map(({ name, label, type = 'text' }) => (
              <div key={name} className="relative">
                <input
                  {...register(name)}
                  type={type}
                  placeholder={label}
                  className={`w-full p-3 rounded-lg border text-right ${
                    errors[name] ? 'border-red-700 border-2' : 'border-gray-300 focus:border-green-500'
                  }`}
                />
                {errors[name] && (
                  <span className="block text-red-800 font-bold text-sm mt-1">
                    {errors[name]?.message}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="relative mb-4">
            <textarea
              {...register('message')}
              rows={3}
              placeholder="הודעה"
              className={`w-full p-3 rounded-lg border text-right ${
                errors.message ? 'border-red-700 border-2' : 'border-gray-300 focus:border-green-500'
              }`}
            />
            {errors.message && (
              <span className="block text-red-800 font-bold text-sm mt-1">{errors.message.message}</span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-300 disabled:bg-gray-400 font-semibold"
          >
            {isSubmitting ? 'שולח...' : 'שלח הודעה'}
          </button>
        </form>
      </div>
    </section>
  );
}
