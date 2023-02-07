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
  <Avatar size="2xl" src={avatarPic} name="Laya Aminosharei" margin="30px" />
  <VStack>
  <Heading size="md">
  {greeting}
  </Heading>
  <br />
  <br />
  <Heading size="3xl" lineHeight="md">
  {bio1}
  <br />
  {bio2}
  </Heading>
  </VStack>
  </FullScreenSection>
);

export default LandingSection;
