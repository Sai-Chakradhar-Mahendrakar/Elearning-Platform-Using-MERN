import { Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";

const Section5 = () => {
  return (
    <Flex
      direction={"column"}
      p={{
        base:"10px",
        sm: "20px",
        md: "40px",
        lg: "60px",
        xl: "80px",
      }}
      gap={10}
    >
      <Flex>
        <Text
          fontSize={{
            sm: "3xl",
            md: "3xl",
            lg: "4xl",
            xl: "4xl",
          }}
          fontWeight={"semibold"}
        >
          Explore Courses
        </Text>
      </Flex>
      <Flex>
        <Grid
          w={"100%"}
          templateColumns={{
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          gap={{
            base:"5",
            sm: "3",
            md: "4",
            lg: "5",
            xl: "6",
          }}
        >
          <Flex
            w="100%"
            h="20"
            gap={2}
            boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
            _hover={{
              boxShadow: "rgba(40, 40, 42, 0.3) 0px 7px 29px 0px",
              cursor: "pointer",
            }}
          >
            <Flex width={"25%"}>
              <Image
                width="120%"
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/data_science.png?auto=format%2Ccompress&dpr=1&fit=crop&h=100"
                alt=""
                objectFit="fill"
              />
            </Flex>
            <Flex justifyContent="center" direction="column">
              <Text fontSize="12px" fontFamily="poppins" fontWeight="semibold">
                Data Science
              </Text>

              <Text
                fontSize="12px"
                color="#707070"
                fontFamily="poppins"
                fontWeight="semibold"
              >
                425 Courses
              </Text>
            </Flex>
          </Flex>
          <Flex
            w="100%"
            h="20"
            gap={2}
            boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
            _hover={{
              boxShadow: "rgba(40, 40, 42, 0.3) 0px 7px 29px 0px",
              cursor: "pointer",
            }}
          >
            <Flex width={"25%"}>
              <Image
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/business.png?auto=format%2Ccompress&dpr=1&fit=crop&h=100"
                alt=""
                objectFit={"fill"}
              />
            </Flex>
            <Flex justifyContent="center" direction="column">
              <Text fontSize="12px" fontFamily="poppins" fontWeight="semibold">
                Business
              </Text>

              <Text
                fontSize="12px"
                color="#707070"
                fontFamily="poppins"
                fontWeight="semibold"
              >
                1395 Courses
              </Text>
            </Flex>
          </Flex>
          <Flex
            w="100%"
            h="20"
            gap={2}
            boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
            _hover={{
              boxShadow: "rgba(40, 40, 42, 0.3) 0px 7px 29px 0px",
              cursor: "pointer",
            }}
          >
            <Flex width={"25%"}>
              <Image
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/computer_science.png?auto=format%2Ccompress&dpr=1&fit=crop&h=100"
                alt=""
                objectFit="fill"
              />
            </Flex>
            <Flex justifyContent="center" direction="column">
              <Text fontSize="12px" fontFamily="poppins" fontWeight="semibold">
                Computer Science
              </Text>

              <Text
                fontSize="12px"
                color="#707070"
                fontFamily="poppins"
                fontWeight="semibold"
              >
                668 Courses
              </Text>
            </Flex>
          </Flex>
          <Flex
            w="100%"
            h="20"
            gap={2}
            boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
            _hover={{
              boxShadow: "rgba(40, 40, 42, 0.3) 0px 7px 29px 0px",
              cursor: "pointer",
            }}
          >
            <Flex width={"25%"}>
              <Image
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/social_sciences.png?auto=format%2Ccompress&dpr=1&fit=crop&h=100"
                alt=""
                objectFit="fill"
              />
            </Flex>
            <Flex justifyContent="center" direction="column">
              <Text fontSize="12px" fontFamily="poppins" fontWeight="semibold">
                Health
              </Text>

              <Text
                fontSize="12px"
                color="#707070"
                fontFamily="poppins"
                fontWeight="semibold"
              >
                471 Courses
              </Text>
            </Flex>
          </Flex>
          <Flex
            w="100%"
            h="20"
            gap={2}
            boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
            _hover={{
              boxShadow: "rgba(40, 40, 42, 0.3) 0px 7px 29px 0px",
              cursor: "pointer",
            }}
          >
            <Flex width={"25%"}>
              <Image
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/personal_development.png?auto=format%2Ccompress&dpr=1&fit=crop&h=100"
                alt=""
                objectFit="fill"
              />
            </Flex>
            <Flex justifyContent="center" direction="column">
              <Text fontSize="12px" fontFamily="poppins" fontWeight="semibold">
                Social Sciences
              </Text>

              <Text
                fontSize="12px"
                color="#707070"
                fontFamily="poppins"
                fontWeight="semibold"
              >
                300 Courses
              </Text>
            </Flex>
          </Flex>
          <Flex
            w="100%"
            h="20"
            gap={2}
            boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
            _hover={{
              boxShadow: "rgba(40, 40, 42, 0.3) 0px 7px 29px 0px",
              cursor: "pointer",
            }}
          >
            <Flex width={"25%"}>
              <Image
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/arts_and_humanities.png?auto=format%2Ccompress&dpr=1&fit=crop&h=100"
                alt=""
                objectFit="fill"
              />
            </Flex>
            <Flex justifyContent="center" direction="column">
              <Text fontSize="12px" fontFamily="poppins" fontWeight="semibold">
                Personal Development
              </Text>

              <Text
                fontSize="12px"
                color="#707070"
                fontFamily="poppins"
                fontWeight="semibold"
              >
                666 Courses
              </Text>
            </Flex>
          </Flex>
          <Flex
            w="100%"
            h="20"
            gap={2}
            boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
            _hover={{
              boxShadow: "rgba(40, 40, 42, 0.3) 0px 7px 29px 0px",
              cursor: "pointer",
            }}
          >
            <Flex width={"25%"}>
              <Image
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/physical_science_and_engineering.png?auto=format%2Ccompress&dpr=1&fit=crop&h=100"
                alt=""
                objectFit="fill"
              />
            </Flex>
            <Flex justifyContent="center" direction="column">
              <Text fontSize="12px" fontFamily="poppins" fontWeight="semibold">
                Arts and Humanities
              </Text>

              <Text
                fontSize="12px"
                color="#707070"
                fontFamily="poppins"
                fontWeight="semibold"
              >
                338 Courses
              </Text>
            </Flex>
          </Flex>
          <Flex
            w="100%"
            h="20"
            gap={2}
            boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
            _hover={{
              boxShadow: "rgba(40, 40, 42, 0.3) 0px 7px 29px 0px",
              cursor: "pointer",
            }}
          >
            <Flex width={"25%"}>
              <Image
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/language_learning.png?auto=format%2Ccompress&dpr=1&fit=crop&h=100"
                alt=""
                objectFit="fill"
              />
            </Flex>
            <Flex justifyContent="center" direction="column">
              <Text fontSize="12px" fontFamily="poppins" fontWeight="semibold">
                Physical Science and Engineering
              </Text>

              <Text
                fontSize="12px"
                color="#707070"
                fontFamily="poppins"
                fontWeight="semibold"
              >
                413 Courses
              </Text>
            </Flex>
          </Flex>
          <Flex
            w="100%"
            h="20"
            gap={2}
            boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
            _hover={{
              boxShadow: "rgba(40, 40, 42, 0.3) 0px 7px 29px 0px",
              cursor: "pointer",
            }}
          >
            <Flex width={"25%"}>
              <Image
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/information_technology.png?auto=format%2Ccompress&dpr=1&fit=crop&h=100"
                alt=""
                objectFit="fill"
              />
            </Flex>
            <Flex justifyContent="center" direction="column">
              <Text fontSize="12px" fontFamily="poppins" fontWeight="semibold">
                Language Learning
              </Text>

              <Text
                fontSize="12px"
                color="#707070"
                fontFamily="poppins"
                fontWeight="semibold"
              >
                150 Courses
              </Text>
            </Flex>
          </Flex>
          <Flex
            w="100%"
            h="20"
            gap={2}
            boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
            _hover={{
              boxShadow: "rgba(40, 40, 42, 0.3) 0px 7px 29px 0px",
              cursor: "pointer",
            }}
          >
            <Flex width={"25%"}>
              <Image
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/math_and_logic.png?auto=format%2Ccompress&dpr=1&fit=crop&h=100"
                alt=""
                objectFit="fill"
              />
            </Flex>
            <Flex justifyContent="center" direction="column">
              <Text fontSize="12px" fontFamily="poppins" fontWeight="semibold">
                Information Technology
              </Text>

              <Text
                fontSize="12px"
                color="#707070"
                fontFamily="poppins"
                fontWeight="semibold"
              >
                145 Courses
              </Text>
            </Flex>
          </Flex>
          <Flex
            w="100%"
            h="20"
            gap={2}
            boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
            _hover={{
              boxShadow: "rgba(40, 40, 42, 0.3) 0px 7px 29px 0px",
              cursor: "pointer",
            }}
          >
            <Flex width={"25%"}>
              <Image
                width="120%"
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/data_science.png?auto=format%2Ccompress&dpr=1&fit=crop&h=100"
                alt=""
                objectFit="fill"
              />
            </Flex>
            <Flex justifyContent="center" direction="column">
              <Text fontSize="12px" fontFamily="poppins" fontWeight="semibold">
                Math and Logic
              </Text>

              <Text
                fontSize="12px"
                color="#707070"
                fontFamily="poppins"
                fontWeight="semibold"
              >
                70 Courses
              </Text>
            </Flex>
          </Flex>
        </Grid>
      </Flex>
    </Flex>
  );
};

export default Section5;
