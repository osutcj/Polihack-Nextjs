"use client";

import { useState } from "react";
import { Avatar, Carousel, Modal } from "antd";
import { testimonials } from "@/data/testimonials";

function Testimonials() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const showModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        <Carousel autoplay className="testimonials-carousel">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-slide">
              <div className="testimonial-card">
                <div
                  className="testimonial-image-container"
                  onClick={() => showModal(testimonial)}
                >
                  <Avatar
                    src={testimonial.image}
                    size={150}
                    className="testimonial-image"
                  />
                  <div className="image-overlay">
                    <span>Click to view</span>
                  </div>
                </div>
                <div className="testimonial-content">
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-text">"{testimonial.testimonial}"</p>
                  <div className="testimonial-info">
                    <p className="testimonial-status">{testimonial.status}</p>
                    <p className="testimonial-company">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <Modal
        title={selectedTestimonial?.name}
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        className="testimonial-modal"
      >
        {selectedTestimonial && (
          <div className="modal-content">
            <div className="modal-image-container">
              <img
                src={selectedTestimonial.image}
                alt={selectedTestimonial.name}
                className="modal-image"
              />
            </div>
            <div className="modal-testimonial-content">
              <h2>{selectedTestimonial.name}</h2>
              <p className="modal-testimonial">
                "{selectedTestimonial.testimonial}"
              </p>
              <div className="modal-info">
                <p className="modal-status">
                  <strong>Role </strong> {selectedTestimonial.status}
                </p>
                <p className="modal-company">
                  <strong>Company or team </strong> {selectedTestimonial.company}
                </p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Testimonials;
