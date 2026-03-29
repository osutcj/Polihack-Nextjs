"use client";

import { useEffect, useState } from "react";
import { Layout } from "antd";
import AboutSection from "@/features/about/AboutSection";
import CurrentEditionSection from "@/features/current-edition/CurrentEditionSection";
import Footer from "@/components/Footer";
import Sponsors from "@/components/Sponsors";
import Stats from "@/components/Stats";
import styles from "@/styles/Home.module.scss";

const { Header, Content } = Layout;

const COUNTDOWN_TARGET = new Date("2026-04-24T16:00:00+03:00").getTime();

function formatCountdown(target) {
  const now = new Date().getTime();
  const distance = target - now;

  if (distance <= 0) {
    return "Hackathon Has Started!";
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

export default function HomePage() {
  const [countdown, setCountdown] = useState(() => formatCountdown(COUNTDOWN_TARGET));

  useEffect(() => {
    const interval = window.setInterval(() => {
      const nextValue = formatCountdown(COUNTDOWN_TARGET);
      setCountdown(nextValue);
      if (nextValue === "Hackathon Has Started!") {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header className={styles.header}></Header>
      <Content className={styles.content}>
        <section className={styles.hero}>
          <img className={styles.imageFluid} src="/assets/MainBanner.gif" alt="Main Banner" />
          <div className={styles.heroContent}>
            <h1 className={styles.heading}>#Engineering the future!</h1>
            <img className={styles.logo} src="/assets/Logos/LogoWhite.png" alt="Logo PoliHack" />
            <h1 className={styles.heading}>Hackathon starts in:</h1>
            <p className={styles.timer} id="timer" role="timer" aria-live="polite" suppressHydrationWarning>{countdown}</p>
          </div>
        </section>
        <div className={styles.descriptionSection}>
          <h1 className={styles.headingHover}>What Is PoliHack?</h1>
          <p className={styles.description}>
            PoliHack is a 48-hour hackathon that brings together high school and
            university students for an unforgettable experience of innovation,
            teamwork, and creativity.
            <br />
            Now reaching its 18th edition, the event unfolds over three intense
            days filled with learning, collaboration, and opportunities to turn
            ideas into reality.
            <br />
            Organized by the Student Organization of the Technical University of
            Cluj-Napoca (OSUT Cluj), PoliHack encourages participants to
            collaborate with esteemed mentors from both industry and academia,
            offering an authentic experience similar to what they would
            encounter in big companies.
            <br />
            Whether you&apos;re an experienced coder or just taking your first
            steps into tech, all you need is a team of 3-5 passionate minds.
            Our mentors will be there to guide, inspire, and support you as you
            bring your ideas to life.
          </p>
        </div>
      {/* <Sponsors />*/}
        <Stats />
        <AboutSection />
        <CurrentEditionSection />
      </Content>
      <Footer />
    </>
  );
}
