import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, MessageCircle, Instagram } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`New inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // Open email client
    window.location.href = `mailto:mkeskpaik@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#f5f1e8] pt-20">
      {/* Hero Section */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Mail className="w-16 h-16 text-[#7fa4b8] mx-auto mb-6" />
            <h1
              className="text-5xl md:text-6xl text-[#3d2817] mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {t.contactPage.title}
            </h1>
            <p
              className="text-xl text-[#6b5d52] leading-relaxed"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {t.contactPage.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-12 rounded-sm shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-[#3d2817] mb-2"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {t.contactPage.nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#f5f1e8] border border-[#d4b896] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#d4b896] transition-all text-[#3d2817]"
                  style={{ fontFamily: 'var(--font-sans)' }}
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-[#3d2817] mb-2"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {t.contactPage.emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#f5f1e8] border border-[#d4b896] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#d4b896] transition-all text-[#3d2817]"
                  style={{ fontFamily: 'var(--font-sans)' }}
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-[#3d2817] mb-2"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {t.contactPage.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#f5f1e8] border border-[#d4b896] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#d4b896] transition-all text-[#3d2817] resize-none"
                  style={{ fontFamily: 'var(--font-sans)' }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#3d2817] text-[#f5f1e8] rounded-sm hover:bg-[#2c1f11] transition-all shadow-lg hover:shadow-xl"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {t.contactPage.submitButton}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Alternative */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p
              className="text-lg text-[#6b5d52] mb-8"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {t.contactPage.whatsappText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5492215089495"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#25D366] text-white rounded-sm hover:bg-[#20BA5A] transition-all shadow-lg"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/tiendagardel/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#E1306C] text-white rounded-sm hover:bg-[#C2255C] transition-all shadow-lg"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}