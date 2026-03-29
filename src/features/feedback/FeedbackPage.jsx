"use client";

import { Layout } from "antd";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import styles from "@/styles/Feedback.module.scss";

const { Header, Content } = Layout;

export default function FeedbackPage() {
  return (
    <>
      <Header className={styles.header}></Header>
      <Content className={styles.content} id="background">
        <div className={styles.formContainer}>
          <iframe
            className={styles.form}
            src="https://docs.google.com/forms/d/e/1FAIpQLSe7UsnfNKoZYfhPPdDzdxwB_XFSP_g0TCpKb9q3YpQSB6bceg/viewform?embedded=true"
            width="940"
            height="1250"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            <Loading />
          </iframe>
        </div>
      </Content>
      <Footer />
    </>
  );
}
