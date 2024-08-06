import React from "react";
import {Title} from "../../../components/UIElements/TitlePrimary/TitlePrimary";
import {CONTACT} from "../../../Constants/contact";
import {
  ContactContainer,
  ContactInner,
  ContactSubTitle,
  ContactWrap,
} from "./ContactSection";
import ConTactItem from "../ContactItem";
// import {MdOutlineHeadphones, MdLocationPin} from "react-icons/md";
// import {FaRegEnvelope} from "react-icons/fa";

const ContactSection = () => {
  //   const CONTACT = [
  //     {
  //       title: "Contact With Phone Number",
  //       description: "0354888977",
  //       icon: <MdOutlineHeadphones size={28} />,
  //     },
  //     {
  //       title: "Email Address",
  //       description: "bon.nguyentranvn@gmail.com",
  //       icon: <FaRegEnvelope size={28} />,
  //     },
  //     {
  //       title: "Location",
  //       description:
  //         "Huynh Tan Phat Street, Tan Phu Ward, District 7, City. Ho Chi Minh City",
  //       icon: <MdLocationPin size={28} />,
  //     },
  //   ];
  return (
    <ContactContainer>
      <ContactInner>
        <Title> Contact Me </Title>
        <ContactSubTitle>Feel free to contact me </ContactSubTitle>
        <ContactWrap>
          {CONTACT.map((props, id) => (
            <ConTactItem key={id} {...props} />
          ))}
        </ContactWrap>
      </ContactInner>
    </ContactContainer>
  );
};

export default ContactSection;
