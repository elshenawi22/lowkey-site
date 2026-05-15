import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useState } from 'react';

const tabs = ['Campaign', 'Archive', 'Visual Diary'] as const;

export default function Archive() {
  const { ref, isInView } = useInView(0.05);
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>('Campaign');

  return (
    <section id="archive" className="py-24 md:py-36 lg:py-44 th-bg">
      <div className="px-5 md:px-10 lg:px-14">
        {/* Header */}
        <div ref={ref} className="mb-10 md:mb-14">
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.8 }}
            className="th-gold2 text-[9px] tracking-[0.5em] uppercase mb-3">World</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[28px] md:text-[36px] lg:text-[44px] font-light tracking-[-0.01em] th-fg">The Universe</motion.h2>
          <motion.div initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.4, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
            className="mt-6 h-[0.5px] origin-left" style={{ background: `linear-gradient(to right, var(--c-gold3), transparent)` }} />
        </div>

        {/* Tabs */}
        <div className="flex gap-6 md:gap-8 mb-12 md:mb-16 overflow-x-auto scroll-hide -mx-5 px-5 md:mx-0 md:px-0">
          {tabs.map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className="text-[9px] tracking-[0.35em] uppercase pb-2 border-b whitespace-nowrap tap flex-shrink-0"
              style={{
                borderColor: activeTab === tab ? 'var(--c-gold)' : 'transparent',
                color: activeTab === tab ? 'var(--c-fg)' : 'var(--c-fg3)',
              }}>
              {tab}
            </button>
          ))}
        </div>

        {/* Campaign — asymmetric editorial grid */}
        {activeTab === 'Campaign' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
            <div className="md:col-span-8 group cursor-pointer tap-sm">
              <div className="aspect-[16/10] md:aspect-[16/9] overflow-hidden" style={{ background: 'var(--c-bg3)' }}>
                <img src="/images/lookbook1.jpg" alt="Campaign SS26"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1.4s]"
                  style={{ filter: `brightness(var(--c-img))` }} />
              </div>
              <div className="mt-3 flex justify-between items-baseline">
                <p className="th-gold2 text-[9px] tracking-[0.3em] uppercase">SS26 Campaign</p>
                <p className="th-fg4 text-[8px] tracking-[0.15em]">Port Said</p>
              </div>
            </div>
            <div className="md:col-span-4 flex flex-col gap-3 md:gap-4">
              <div className="group cursor-pointer tap-sm">
                <div className="aspect-[4/3] overflow-hidden" style={{ background: 'var(--c-bg3)' }}>
                  <img src="/images/lookbook2.jpg" alt="Campaign Detail"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1.4s]"
                    style={{ filter: `brightness(var(--c-img))` }} />
                </div>
                <p className="mt-3 th-gold2 text-[9px] tracking-[0.3em] uppercase">Detail 001</p>
              </div>
              <div className="flex-1 min-h-[120px] flex items-center justify-center p-6 md:p-8 border"
                style={{ borderColor: 'var(--c-line)', background: 'var(--c-bg3)' }}>
                <div className="text-center">
                  <p className="th-fg2 text-[12px] md:text-[14px] font-heading font-light leading-[1.9] tracking-wide italic">
                    "We don't design for trends.<br />We design for the person<br />who already knows."
                  </p>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <span className="w-3 h-[0.5px]" style={{ background: 'var(--c-gold3)' }} />
                    <span className="th-gold2 text-[7px] tracking-[0.4em] uppercase">LOWKEY Studio</span>
                    <span className="w-3 h-[0.5px]" style={{ background: 'var(--c-gold3)' }} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Archive — grid */}
        {activeTab === 'Archive' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {['/images/product1.jpg', '/images/product2.jpg', '/images/texture.jpg', '/images/product3.jpg', '/images/product4.jpg', '/images/hero.jpg'].map((src, i) => (
              <div key={i} className="group cursor-pointer tap-sm">
                <div className="aspect-square overflow-hidden" style={{ background: 'var(--c-bg3)' }}>
                  <img src={src} alt={`Archive ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[1.4s]"
                    style={{ filter: `brightness(var(--c-img))` }} />
                </div>
                <p className="mt-2 th-fg4 text-[8px] tracking-[0.3em] uppercase">{String(i + 1).padStart(3, '0')}</p>
              </div>
            ))}
          </motion.div>
        )}

        {/* Visual Diary — full width mood images */}
        {activeTab === 'Visual Diary' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
            className="space-y-3 md:space-y-4">
            {[
              { src: '/images/hero.jpg', caption: 'Quiet moments. Port Said.' },
              { src: '/images/drop001.jpg', caption: 'Studio. Spring 2025.' },
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer tap-sm">
                <div className="aspect-[21/9] overflow-hidden" style={{ background: 'var(--c-bg3)' }}>
                  <img src={item.src} alt={item.caption}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-[1.8s]"
                    style={{ filter: `brightness(var(--c-img))` }} />
                </div>
                <p className="mt-3 th-fg3 text-[9px] tracking-[0.2em] font-light italic">{item.caption}</p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
