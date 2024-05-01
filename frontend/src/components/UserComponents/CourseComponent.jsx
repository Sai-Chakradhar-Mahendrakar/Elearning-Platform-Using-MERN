import React from "react";
import { Box, Heading, Stack, Wrap, WrapItem } from "@chakra-ui/react";
import LandingPageCarousel from "../../Pages/LandingPageComponents/LandingPageCarousel";
import InProgressCarousel from "./InProgressCarousel";
// import LandingPageCarousel from '../'
const CourseComponent = () => {
  return (
    <Box p={4}>
      <Stack spacing={4} mb={4}>
        <Heading as="h2" size="lg">
          All Courses
        </Heading>
        <Wrap spacing={4}>
          <LandingPageCarousel />
        </Wrap>
      </Stack>

      <Stack spacing={4} mb={4}>
        <Heading as="h2" size="lg">
          In Progress Courses
        </Heading>
        <Wrap spacing={4}>
          <InProgressCarousel />
        </Wrap>
      </Stack>
      <Stack spacing={4} mb={4}>
        <Heading as="h2" size="lg">
          Top courses in Business
        </Heading>
        <Wrap spacing={4}>
          <LandingPageCarousel />
        </Wrap>
      </Stack>
      <Stack spacing={4} mb={4}>
        <Heading as="h2" size="lg">
          Top courses in IT & Software
        </Heading>
        <Wrap spacing={4}>
          <LandingPageCarousel />
        </Wrap>
      </Stack>
      <Stack spacing={4} mb={4}>
        <Heading as="h2" size="lg">
          Top courses in Personal Development
        </Heading>
        <Wrap spacing={4}>
          <LandingPageCarousel />
        </Wrap>
      </Stack>
    </Box>
  );
};

export default CourseComponent;
