import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/ivonamojsovska/"
        rel="noreferrer"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/ivonamojsovska"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.instagram.com/shevonnekaraiv/"
        rel="noreferrer"
        target="_blank"
      >
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
