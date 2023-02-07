import { Heading, Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box bg="#DDDDDD" borderRadius='lg'>
    <VStack>
    <Image borderRadius="lg" src={imageSrc} />
    <Box padding="20px">
    <Heading as="h5" size="md" color="black">{title}</Heading>
    <Text color="gray.600">{description}</Text>
    <Box color="black" padding="5px">
    <a href="#projects" >See more <FontAwesomeIcon icon= { faArrowRight } size="1x" /></a>
    </Box>
    </Box>
    </VStack>
    </Box>
  );
};

export default Card;
