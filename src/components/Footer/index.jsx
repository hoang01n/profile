import React from "react";
import Logo from "../Logo";
import {Link} from "react-router-dom";
import {FaFacebook} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {
  FooterContainer,
  FooterCoppy,
  FooterInner,
  FooterItem,
  FooterList,
  FooterSocial,
  FooterTop,
} from "./Footer";
import {FaLinkedin} from "react-icons/fa6";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInner>
        <FooterTop>
          <Logo />
          <FooterSocial>
            <FooterList>
              <FooterItem>
                <a href="https://github.com/hoang01n">
                  <FaGithub size={20} />
                </a>
              </FooterItem>
              <FooterItem>
                <a href="https://www.facebook.com/lehoang13.11/">
                  <FaFacebook size={20} />
                </a>
              </FooterItem>
              <FooterItem>
                <a href="https://www.linkedin.com/in/le-ngoc-hoang-41a549289/">
                  <FaLinkedin size={20} />
                </a>
              </FooterItem>
            </FooterList>
          </FooterSocial>
          <FooterCoppy>
            Copyright &copy; 2024 Made with ❤️ by <span>Ngoc Hoang</span>{" "}
          </FooterCoppy>
        </FooterTop>
      </FooterInner>
    </FooterContainer>
  );
};

export default Footer;
