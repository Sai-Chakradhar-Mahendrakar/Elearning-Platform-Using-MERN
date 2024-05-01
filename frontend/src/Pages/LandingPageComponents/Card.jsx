import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom";
const Card = ({ course, title, category, description, _id,img }) => {
  const image = [
    "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/mba-macquarie/thumbnail.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&fit=crop&q=50",
    "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/bachelor-of-science-computer-science-bits/2c1c9800-93b0-48df-b278-a5246da9e086.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&q=50&fit=crop",
    "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/mads-umich/thumbnail.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&q=50&fit=crop",
    "https://cdn.dribbble.com/users/1141617/screenshots/20111093/media/f5852b7b0c7d5831f0081fce75bd1641.jpg?compress=1&resize=1000x750&vertical=center",
  ];
  const length = image.length;
  const miniimg =
    "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/60SA8pGxPXMmJf4n7umK1H/ccec31bbe2358210bf8391dcba6cd2f1/umich.png?auto=format%2Ccompress&dpr=1&w=&h=55";
  return (
    <Link to={`/course/${_id}`} target="_blank">
      <Flex
        direction={"column"}
        gap={"5px"}
        borderWidth="1px"
        borderRadius="md"
        borderColor="#c9c9c9"
        boxShadow="xl"
        p={4}
        m={2}
        h={{
          sm: "420px",
          md: "400px",
          lg: "400px",
        }}
        _hover={{ boxShadow: "2xl", cursor: "pointer" }}
      >
        <Image
          src={img || image[Math.floor(Math.random() * length)]}
          alt={title}
          objectFit="cover"
          h='150px'
        />
        <Box display="flex" alignItems="center" mb={2}>
          <Image src={miniimg} alt="Logo" boxSize={4} mr={2} />
          <Text
            fontSize="sm"
            fontWeight="bold"
            color="#a7a7a7"
            textTransform={"capitalize"}
          >
            {category}
          </Text>
        </Box>
        <Text
          fontSize="lg"
          fontWeight="bold"
          mb={2}
          textTransform={"capitalize"}
        >
          {title}
        </Text>
        <Text fontSize="sm" mb={2} textTransform={"capitalize"}>
          {description.substring(0,80)}...
        </Text>
        <Flex color="#0056d2" fontFamily={"poppins"} gap={2}>
          <Flex alignItems={"center"}>
            <FaGraduationCap />
          </Flex>
          <Box>Earn a degree</Box>
        </Flex>
        <Text fontSize="sm">{course}</Text>
      </Flex>
    </Link>
  );
};

export default Card;
