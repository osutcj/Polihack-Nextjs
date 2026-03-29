"use client";

import { Layout } from "antd";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import styles from "@/styles/Register.module.scss";

const { Header, Content } = Layout;

export default function RegisterSection() {
  return (
    <>
      <Header className={styles.header}></Header>
      <Content className={styles.content} id="background">
        <div className={styles.formContainer}>
          <iframe
            className={styles.form}
            src="https://forms.gle/EQrxtDr8uhcBnKyg9"
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
