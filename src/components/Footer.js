import React from "react";
import {Box, Flex} from "@chakra-ui/react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Box backgroundColor="#DDDDDD">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="#658864"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>Laya Aminosharei • © {year}</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
