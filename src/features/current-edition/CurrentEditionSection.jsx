"use client";

import { Col, Layout, Row } from "antd";
import Document from "@/components/Document";
import { currentEditionDocuments } from "@/data/current-edition";
import styles from "@/styles/CurrentEdition.module.scss";

const { Header, Content } = Layout;

export default function CurrentEditionSection() {
  const {
    bannerImage,
    regulationsLink,
    regulationsSingleLink,
    acordLink,
  } = currentEditionDocuments;

  return (
    <>
      <Header className={styles.header}></Header>
      <Content className={styles.content}>
        {/* <div className={styles.judgesSection}>
          <h1 className={styles.headingHover}>Judges</h1>
          <Slider
            slides={judgesObjects}
            displayCount={3}
            autoplay={true}
            displayTime={4000}
          />
        </div>

        <div className={styles.mentorsSection}>
          <h1 className={styles.headingHover}>Mentors</h1>
          <Slider
            slides={mentorsObjects}
            displayCount={3}
            autoplay={true}
            displayTime={4500}
          />
        </div>

        <div className={styles.volunteersSection}>
          <h1 className={styles.headingHover}>Volunteers</h1>
          <Slider
            slides={volunteersObjects}
            displayCount={3}
            autoplay={true}
            displayTime={5000}
          />
        </div> */}

        <div className={styles.documentsSection}>
          <h1 className={styles.headingHover}>You should read</h1>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={12} lg={12}>
              <Document title="REGULATIONS" source={regulationsLink} image={bannerImage} />
            </Col>
              <Col xs={24} sm={12} md={12} lg={12}>
              <Document title="PARENTAL CONSENT" source={acordLink} image={bannerImage} />
            </Col>
          </Row>

         
        </div>
      </Content>
    </>
  );
}
