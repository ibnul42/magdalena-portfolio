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
              <strong>Name:</strong> Magdalena Maria Miedlar
            </p>
            <p className="mb-1">
              <strong>Address:</strong> Kościuszki 18, Grudziądz, 86-302
              Kujawsko-Pomorskie, Poland
            </p>
            <p className="mb-0">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:fudgima78@gmail.com"
                className="text-decoration-light text-light"
              >
                fudgima78@gmail.com
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
