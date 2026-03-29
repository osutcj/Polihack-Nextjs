"use client";

import { Layout } from "antd";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { pastEditionBanner, pastEditionCarouselImages } from "@/data/past-editions";
import styles from "@/styles/PastEdition.module.scss";

const { Header, Content } = Layout;

export default function PastEditionPage() {
  return (
    <>
      <Header className={styles.header}></Header>
      <Content className={styles.content}>
        <div className={styles.bannerContainer}>
          <img className={styles.bannerImage} src={pastEditionBanner} alt="V17 EDITION" />
          <div className={styles.typewriter}>
            <h1>POLHACK V.17 EDITION!</h1>
          </div>
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
        <div className={styles.webWinnersSection}>
          <h1 className={styles.headingHover}>Web Winners</h1>
        </div>
      </Content>
      <Footer />
    </>
  );
}
