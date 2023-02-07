import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import avatarPic from "../images/profile-pic.jpeg";

const greeting = "Hello, I am Laya!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";


const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#658864"
  >
  <VStack spacing={12}>
  <Avatar size="2xl" src={avatarPic} name="Laya Aminosharei" />
  <Heading size="md">
  {greeting}
  </Heading>
  <VStack spacing={6}>
  <Heading size="3xl">
  {bio1}
  </Heading>
  <Heading size="3xl">
  {bio2}
  </Heading>
  </VStack>
  </VStack>
  </FullScreenSection>
);

export default LandingSection;
