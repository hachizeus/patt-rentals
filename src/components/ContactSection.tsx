import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const subject = (form.elements.namedItem('subject') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
    
    window.open(
      `mailto:pattrentals@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <section id="contact" className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="mt-4 text-gray-400">Get in touch with our team</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-md bg-gray-900 border-gray-700 text-white shadow-sm focus:border-red-500 focus:ring-red-500"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="mt-1 block w-full rounded-md bg-gray-900 border-gray-700 text-white shadow-sm focus:border-red-500 focus:ring-red-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md bg-gray-900 border-gray-700 text-white shadow-sm focus:border-red-500 focus:ring-red-500"
                />
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <p className="mt-1 text-gray-400">pattrentals@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-medium">Phone</h3>
                <p className="mt-1 text-gray-400">+254 720 813 111</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-medium">Location</h3>
                <p className="mt-1 text-gray-400">T Plaza, 4th Floor, Thika</p>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 h-64 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.159697883934!2d37.069240674965286!3d-1.0410828989488974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4f14fcd5084b%3A0xa12fc50156937773!2sT%20Plaza!5e0!3m2!1sen!2ske!4v1733737022236!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}