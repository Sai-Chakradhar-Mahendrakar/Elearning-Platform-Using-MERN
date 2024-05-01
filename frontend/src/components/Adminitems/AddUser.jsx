import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";

import AdminNavTop from "../AdminNavTop";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../Redux/AdminReducer/action";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let obj = {
    name: "",
    email: "",
    password: "",
    city: "",
    age: "",
    job: "",
    image: "",
  };

  const [detail, setDetail] = useState(obj);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = () => {
    dispatch(addUser(detail));
    alert("User Added Successfully");
    navigate("/admin/users");
  };

  return (
    <Grid className="Nav" h={"99vh"} w="94%" gap={10}>
      {/* <AdminSidebar/>  */}
      <Box  mt="80px">
        <AdminNavTop />

        <Box
         
          border={"2px solid gray"}
          borderRadius={10}
          p={10}
          h="90%"
        >
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter Course Title"
              name="name"
              value={detail.name}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Email</FormLabel>
            <Textarea
              type="email"
              placeholder="Enter Email"
              name="email"
              value={detail.email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={detail.password}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>City</FormLabel>
            <Input
              type="text"
              placeholder="Enter City"
              name="city"
              value={detail.city}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Age</FormLabel>
            <Input
              type="number"
              placeholder="Enter Age"
              name="age"
              value={detail.age}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Job</FormLabel>
            <Input
              type="text"
              placeholder="Enter Job"
              name="job"
              value={detail.job}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Image</FormLabel>
            <Input
              type="text"
              placeholder="Enter Image URL"
              name="image"
              value={detail.image}
              onChange={handleChange}
            />
          </FormControl>
          <Button
            mt={4}
            colorScheme="blue"
            size="md"
            isFullWidth
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default AddUser;
