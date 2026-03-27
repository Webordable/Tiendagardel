import { motion, useScroll, useTransform } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "react-router";
import { Check, Sparkles } from "lucide-react";
import { useRef } from "react";
const heroImage = "https://i.imgur.com/UMTgPU2.jpeg";
const productImage = "https://i.imgur.com/bUKx6yp.jpeg";
const transformationImage = "https://i.imgur.com/xeKkWyh.jpeg";

const craftImage1 = "https://i.imgur.com/1Ssms1m.jpeg";
const craftImage2 = "https://images.unsplash.com/photo-1759523081055-05bcf5d10787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwd29vZCUyMGNhcnZpbmclMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NzM4OTM5NTN8MA&ixlib=rb-4.1.0&q=80&w=1080";
const craftImage3 = "https://i.imgur.com/MkMkWQC.jpeg";

export default function Home() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    container: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "30%"],
  );
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.5],
    [1, 0],
  );

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-[#f5f1e8]"
      style={{ position: "relative" }}
    >
      {/* Section 1: Split-Screen Hero */}
      <section
        ref={heroRef}
        className="relative min-h-screen grid md:grid-cols-2 pt-20 overflow-hidden"
      >
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ opacity: textOpacity }}
          className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-0"
        >
          <h1
            className="text-5xl md:text-6xl lg:text-7xl text-[#3d2817] mb-6 leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {t.hero.headline}
          </h1>
          <p
            className="text-lg md:text-xl text-[#6b5d52] mb-8 leading-relaxed max-w-lg"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {t.hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Link
              to="/contacto"
              className="px-8 py-4 bg-[#3d2817] text-[#f5f1e8] rounded-sm hover:bg-[#2c1f11] transition-all shadow-lg hover:shadow-xl text-center"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {t.hero.primaryCTA}
            </Link>
            <Link
              to="/artesania"
              className="px-8 py-4 border border-[#3d2817] text-[#3d2817] rounded-sm hover:bg-[#3d2817] hover:text-[#f5f1e8] transition-all text-center"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {t.hero.secondaryCTA}
            </Link>
          </div>

          <p
            className="text-sm text-[#6b5d52]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {t.hero.trustLine}
          </p>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative overflow-hidden h-full"
        >
          <motion.div
            className="h-full relative"
            style={{ y: imageY }}
          >
            <img
              src={heroImage}
              alt="Handcrafted chess board"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3d2817]/20 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Section 2: Transformation Framing */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span
                className="text-sm text-[#6b5d52] uppercase tracking-widest mb-2 block"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {t.transformation.before}
              </span>
              <p
                className="text-2xl text-[#2c2c2c] mb-8"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {t.transformation.beforeText}
              </p>

              <span
                className="text-sm text-[#3d2817] uppercase tracking-widest mb-2 block"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {t.transformation.after}
              </span>
              <p
                className="text-2xl text-[#3d2817] mb-6"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {t.transformation.afterText}
              </p>

              <p
                className="text-sm italic text-[#6b5d52]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {t.transformation.microcopy}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src={transformationImage}
                alt="Chess board in living room"
                className="w-full rounded-sm shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Product Focus */}
      <section className="py-24 px-8 bg-[#f5f1e8]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={productImage}
              alt="Chess board detail"
              className="w-full max-w-2xl mx-auto mb-12 rounded-sm shadow-2xl"
            />

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                t.product.feature1,
                t.product.feature2,
                t.product.feature3,
                t.product.feature4,
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-10 h-10 rounded-full bg-[#d4b896] flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#3d2817]" />
                  </div>
                  <p
                    className="text-sm text-[#2c2c2c] text-center"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* Price Block */}
            <div className="mb-8">
              <div
                className="text-5xl md:text-6xl text-[#3d2817] mb-2"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                $145.000
              </div>
              <p
                className="text-[#6b5d52]"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {t.product.priceNote}
              </p>
            </div>

            <Link
              to="/contacto"
              className="px-12 py-4 bg-[#3d2817] text-[#f5f1e8] rounded-sm hover:bg-[#2c1f11] transition-all shadow-lg hover:shadow-xl mb-4 inline-block"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {t.product.primaryCTA}
            </Link>

            <p
              className="text-sm text-[#6b5d52] italic"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              <Sparkles className="w-4 h-4 inline mr-1" />
              {t.product.scarcity}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Craftsmanship Preview */}
      <section className="py-24 px-8 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-4xl md:text-5xl text-[#3d2817] mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {t.craftsmanshipPreview.headline}
            </h2>
            <p
              className="text-lg text-[#6b5d52] max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {t.craftsmanshipPreview.narrative}
            </p>
          </motion.div>

          {/* Horizontal Scrolling Images */}
          <div className="flex gap-6 overflow-x-auto pb-6 mb-8 scrollbar-hide">
            {[
              craftImage1,
              craftImage2,
              craftImage3,
            ].map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt={`Craftsmanship process ${index + 1}`}
                className="h-80 w-auto rounded-sm shadow-lg flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/artesania"
              className="inline-block px-8 py-3 border border-[#3d2817] text-[#3d2817] rounded-sm hover:bg-[#3d2817] hover:text-[#f5f1e8] transition-all"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {t.craftsmanshipPreview.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: Social Proof */}
      <section className="py-24 px-8 bg-[#f5f1e8]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-sm shadow-lg"
            >
              <p
                className="text-2xl italic text-[#3d2817] mb-4"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                "{t.socialProof.quote1}"
              </p>
              <p
                className="text-[#6b5d52]"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                — {t.socialProof.customer1}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-sm shadow-lg"
            >
              <p
                className="text-2xl italic text-[#3d2817] mb-4"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                "{t.socialProof.quote2}"
              </p>
              <p
                className="text-[#6b5d52]"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                — {t.socialProof.customer2}
              </p>
            </motion.div>
          </div>

          <div className="text-center">
            <p
              className="text-lg text-[#3d2817] mb-2"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {t.socialProof.locations}
            </p>
            <p
              className="text-[#6b5d52]"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              ✓ {t.socialProof.guarantee}
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Final CTA */}
      <section className="py-24 px-8 bg-[#3d2817] text-[#f5f1e8]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl md:text-5xl mb-8"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {t.finalCTA.headline}
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                to="/contacto"
                className="px-10 py-4 bg-[#d4b896] text-[#3d2817] rounded-sm hover:bg-[#c4a886] transition-all shadow-lg hover:shadow-xl text-center"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {t.finalCTA.primaryCTA}
              </Link>
              <Link
                to="/contacto"
                className="px-10 py-4 border border-[#f5f1e8] text-[#f5f1e8] rounded-sm hover:bg-[#f5f1e8] hover:text-[#3d2817] transition-all"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {t.finalCTA.secondaryCTA}
              </Link>
            </div>

            <p
              className="text-sm text-[#d4b896]"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {t.finalCTA.securityNote}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}