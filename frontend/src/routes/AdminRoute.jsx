import { Box, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import "./adminRoute.css";

export const AdminRoute = ({ children }) => {
  const userStore = useSelector((store) => store.UserReducer);
  if (userStore?.role === "admin") {
    return (
      <>
        <Box>
          <Box
            display={{ base: "block", lg: "none" }}
            mt="100px"
            bg="red.500"
            className="scrolling-box"
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              p="4"
            >
              <Text fontWeight="bold" color="white">
                We Encourage you to use Large screen devices for better UI
                experience.
              </Text>
            </Box>
          </Box>
          {children}
        </Box>
      </>
    );
  }
  return <Navigate to="/home" />;
};