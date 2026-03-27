import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router';
const finishingImage = "https://i.imgur.com/xeKkWyh.jpeg";

export default function Craftsmanship() {
  const { t } = useLanguage();

  const craftSteps = [
    {
  title: t.craftsmanshipPage.woodSelection,
  description: t.craftsmanshipPage.woodSelectionText,
  image: 'https://i.imgur.com/Frbnmck.jpeg',
},
{
  title: t.craftsmanshipPage.handSanding,
  description: t.craftsmanshipPage.handSandingText,
  image: 'https://i.imgur.com/GBrOME8.jpeg',
}, 
    {
  title: t.craftsmanshipPage.finishing,
  description: t.craftsmanshipPage.finishingText,
  image: finishingImage,
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
              {t.craftsmanshipPage.title}
            </h1>
            <p
              className="text-xl text-[#6b5d52] leading-relaxed"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {t.craftsmanshipPage.intro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Craft Steps */}
      {craftSteps.map((step, index) => (
        <section
          key={index}
          className={`py-20 px-8 ${index % 2 === 0 ? 'bg-[#f5f1e8]' : 'bg-white'}`}
        >
          <div className="max-w-6xl mx-auto">
            <div
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
            >
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 === 1 ? 'md:col-start-2' : ''}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full rounded-sm shadow-2xl"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}
              >
                <div className="mb-4">
                  <span
                    className="text-sm text-[#7fa4b8] uppercase tracking-widest"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Paso {index + 1}
                  </span>
                </div>
                <h2
                  className="text-3xl md:text-4xl text-[#3d2817] mb-6"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {step.title}
                </h2>
                <p
                  className="text-lg text-[#6b5d52] leading-relaxed"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {step.description}
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Philosophy Section */}
      <section className="py-24 px-8 bg-[#3d2817] text-[#f5f1e8]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl md:text-5xl mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {t.craftsmanshipPage.philosophy}
            </h2>
            <p
              className="text-xl text-[#d4b896] leading-relaxed mb-12"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {t.craftsmanshipPage.philosophyText}
            </p>

            <Link
              to="/"
              className="inline-block px-10 py-4 bg-[#d4b896] text-[#3d2817] rounded-sm hover:bg-[#c4a886] transition-all shadow-lg"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {t.hero.primaryCTA}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-6"
          >
            <img
              src="https://images.unsplash.com/photo-1691198362314-edec91ce11e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVzcyUyMGJvYXJkJTIwd29vZCUyMGdyYWluJTIwY2xvc2V1cHxlbnwxfHx8fDE3NzI0MDQwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Chess board detail 1"
              className="w-full h-80 object-cover rounded-sm shadow-lg hover:shadow-xl transition-shadow"
            />
            <img
              src="https://images.unsplash.com/photo-1711287961637-2e2c0c089571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwd29vZGVuJTIwY2hlc3MlMjBib2FyZCUyMGhhbmRjcmFmdGVkfGVufDF8fHx8MTc3MjQwNDAzNHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Chess board detail 2"
              className="w-full h-80 object-cover rounded-sm shadow-lg hover:shadow-xl transition-shadow"
            />
            <img
              src={finishingImage}
              alt="Chess board detail 3"
              className="w-full h-80 object-cover rounded-sm shadow-lg hover:shadow-xl transition-shadow"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}