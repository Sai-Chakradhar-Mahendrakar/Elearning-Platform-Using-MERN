import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Avatar,
  Center,
  AbsoluteCenter,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import UserNavbar from "../components/UserComponents/UserNavbar";
import { useDispatch, useSelector } from "react-redux";
import { actionLoginSuccess } from "../Redux/UserReducer/actionType";
import { showToast } from "../components/SignUp";
import { useNavigate } from 'react-router-dom';


const ProfilePage = () => {
  const userStore = useSelector((store) => store.UserReducer);

  // const decode = jwtDecode(creds);
  // console.log(decode);
  const [name, setName] = useState(userStore?.name || "");
  const [email, setEmail] = useState(userStore?.email || "");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(userStore?.age || "");
  const [city, setCity] = useState(userStore?.place || "");
  const [job, setJob] = useState(
    (userStore?.job !== "null" && userStore?.job) || ""
  );
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  const handleSave = () => {
    // Implement save logic here
    const obj = {
      name,
      email,
      password,
      age,
      city,
      job,
    };

    const id = userStore?.userId;

    axios
      .patch(`https://elearning-platform-using-mern-j5py.vercel.app/users/update/${id}`, obj)
      .then((res) => {
        dispatch(actionLoginSuccess(res?.data));
        localStorage.setItem(
          "user",
          JSON.stringify({
            email: res.data.user.email,
            name: res.data.user.name,
            role: res.data.user.role,
            token: res.data.token,
            isAuth: true,
            userId: res.data.user._id,
            age: res.data.user.age,
            job: res.data.user.job,
            place: res.data.user.city,
          })
        );
        navigate(-1); 
        showToast({toast,message:'Profile Updated',color:'green'});
      })
      .catch((err) => {
        showToast({toast,message:'Error occur',color:'green'});
        console.log(err)
      });
  };

  return (
    <Box pb="2rem">
      <Box>
        <UserNavbar />
      </Box>
      <Box maxW="500px" mx="auto" p="4" pt="90px" border="1px solid gray">
        <Center>
          <Avatar
            justifyContent={"center"}
            size="2xl"
            name={name}
            src="/path/to/profile-image.jpg"
          />
        </Center>
        <Heading mt="10" mb="4" fontSize="2xl" textAlign="center">
          Edit Profile
        </Heading>
        <VStack spacing="4" align="stretch">
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Age</FormLabel>
            <Input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>City</FormLabel>
            <Input value={city} onChange={(e) => setCity(e.target.value)} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Job</FormLabel>
            <Input value={job} onChange={(e) => setJob(e.target.value)} />
          </FormControl>

          <Button
            mt="4"
            isDisabled={
              name === "" ||
              email === "" ||
              age === "" ||
              city === "" ||
              job === ""
            }
            colorScheme="blue"
            onClick={handleSave}
          >
            Save
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default ProfilePage;
