import React, { useEffect, useState } from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Pages/LandingPageComponents/LandingPageComponent.css";
import Card from "../../Pages/LandingPageComponents/Card";
import LoadingComponent from "../../Pages/LoadingComponents/LoadingComponent";
import jwtDecode from "jwt-decode";
import axios from "axios";

const InProgressCarousel = () => {
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState([]);
  // const arr = [1];
  var settings = {
    swipe: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    // console.log(token.userId);
    const url = `https://elearning-platform-using-mern-j5py.vercel.app/users/userCourse/${user.userId}`;

    axios
      .get(url)
      .then((res) => {
        setLoading(false);
        setCourse(res.data.course);
        // console.log(res.data.course);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Flex
      direction={"column"}
      width="90%"
      p="2rem"
      m={"auto"}
      h={{
        sm: "420px",
        md: "450px",
        lg: "450px",
      }}
      overflow="hidden"
    >
    {course?.length!==0 ?       <Slider {...settings}>
        {!loading ? course.map((el) => <Card {...el} key={el._id} />) : ""}
      </Slider> : (
        <Box
          display="flex"
          alignItems="center"
          flexDir="column"
          bg="#F7F3EA"
          p="4"
        >
          <Box w={{ base: "100%", md: "50%", lg: "30%" }}>
            <Image
              display="block"
              src="https://cdn.dribbble.com/users/1693462/screenshots/3504905/media/6d5a0df598037bf7a872f1f8aef118b8.gif"
              alt="Empyt"
            />
          </Box>
          <Text fontWeight="bold">You haven't subscribe any course</Text>
        </Box>
      )}
    </Flex>
  );
};

export default InProgressCarousel;
