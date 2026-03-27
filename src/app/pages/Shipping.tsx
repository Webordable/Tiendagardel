import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Package, Clock, Shield, HelpCircle } from 'lucide-react';

export default function Shipping() {
  const { t } = useLanguage();

  const shippingInfo = [
    {
      icon: Package,
      title: t.shippingPage.shipping,
      description: t.shippingPage.shippingText,
    },
    {
      icon: Clock,
      title: t.shippingPage.timeframe,
      description: t.shippingPage.timeframeText,
    },
    {
      icon: Package,
      title: t.shippingPage.packaging,
      description: t.shippingPage.packagingText,
    },
    {
      icon: Shield,
      title: t.shippingPage.guarantee,
      description: t.shippingPage.guaranteeText,
    },
  ];

  const faqs = [
    {
      q: t.shippingPage.faqQ1,
      a: t.shippingPage.faqA1,
    },
    {
      q: t.shippingPage.faqQ2,
      a: t.shippingPage.faqA2,
    },
    {
      q: t.shippingPage.faqQ3,
      a: t.shippingPage.faqA3,
    },
    {
      q: t.shippingPage.faqQ4,
      a: t.shippingPage.faqA4,
    },
  ];

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
            <h1
              className="text-5xl md:text-6xl text-[#3d2817] mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {t.shippingPage.title}
            </h1>
            <p
              className="text-xl text-[#6b5d52] leading-relaxed"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {t.shippingPage.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Shipping Info Grid */}
      <section className="py-20 px-8 bg-[#f5f1e8]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {shippingInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-sm shadow-lg"
              >
                <div className="w-12 h-12 bg-[#d4b896] rounded-full flex items-center justify-center mb-6">
                  <info.icon className="w-6 h-6 text-[#3d2817]" />
                </div>
                <h3
                  className="text-2xl text-[#3d2817] mb-4"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {info.title}
                </h3>
                <p
                  className="text-[#6b5d52] leading-relaxed"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Argentina Map Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2
              className="text-4xl text-[#3d2817] mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Envíos a toda Argentina
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['Buenos Aires', 'La Plata', 'City Bell', 'Córdoba', 'Rosario', 'Mendoza', 'Mar del Plata', 'Tucumán'].map((city) => (
                <span
                  key={city}
                  className="px-4 py-2 bg-[#d4b896]/20 text-[#3d2817] rounded-full"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {city}
                </span>
              ))}
            </div>
            <p
              className="text-lg text-[#6b5d52]"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {t.shippingPage.citiesText}
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-8 bg-[#f5f1e8]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <HelpCircle className="w-12 h-12 text-[#7fa4b8] mx-auto mb-4" />
            <h2
              className="text-4xl text-[#3d2817] mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {t.shippingPage.faqTitle}
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-sm shadow-md"
              >
                <h3
                  className="text-xl text-[#3d2817] mb-3"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {faq.q}
                </h3>
                <p
                  className="text-[#6b5d52]"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-[#3d2817] text-[#f5f1e8]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl md:text-4xl mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {t.shippingPage.finalCTATitle}
            </h2>
            <button
              className="px-10 py-4 bg-[#d4b896] text-[#3d2817] rounded-sm hover:bg-[#c4a886] transition-all shadow-lg"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {t.shippingPage.finalCTAButton}
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}