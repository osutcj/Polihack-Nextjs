"use client";

import { useEffect, useState } from "react";
import { Layout } from "antd";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import {
  editionDetails,
  editionOrder,
  pastEditionCarouselImages,
} from "@/data/past-editions";
import styles from "@/styles/PastEditionsTwo.module.scss";

const { Header, Content } = Layout;

function AnimatedStat({ label, value, triggerKey }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const target = Number(value);
    if (Number.isNaN(target)) {
      setDisplayValue(value);
      return;
    }

    const duration = 900;
    const frameRate = 1000 / 60;
    const increment = Math.max(1, Math.ceil((target * frameRate) / duration));
    let current = 0;

    setDisplayValue(0);
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setDisplayValue(current);
    }, frameRate);

    return () => clearInterval(interval);
  }, [value, triggerKey]);

  return (
    <div className={styles.stat}>
      <span>{label}</span>
      <strong>{displayValue}</strong>
    </div>
  );
}

export default function PastEditionsTwoPage() {
  const [activeEdition, setActiveEdition] = useState("v18");
  const activeEditionDetails = editionDetails[activeEdition];

  return (
    <>
      <Header className={styles.header}></Header>
      <Content className={styles.content}>
        <div style={{ backgroundColor: "transparent", height: "4rem", width: "100%" }}></div>
        <section className={styles.pastEditionTwoSection}>
          <div className={styles.pastEditionTwoHeader}>
            <h1 className={styles.headingHover}>Relive the last editions</h1>
            <p className={styles.sectionIntro}>
              Toggle between v.15 - v.18 to see the winning teams, core metrics,
              and standout learnings. Update the copy anytime straight from this
              data block.
            </p>
          </div>
          <nav className={styles.editionTabs} aria-label="Past edition selector">
            {editionOrder.map((editionKey) => {
              const edition = editionDetails[editionKey];
              const isActive = activeEdition === editionKey;
              return (
                <button
                  type="button"
                  key={editionKey}
                  className={`${styles.editionTab} ${
                    isActive ? styles.editionTabActive : ""
                  }`}
                  onClick={() => setActiveEdition(editionKey)}
                >
                  {edition.label}
                </button>
              );
            })}
          </nav>
          <div className={styles.editionPanel}>
            <div className={styles.editionSummaryCard}>
              <span className={styles.editionBadge}>{activeEditionDetails.year}</span>
              <h2>{activeEditionDetails.title}</h2>
              <p className={styles.editionHeroText}>{activeEditionDetails.heroText}</p>
              <div className={styles.editionMeta}>
                <div>
                  <span>Dates</span>
                  <strong>{activeEditionDetails.dates}</strong>
                </div>
                <div>
                  <span>Location</span>
                  <strong>{activeEditionDetails.location}</strong>
                </div>
              </div>
            </div>
            <div className={styles.quickStatsCard}>
              <h3>Quick Stats</h3>
              <div className={styles.statsRow}>
                {activeEditionDetails.stats.map((stat) => (
                  <AnimatedStat
                    key={stat.label}
                    label={stat.label}
                    value={stat.value}
                    triggerKey={activeEdition}
                  />
                ))}
              </div>
            </div>
            <div className={styles.winnersSection}>
              <h2>Winners</h2>
              <div className={styles.winnerCategories}>
                {activeEditionDetails.winnerCategories.map((winner) => (
                  <article key={winner.category} className={styles.winnerCategory}>
                    {winner.image && (
                      <div className={styles.winnerImageWrapper}>
                        <img src={winner.image} alt={`${winner.team} team`} />
                      </div>
                    )}
                    <span>{winner.category}</span>
                    <strong>{winner.team}</strong>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
        <div className={styles.webWinnersSection}>
          <h1 className={styles.headingHover}>Web Winners</h1>
        </div>
        <div className={styles.testimonialsSection}>
          <h1 className={styles.headingHover}>Testimonials</h1>
          <p className={styles.testimonialsText}>
            Join the excitement of our hackathon! A dynamic event where
            innovators, developers, and creatives collaborate to build
            groundbreaking solutions. See what past participants, mentors and
            judges have to say about their experience!
          </p>
          <Testimonials />
        </div>
        <div className={styles.carouselContainer}>
          <h1 className={styles.headingHover}>See how is like</h1>
          <p className={styles.carouselText}>
            Every edition of PoliHack brings something new! Our goal is to
            innovate, create and redefine the future, all while having fun in
            the process. Join us for this exciting new edition and be part of
            the next big breakthrough!
            <br />
            Following this, PoliHack v.16 was held from December 5-8, 2024,
            welcoming creative teams who brought their ideas to life as real
            prototypes. Participants again worked on their own projects,
            benefited from mentor support, and presented their work to an
            experienced jury. This edition also included a Networking Night,
            offering valuable opportunities to meet fellow innovators, sponsors,
            and tech professionals.
          </p>
          <Carousel images={pastEditionCarouselImages} />
        </div>
      </Content>
      <Footer />
    </>
  );
}
