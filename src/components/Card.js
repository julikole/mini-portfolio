import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
      <VStack
        bg="#fff"
        borderRadius="15px"
        color="#000"
        minWidth={300}
      >
        <Image src={imageSrc} borderTopRadius="15px" />
        <VStack padding="20px" spacing={6} align="start">
          <Heading as="h3">{title}</Heading>
          <Text as="p">{description}</Text>
          <Text as="button" fontWeight="bold">
            See More <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </Text>
        </VStack>
      </VStack>
  );
};

export default Card;
