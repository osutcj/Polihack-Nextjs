"use client";

import {
  FacebookFilled,
  InstagramOutlined,
  TikTokOutlined,
  LinkedinFilled,
  MailOutlined,
} from "@ant-design/icons";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        {/* Top Content */}
        <div className="row">
          <div className="col-6 col-lg-2 col-sm-6 d-flex justify-content-center">
            {/* UTCN */}
            <a
              className="hover-image"
              href="https://www.utcluj.ro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="align-center UTCN_Logo"
                src="/assets/Logos/UTCNWhite.png"
                alt="UTCN Logo"
              />
            </a>
          </div>
          <div className="col-6 col-lg-1 col-sm-6 d-flex justify-content-center">
            {/* OSUT */}
            <a
              className="hover-image"
              href="https://osut.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="align-center OSUT_Logo"
                src="/assets/Logos/OSUTWhite.png"
                alt="OSUT Logo"
              />
            </a>
          </div>
          <div className="col-lg-4 col-sm-12 d-none d-lg-block"></div>
          <div className="col-12 col-lg-3 col-sm-12 p-0">
            <div className="social-icons-container">
              {/* Facebook */}
              <div className="p-2 p-lg-3 mt-2 mt-lg-3 footer-icon-social hover-image">
                <a
                  href="https://www.facebook.com/PoliHack.OSUT"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookFilled className="w-100" />
                </a>
              </div>

              {/* Instagram */}
              <div className="p-2 p-lg-3 mt-2 mt-lg-3 footer-icon-social hover-image">
                <a
                  href="https://www.instagram.com/polihack.osut/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramOutlined className="w-100" />
                </a>
              </div>

              {/* TikTok */}
              <div className="p-2 p-lg-3 mt-2 mt-lg-3 footer-icon-social hover-image">
                <a
                  href="https://www.tiktok.com/@polihack.osut"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TikTokOutlined className="w-100" />
                </a>
              </div>

              {/* LinkedIn */}
              <div className="p-2 p-lg-3 mt-2 mt-lg-3 footer-icon-social hover-image">
                <a
                  href="https://www.linkedin.com/in/polihack-6b767a335/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinFilled className="w-100" />
                </a>
              </div>

              {/* Mail */}
              <div className="p-2 p-lg-3 mt-2 mt-lg-3 footer-icon-social hover-image">
                <a href="mailto:polihhack@osutcluj.com" target="_blank" rel="noopener noreferrer">
                  <MailOutlined className="w-100" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="row mt-4">
          {/* Left Content */}
          <div className="col-12 col-md-3 d-flex justify-content-center">
            <div className="left-content hover-image">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <img
                  className="img-fluid footer-image align-center"
                  src="/assets/LogoText.png"
                  alt="Logo"
                />
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-12 col-md-8 d-flex justify-content-center">
            <div className="right-content">
              <h3 className="text-white contact-section text-bold">
                Contact Info
              </h3>
              <p className="text-white contact-info text-bold">
                Andreea Arimia - BC Responsible
              </p>
              <p className="text-white contact-info">
                Phone number: +40 762 385 168
              </p>
              <p className="text-white contact-info">
                Email: andreea.arimia@osutcluj.com
              </p>
              <p className="text-white contact-info text-bold">
                Iulian Chirilă - Coordinator
              </p>
              <p className="text-white contact-info">
                Phone number: +40 746 375 020
              </p>
              <p className="text-white contact-info">
               Email: iulian.chirila@osutcluj.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
