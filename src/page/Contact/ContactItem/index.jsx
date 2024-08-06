import React from "react";
import {
  ContactItemBox,
  ContactItemIcon,
  ContactItemInner,
  ContactItemTitle,
} from "./ContactItem";
import {ContactItemContent} from "./ContactItem";
import {MdOutlineHeadphones, MdLocationPin} from "react-icons/md";
import {FaRegEnvelope} from "react-icons/fa";

const ConTactItem = ({icon, title, description}) => {
  //   const CONTACT = [
  //     {
  //       title: "Contact With Phone Number",
  //       description: "0343035087",
  //       icon: <MdOutlineHeadphones size={28} />,
  //     },
  //     {
  //       title: "Email Address",
  //       description: "hoang01n@gmail.com",
  //       icon: <FaRegEnvelope size={28} />,
  //     },
  //     {
  //       title: "Location",
  //       description:
  //         "36 Street, Linh Dong Ward, District Thu Duc, City. Ho Chi Minh City",
  //       icon: <MdLocationPin size={28} />,
  //     },
  //   ];

  return (
    <ContactItemBox>
      <ContactItemIcon className="icon-address">{icon}</ContactItemIcon>
      <ContactItemInner>
        <ContactItemTitle>{title}</ContactItemTitle>
        <ContactItemContent>{description}</ContactItemContent>
      </ContactItemInner>
    </ContactItemBox>
  );
};

export default ConTactItem;
