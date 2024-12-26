"use client"
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/ELMFH" },
  { icon: <BsWhatsapp />, path: "https://wa.me/+212617735607" },
  { icon: <SiGmail />, path: "mailto:elmehdielfhaili@gmail.com" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/el-mehdi-el-fhaili-041b55295",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <>
            <div
              onClick={() =>
                window.open(item.path, "_blank", "noopener,noreferrer")
              }
              key={index}
              className={iconStyles}
            >
              {item.icon}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Socials;
