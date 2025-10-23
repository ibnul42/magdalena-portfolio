import React from "react";

const Footer = () => {
  return (
    <footer className="text-dark py-4 mt-4 ">
      <div className="container">
        <div className="row">
          {/* Contact Info */}
          <div className="col-md-6 mb-3">
            <h5 className="mb-3 fs-2">Contact Information</h5>
            <p className="mb-1">
              <strong>Name:</strong> Matthew Withey
            </p>
            <p className="mb-1">
              <strong>Address:</strong> via separide, Napoli, Campania, Italy, 80132
            </p>
            <p className="mb-1">
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+393509418437"
                className="text-decoration-light text-light"
              >
                +39 350 941 8437
              </a>
            </p>
            <p className="mb-0">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:tootron80@gmail.com "
                className="text-decoration-light text-light"
              >
                tootron80@gmail.com{" "}
              </a>
            </p>
          </div>

          {/* Copyright */}
          <div className="col-md-6 d-flex align-items-end justify-content-md-end text-md-end">
            <p className="mb-0 small">
              © 2025 All rights reserved by Viktoriia Honcharova
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
