import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Box,
  Heading,
  Text,
  Checkbox,
  FormControl,
  FormLabel,
  Button,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

import { useNavigate } from "react-router-dom";
import { changeRole } from '../../Redux/TeacherReducer/action';


const TeachVerify = () => {
    
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem('user'))
//   console.log(user);

  function teacher() {
    dispatch(changeRole('teacher',user.userId));
    navigate("/TeacherDashboard");
  }
  

  return (
    <Box p={4}>
      <Box maxW="600px" mx="auto">
        <Box textAlign="center" mb={4}>
          <Heading as="h1" mb={2}>
            Terms & Conditions
          </Heading>
          <Text fontSize="lg">
            Please read the following terms and conditions carefully before
            proceeding.
          </Text>
        </Box>
        <UnorderedList pl={4} mb={4}>
          <ListItem>
            You must be at least 18 years old to register as a teacher on our
            platform.
          </ListItem>
          <ListItem>
            You must possess the necessary qualifications, expertise, and
            authority to teach the courses you add to the platform.
          </ListItem>
          <ListItem>
            You are required to provide accurate and complete information during
            the registration process.
          </ListItem>
        </UnorderedList>
        <FormControl>
          <FormLabel>
            <Checkbox colorScheme="blue" defaultChecked /> Yes, I have read
            all the terms and conditions. I accept the agreement.
          </FormLabel>
        </FormControl>
        <Box textAlign="center" mt={4}>
        <Button
              bg="#0056d2"
              color="white"
              borderRadius="5px"
              _hover={{ bg: "#003e9c" }}
              onClick={teacher}
            >
              Submit
            </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TeachVerify;
