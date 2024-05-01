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
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { addVideo } from "../../Redux/AdminReducer/action";


const AddVideo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { id, title } = location.state;
  let obj = {
    title: title,
    description: "",
    link: "",
    views: "",
    img: "",
    courseId: id,
  };

  

  const [detail, setDetail] = useState(obj);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = () => {
    // console.log(detail);
    dispatch(addVideo(detail, detail.courseId));
    alert("Video Added Successfully");
    navigate("/admin/videos");
  };

  return (
    <Grid className="Nav" h={"99vh"} w="94%" gap={10}>
      {/* <AdminSidebar /> */}
      <Box mt='80px'>
        <AdminNavTop />

        <Box border={"2px solid gray"} borderRadius={10} p={10} h="90%">
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              placeholder="Enter Video Title"
              name="title"
              value={detail.title}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>CourseID</FormLabel>
            <Input
              type="text"
              placeholder="Enter The Course Id to add video"
              name="courseId"
              value={detail.courseId}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <Textarea
              type="text"
              placeholder="Enter Description"
              name="description"
              value={detail.description}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Link</FormLabel>
            <Input
              type="text"
              placeholder="Enter video Link"
              name="link"
              value={detail.link}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Views</FormLabel>
            <Input
              type="number"
              placeholder="Enter Total Views"
              name="views"
              value={detail.views}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Thumbnail</FormLabel>
            <Input
              type="text"
              placeholder="Enter Video Thumbnail"
              name="img"
              value={detail.img}
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

export default AddVideo;
