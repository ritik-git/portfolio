import { FC, memo, useCallback, useMemo, useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(() => ({
    name: '',
    email: '',
    message: '',
  }), []);

  const [data, setData] = useState<FormData>(defaultData);
  const [loading, setLoading] = useState(false); // Track loading state

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const { name, value } = event.target;
      setData({ ...data, [name]: value });
    },
    [data],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setLoading(true); // Start loading
      try {
        const emailData: Record<string, unknown> = {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        };

        const result = await emailjs.send(
          'service_hvjny7z',
          'template_ecqwzx6',
          emailData,
          'IcinfBLVvOdmDCbW5'
        );

        console.log('Email sent successfully:', result.text);

        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Your message has been sent successfully.',
          confirmButtonColor: '#3085d6',
        });

        setData(defaultData); // Reset form
      } catch (error) {
        console.error('Error sending email:', error);

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to send your message. Please try again later.',
          confirmButtonColor: '#d33',
        });
      } finally {
        setLoading(false); // Stop loading
      }
    },
    [data, defaultData],
  );

  const inputClasses = 'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input className={inputClasses} name="name" onChange={onChange} placeholder="Name" required type="text" />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit"
        disabled={loading} // Disable button when loading
      >
        {loading ? (
          <div className="flex items-center">
            <svg
              className="mr-2 h-4 w-4 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
            Sending...
          </div>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
