"use client";

import { Col, Layout, Row } from "antd";
import CategoryCard from "@/components/CategoryCard";
import Carousel from "@/components/Carousel";
import TeamCard from "@/components/TeamCard";
import { networkingImages, teamMembers } from "@/data/about";
import styles from "@/styles/About.module.scss";

const { Header, Content } = Layout;

export default function AboutSection() {
  return (
    <>
      <Header className={styles.header}></Header>
      <Content className={styles.content}>
        <div className={styles.textSection}>
          <h1 className={styles.headingHover}>Here is what we do</h1>
          <p className={styles.text}>
            Are you a high school or university student passionate about coding
            or innovation? Get ready to turn your ideas into reality at
            PoliHack!
          </p>
          <p className={styles.text}>
            This hackathon is an unforgettable experience full of coding
            challenges, trainings, and teamwork. Build your project from scratch
            with your team, and make the most of the guidance provided by expert
            mentors whenever you need it. When it&apos;s time to take a break,
            our chill zones give you the perfect space to recharge.
          </p>
          <p className={styles.text}>
            With five exciting categories, there&apos;s a challenge for everyone:
            whether you&apos;re into web design, app development, embedded
            systems, cybersecurity, or just starting your tech journey,
            you&apos;ll find your place at PoliHack!
          </p>
        </div>
        <div className={styles.categoriesSection}>
          <h1 className={styles.headingHover}>Categories</h1>
          <CategoryCard
            title="App Development"
            icon="MobileOutlined"
            description="Redefine mobile interaction by transforming your ideas into functional, cutting-edge applications. Whether targeting iOS, Android, or cross-platform environments, this category lets you showcase coding skills while thinking about real-world user needs."
          />
          <CategoryCard
            title="Cybersecurity"
            icon="SafetyCertificateOutlined"
            description="Embrace the digital frontier by protecting digital assets and networks from threats. Explore the world of cybersecurity, develop robust defense mechanisms, and implement smart security solutions to safeguard the digital realm. You&apos;ll learn to think like both a defender and a problem-solver, understanding real-world challenges in digital security."
          />
          <CategoryCard
            title="Embedded Systems"
            icon="AlertOutlined"
            description="Dive into the world of smart devices and advanced hardware solutions. Create projects that demonstrate creativity, technical skill, and innovation in shaping technology for everyday life. This category is perfect for exploring sensors, microcontrollers, and IoT concepts, turning ambitious ideas into tangible devices."
          />
          <CategoryCard
            title="Web Development"
            icon="MenuUnfoldOutlined"
            description="Build captivating digital experiences by designing and developing innovative, browser-friendly websites.This category encourages creativity, problem-solving, and exploring the latest web technologies to craft something truly memorable."
          />
          <CategoryCard
            title="Junior"
            icon="UserOutlined"
            description="Designed for high school students, this category is a launchpad to explore web development, app development, embedded systems, and cybersecurity. Gain real-world experience, showcase creativity, and discover your passion for technology. Junior participants will get guidance tailored to their level, making it a perfect start for their journey into tech."
          />
        </div>
        <div className={styles.networkingSection}>
          <h1 className={styles.headingHover}>Networking</h1>
          <p className={styles.text}>
            Meet mentors, participants, and tech professionals, share
            experiences, and build connections that last long after the event.
            Whether you arrive with a concrete idea or just the desire to learn,
            networking expands your horizons and makes you part of a passionate
            innovation community.
          </p>
          <Carousel images={networkingImages} autoplay={false} />
          <p className={styles.text}>
            At PoliHack, every conversation could be the start of a new
            adventure. Connect, collaborate, and leave your mark.
          </p>
        </div>
        <div className={styles.teamSection}>
          <h1 className={styles.headingHover}>Meet the team</h1>
          <Row className={styles.teamRow} justify="center" gutter={[32, 32]}>
            {teamMembers.slice(0, 3).map((member) => (
              <Col key={member.name} span={8} md={8} sm={24} xs={24}>
                <TeamCard {...member} />
              </Col>
            ))}
          </Row>
          <Row className={styles.teamRow} justify="center" gutter={[32, 32]}>
            {teamMembers.slice(3).map((member) => (
              <Col key={member.name} span={6} md={6} sm={12} xs={24}>
                <TeamCard {...member} />
              </Col>
            ))}
          </Row>
        </div>
      </Content>
    </>
  );
}
