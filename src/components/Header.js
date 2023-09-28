import { Box, HStack } from "@chakra-ui/react";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useScrollDirection from "../hooks/useScrollDirection";

const socials = [
  {
    name: "Send Email",
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    name: "GitHub",
    icon: faGithub,
    url: "https://github.com",
  },
  {
    name: "LinkedIn",
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    name: "Medium",
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    name: "StackOverflow",
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const { dir } = useScrollDirection();

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transform={dir === "up" ? "translateY(0px)" : "translateY(-200px)"}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            {socials.map((val) => {
              return (
                <a
                  href={val.url}
                  key={val.url}
                  target="_blank"
                  style={{ margin: "0 20px 0 0" }}
                  rel="noreferrer"
                  title={val.name}
                >
                  <FontAwesomeIcon icon={val.icon} size="2x" />
                </a>
              );
            })}
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="/#projects" onClick={handleClick("projects")}>
                Projects
              </a>
              <a href="/#contact-me" onClick={handleClick("contactme")}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
