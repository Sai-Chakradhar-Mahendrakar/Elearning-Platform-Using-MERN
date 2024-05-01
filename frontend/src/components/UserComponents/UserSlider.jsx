import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
const UserSlider = () => {
  const images = [
    "https://images.pexels.com/photos/5212653/pexels-photo-5212653.jpeg?cs=srgb&dl=pexels-max-fischer-5212653.jpg&fm=jpg",
    "https://www.mit.edu/files/images/201807/15656704711_00457bd2c9_b_1.jpg",
    "https://inup.iitkgp.ac.in/images/iit_kgp.jpg",
    "https://www.vedantu.com/seo/content-images/33e42c38-8332-4d51-9dcf-65a4f262b5da.png",
    "https://media.wired.com/photos/6365b7166776a0176c76e4de/master/w_2560%2Cc_limit/All-the-Free-Resources-You-Can-Find-at-Your-Library-Gear-GettyImages-1331816640.jpg",
    "https://images.seattleschild.com/wp-content/uploads/2021/09/Classy-Treehouse-w-logo-e1632341660272.png",
  ];

  const textOnImage = [
    "Group Studies",
    "Degree from Recognized Institutes",
    "Prestigious Institutions",
    "Online Classes",
    "Study Notes",
    "Successful Career",
  ];

  const indexDescription = [
    "SRM encourages collaborative group studies, creating a vibrant learning environment where students can connect and learn together. It offers a versatile platform for educators to share their knowledge, helping students excel academically.",
    "Secure your degree from renowned institutes with SRM's comprehensive education solutions. SRM provides access to globally recognized institutions, ensuring students receive quality education and gain valuable qualifications for their future careers.",
    "SRM unlocks access to prestigious educational institutions, elevating your academic journey to new heights. With SRM, you can explore a world of educational opportunities, expanding your knowledge and skills in various fields.",
    "Experience dynamic online classes on SRM's intuitive platform, tailored to modern learners' needs. SRM's user-friendly interface and interactive features make online learning engaging and effective, helping students succeed in today's digital age.",
    "Access meticulously crafted study notes on SRM to enhance your understanding and retention of course materials. SRM's comprehensive study resources empower students to excel in their studies and gain a deeper understanding of their subjects.",
    "SRM is your gateway to a successful career, offering the knowledge and skills needed for professional excellence. With SRM, you can prepare for a bright future and achieve your career goals through high-quality education and training."
  ];
  
  
  

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = (value) => {
    setCurrentIndex(value);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Container mt="100px" maxW="container.xxl" >
        <Flex direction="column" align="center" bg='#F7F3EA'>
          <Flex align="center" justify="space-between" mb={4}>
            <Button colorScheme="blue" borderRadius={"50%"} onClick={handlePrevious}>
              <ArrowLeftIcon />
            </Button>
            <Box position="relative" p='2'>
              <Image
                w={"2000px"}
                h={"400px"}
                fit="cover"
                src={`${images[currentIndex]}`}
              />
              <Box
                position="absolute"
                bottom="10"
                w="100%"
                color="rgba(255, 255, 255, 0.8)"
                p="8px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
              >
                <Text>
                  <Heading
                    size="3xl"
                    letterSpacing="1.5px"
                    style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
                  >
                    {textOnImage[currentIndex]}
                  </Heading>
                </Text>
              </Box>
            </Box>
            <Button colorScheme="blue" borderRadius={"50%"} onClick={handleNext}>
              <ArrowRightIcon />
            </Button>
          </Flex>

          <Slider
            defaultValue={currentIndex}
            min={0}
            max={images.length - 1}
            onChange={handleChange}
            w="400px"
          >
            {/* <SliderTrack>
              <SliderFilledTrack bg="blue.500" />
            </SliderTrack>
            <SliderThumb /> */}
          </Slider>
          <Box pb='3rem' w='80%' m='auto' p='4'>
          <Text>
            <Heading
              size="md"
              fontWeight='500'
              letterSpacing="2px"
              lineHeight='2rem'
            >
              {indexDescription[currentIndex]}
            </Heading>
          </Text>
        </Box>
        </Flex>
        
      </Container>
    </>
  );
};

export default UserSlider;
