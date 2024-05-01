import React from "react";
import { Box, Grid, Heading, Link, Flex, Image, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      bg="#f5f5f5"
      p={5}
      paddingBottom={{
        sm: "60px",
        md: "60px",
        lg: "20px",
      }}
      fontFamily="Source Sans 3"
      pt="60px"
      direction="column"
    >
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)", // Smallest screen size (1 column)
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)", // Medium screen size (2 columns)
          lg: "repeat(4, 1fr)", // Large screen size (4 columns)
        }}
        gap={4}
      >
        <Box
          pl={{
            lg: "25px",
            md: "15px",
            sm: "10px",
          }}
          pr={{
            lg: "35px",
            md: "15px",
            sm: "10px",
          }}
        >
          <Heading as="h6" size="md" fontWeight="bold">
            Learn Something New
          </Heading>
          <br />
          <Link fontSize="13.5px">Learn a Language</Link>
          <br />
          <Link fontSize="13.5px">Learn Accounting</Link>
          <br />
          <Link fontSize="13.5px">Learn Coding</Link>
          <br />
          <Link fontSize="13.5px">Learn Copywriting</Link>
          <br />
          <Link fontSize="13.5px">Learn HR</Link>
          <br />
          <Link fontSize="13.5px">Learn Public Relations</Link>
          <br />
          <Link fontSize="13.5px">Boulder MS Data Science</Link>
          <br />
          <Link fontSize="13.5px">Illinois iMBA</Link>
          <br />
          <Link fontSize="13.5px">Illinois MS Computer Science</Link>
          <br />
          <Link fontSize="13.5px">UMich MS in Applied Data Science</Link>
        </Box>

        <Box
          pl={{
            lg: "25px",
            md: "15px",
            sm: "10px",
          }}
          pr={{
            lg: "35px",
            md: "15px",
            sm: "10px",
          }}
        >
          <Heading as="h6" size="md" fontWeight="bold">
            Popular Topics
          </Heading>
          <br />
          <Link fontSize="13.5px">Accounting</Link>
          <br />
          <Link fontSize="13.5px">Cybersecurity</Link>
          <br />
          <Link fontSize="13.5px">Data Analysis</Link>
          <br />
          <Link fontSize="13.5px">Data Science</Link>
          <br />
          <Link fontSize="13.5px">Excel</Link>
          <br />
          <Link fontSize="13.5px">Google</Link>
          <br />
          <Link fontSize="13.5px">Machine Learning</Link>
          <br />
          <Link fontSize="13.5px">Project Management</Link>
          <br />
          <Link fontSize="13.5px">Python</Link>
          <br />
          <Link fontSize="13.5px">SQL</Link>
        </Box>

        <Box
          pl={{
            lg: "25px",
            md: "15px",
            sm: "10px",
          }}
          pr={{
            lg: "35px",
            md: "15px",
            sm: "10px",
          }}
        >
          <Heading as="h6" size="md" fontWeight="bold">
            Popular Certificates
          </Heading>
          <br />
          <Link fontSize="13.5px">Google Data Analytics</Link>
          <br />
          <Link fontSize="13.5px">Google Digital Marketing & Ecommerce</Link>
          <br />
          <Link fontSize="13.5px">Google IT Automation with Python</Link>
          <br />
          <Link fontSize="13.5px">Google IT Support</Link>
          <br />
          <Link fontSize="13.5px">Google Project Management</Link>
          <br />
          <Link fontSize="13.5px">Google UX Design</Link>
          <br />
          <Link fontSize="13.5px">IBM Data Analyst</Link>
          <br />
          <Link fontSize="13.5px">IBM Data Science</Link>
          <br />
          <Link fontSize="13.5px">Intuit Bookkeeping</Link>
          <br />
          <Link fontSize="13.5px">Meta Front-End Developer</Link>
        </Box>

        <Box
          pl={{
            lg: "25px",
            md: "15px",
            sm: "10px",
          }}
          pr={{
            lg: "35px",
            md: "15px",
            sm: "10px",
          }}
        >
          <Heading as="h6" size="md" fontWeight="bold">
            Featured Articles
          </Heading>
          <br />
          <Link fontSize="13.5px">
            A Comprehensive Guide to Becoming a Data Analyst
          </Link>
          <br />
          <Link fontSize="13.5px">
            Advance Your Career With A Cybersecurity Certification
          </Link>
          <br />
          <Link fontSize="13.5px">Get Your Data Analytics Certification</Link>
          <br />
          <Link fontSize="13.5px">
            How to Break into the Field of Data Analysis
          </Link>
          <br />
          <Link fontSize="13.5px">
            Jumpstart Your Data Career with a SQL Certification
          </Link>
          <br />
          <Link fontSize="13.5px">Learn How to Become PMP Certified</Link>
          <br />
          <Link fontSize="13.5px">
            Start Your Career with CAPM Certification
          </Link>
          <br />
          <Link fontSize="13.5px">
            Understanding the Role and Responsibilities of a Scrum Master
          </Link>
          <br />
          <Link fontSize="13.5px">
            Unlock Your Potential with a PMI Certification
          </Link>
          <br />
          <Link fontSize="13.5px">
            What You Should Know About CompTIA A+ Certification
          </Link>
        </Box>

        <Box
          pl={{
            lg: "25px",
            md: "15px",
            sm: "10px",
          }}
          pr={{
            lg: "35px",
            md: "15px",
            sm: "10px",
          }}
        >
          <Heading as="h6" size="md" fontWeight="bold">
            Coursera
          </Heading>
          <br />
          <Link fontSize="13.5px">About</Link>
          <br />
          <Link fontSize="13.5px">What We Offer</Link>
          <br />
          <Link fontSize="13.5px">Leadership</Link>
          <br />
          <Link fontSize="13.5px">Careers</Link>
          <br />
          <Link fontSize="13.5px">Catalog</Link>
          <br />
          <Link fontSize="13.5px">Coursera Plus</Link>
          <br />
          <Link fontSize="13.5px">Professional Certificates</Link>
          <br />
          <Link fontSize="13.5px">MasterTrack® Certificates</Link>
          <br />
          <Link fontSize="13.5px">Degrees</Link>
          <br />
          <Link fontSize="13.5px">For Enterprise</Link>
          <br />
          <Link fontSize="13.5px">For Government</Link>
          <br />
          <Link fontSize="13.5px">For Campus</Link>
          <br />
          <Link fontSize="13.5px">Become a Partner</Link>
          <br />
          <Link fontSize="13.5px">Coronavirus Response</Link>
          <br />
          <Link fontSize="13.5px">Free Courses</Link>
          <br />
          <Link fontSize="13.5px">All Courses</Link>
        </Box>

        <Box
          pl={{
            lg: "25px",
            md: "15px",
            sm: "10px",
          }}
          pr={{
            lg: "35px",
            md: "15px",
            sm: "10px",
          }}
        >
          <Heading as="h6" size="md" fontWeight="bold">
            Community
          </Heading>
          <br />
          <Link fontSize="13.5px">Learners</Link>
          <br />
          <Link fontSize="13.5px">Partners</Link>
          <br />
          <Link fontSize="13.5px">Beta Testers</Link>
          <br />
          <Link fontSize="13.5px">Translators</Link>
          <br />
          <Link fontSize="13.5px">Blog</Link>
          <br />
          <Link fontSize="13.5px">Tech Blog</Link>
          <br />
          <Link fontSize="13.5px">Teaching Center</Link>
        </Box>

        <Box
          pl={{
            lg: "25px",
            md: "15px",
            sm: "10px",
          }}
          pr={{
            lg: "35px",
            md: "15px",
            sm: "10px",
          }}
        >
          <Heading as="h6" size="md" fontWeight="bold">
            More
          </Heading>
          <br />
          <Link fontSize="13.5px">Press</Link>
          <br />
          <Link fontSize="13.5px">Investors</Link>
          <br />
          <Link fontSize="13.5px">Terms</Link>
          <br />
          <Link fontSize="13.5px">Privacy</Link>
          <br />
          <Link fontSize="13.5px">Help</Link>
          <br />
          <Link fontSize="13.5px">Accessibility</Link>
          <br />
          <Link fontSize="13.5px">Contact</Link>
          <br />
          <Link fontSize="13.5px">Articles</Link>
          <br />
          <Link fontSize="13.5px">Directory</Link>
          <br />
          <Link fontSize="13.5px">Affiliates</Link>
          <br />
          <Link fontSize="13.5px">Modern Slavery Statement</Link>
        </Box>

        <Box
          pl={{
            lg: "25px",
            md: "15px",
            sm: "10px",
          }}
          pr={{
            lg: "35px",
            md: "15px",
            sm: "10px",
          }}
        >
          <Flex
            direction="column"
            justifyContent="space-around"
            alignContent="space-between"
            h={{
              lg: "100%",
              sm: "100%",
            }}
          >
            <Image
              width={{
                base:"35%",
                sm: "20%",
                md: "35%",
                lg: "45%",
              }}
              src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d3njjcbhbojbot.cloudfront.net/web/images/icons/download_on_the_app_store_badge_en.svg?auto=format%2Ccompress&dpr=1&w=152&h=45&q=40"
              alt="AppleStoreLogo"
            />

            <Image

              width={{
                base:"35%",
                sm: "20%",
                md: "35%",
                lg: "45%",
              }}
              src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d3njjcbhbojbot.cloudfront.net/web/images/icons/en_generic_rgb_wo_45.png?auto=format%2Ccompress&dpr=1&w=152&h=45&q=40"
              alt="Google_Play"
            />
            <Image
              width={{
                base:"15%",
                sm: "15%",
                md: "25%",
                lg: "35%",
              }}
              src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d3njjcbhbojbot.cloudfront.net/web/images/icons/2018-B-Corp-Logo-Black-S.png?auto=format%2Ccompress&dpr=1&w=151&h=120&q=40"
              alt="Certified"
            />
          </Flex>
        </Box>
      </Grid>
      <Flex
        mt={15}
        gap={7}
        borderTop="1px solid #c9c9c9"
        direction={{
          sm: "column",
          md: "row",
          lg: "row",
        }}
        justifyContent={{
          lg: "space-between",
        }}
        alignItems="center"
        padding={{
          sm: "10px",
          md: "35px",
          lg: "55px",
        }}
      >
        <Box>
          {" "}
          <Text fontSize="13.5px">
            © 2023 SRM Inc. All rights reserved.
          </Text>
        </Box>
        <Flex spacing={4} overflow='hidden'>
          <Image
            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/facebook.png?auto=format%2Ccompress&dpr=1&w=28&h=28&q=40"
            alt=""
            mr={4}
          />

          <Image
            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/linkedin.png?auto=format%2Ccompress&dpr=1&w=28&h=28&q=40"
            alt=""
            mr={4}
          />
          <Image
            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/twitter.png?auto=format%2Ccompress&dpr=1&w=28&h=28&q=40"
            alt=""
            mr={4}
          />
          <Image
            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/youtube.png?auto=format%2Ccompress&dpr=1&w=28&h=28&q=40"
            alt=""
            mr={4}
          />
          <Image
          display={{
            base:"none",
            sm:"block"
          }}
            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/instagram.png?auto=format%2Ccompress&dpr=1&w=28&h=28&q=40"
            alt=""
            mr={4}
          />
          <Image
          display={{
            base:"none",
            sm:"block"
          }}
            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/9b7e964107839c77644d7e7d15035b73.png?auto=format%2Ccompress&dpr=1&w=28&h=28&q=40"
            alt=""
            mr={4}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
