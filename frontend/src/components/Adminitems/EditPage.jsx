import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "./edit.css";
import AdminNavTop from "../AdminNavTop";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { patchProduct } from "../../Redux/AdminReducer/action";

const EditPage = () => {
  const backgroundImageUrl =
    "https://png.pngtree.com/background/20211217/original/pngtree-blue-round-technology-dashboard-picture-image_1598386.jpg";

  const { id } = useParams();
  const dispatch = useDispatch();
  const store = useSelector((store) => store.AdminReducer.data);
  console.log(store);
  const existedUser = store.filter((el) => el._id == id);
  // console.log("existedUser",existedUser)
  const navigate = useNavigate();

  console.log(existedUser);

  // console.log(id)

  let obj = {
    title: existedUser[0]?.title,
    description: existedUser[0]?.description,
    category: existedUser[0]?.category,
    price: existedUser[0]?.price,
    teacher: existedUser[0]?.teacher,
    img: existedUser[0]?.img || "",
  };

  // console.log("obj",obj)
  const [detail, setDetail] = useState(obj);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = () => {
    //  console.log(detail);
    dispatch(patchProduct(id, detail));
    alert("Data Updated Successfully");
    navigate("/admin/courses");
  };

  return (
    <Grid className="Nav" h={"99vh"} w="94%" gap={10}>
      {/* <AdminSidebar/>  */}
      <Box mt='80px'>
        <AdminNavTop />
        {/*  */}
        <Flex
          align="center"
          justify="center"
          border={"2px solid white"}
          borderRadius={10}
          className="background"
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "100vh",
          }}
          color="white"
          fontWeight={"bold"}
        >
          <Box width={["100%", "80%", "60%", "40%"]} p={4}>
            <FormControl>
              <FormLabel>Course Title</FormLabel>
              <Input
                type="text"
                border={"1px solid"}
                placeholder="Enter Course Title"
                name="title"
                value={detail?.title}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Course Description</FormLabel>
              <Textarea
                placeholder="Enter Course description"
                border={"1px solid"}
                name="description"
                value={detail?.description}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Category</FormLabel>
              <Input
                type="text"
                placeholder="Enter Course Category"
                border={"1px solid"}
                name="category"
                value={detail?.category}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Course Price</FormLabel>
              <Input
                type="number"
                placeholder="Enter Course price"
                border={"1px solid"}
                name="price"
                value={detail?.price}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Instructor</FormLabel>
              <Input
                type="text"
                border={"1px solid"}
                name="teacher"
                value={detail?.teacher}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Image</FormLabel>
              <Input
                type="text"
                border={"1px solid"}
                name="img"
                value={detail?.img}
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
        </Flex>
      </Box>
    </Grid>
  );
};

export default EditPage;
