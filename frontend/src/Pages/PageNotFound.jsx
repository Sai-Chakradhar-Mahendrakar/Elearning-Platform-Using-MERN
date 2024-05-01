import { Button, Heading, Icon, Text } from "@chakra-ui/react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div
      style={{
        height: "calc(100vh - 80px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Icon as={FaExclamationTriangle} color="red.500" boxSize={12} />
      <Heading as="h1" size="xl" my={4} textAlign="center">
        404 Page Not Found
      </Heading>
      <Text fontSize="lg" mb={8} textAlign="center">
        Oops! The page you're looking for doesn't exist.
      </Text>
      <Link to="/">
        <Button colorScheme="teal" size="lg">
          Go back to homepage
        </Button>
      </Link>
    </div>
  );
};

export default PageNotFound;
