import React, { useState } from "react";

const NavContent = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <a href="#home" className="logo" onClick={close}>
        Dhiraj Kumar.
      </a>

      <div className={`navLinks${open ? " open" : ""}`}>
        <a href="#home" onClick={close}>Home</a>
        <a href="#work" onClick={close}>Work</a>
        <a href="#timeline" onClick={close}>Experience</a>
        <a href="#service" onClick={close}>Highlights</a>
        <a href="#testimonial" onClick={close}>Skills</a>
        <a href="#contact" onClick={close}>Contact</a>
        <a href="mailto:dk194945@gmail.com" className="emailLink" onClick={close}>
          <button>Email</button>
        </a>
      </div>

      <button
        type="button"
        className={`hamburger${open ? " open" : ""}`}
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </>
  );
};

const Header = () => (
  <nav>
    <NavContent />
  </nav>
);

export default Header;
