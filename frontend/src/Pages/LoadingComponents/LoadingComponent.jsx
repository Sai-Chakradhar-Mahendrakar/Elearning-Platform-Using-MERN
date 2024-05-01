import React from "react";
import "./loading.css";
import "./loadingSkeleton.css";
import { Box, Flex } from "@chakra-ui/react";
const LoadingComponent = () => {
  return (
    <Flex
      direction={"column"}
      p={4}
      m={2}
      _hover={{ cursor: "pointer" }}
      fontSize={{base:'1rem',lg:"1.2rem"}}
      boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'
    >
      <span className="loaderSkeleton"></span>
      <Box>
        <span className="loader">Loading...</span>
      </Box>
    </Flex>
  );
};

export default LoadingComponent;
