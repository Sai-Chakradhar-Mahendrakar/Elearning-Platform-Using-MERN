import React from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  // BreadcrumbSeparator,
} from "@chakra-ui/react";

import { FaAngleRight } from "react-icons/fa";
// import theme from './Font';
import SingleAbsolute from "./SingleAbsolute";
import SingleList from "./SingleList";
import { useParams } from "react-router-dom";
// import axios from "axios";
import { useState, useEffect } from "react";
import Payment from "../../Pages/Payment/Payment";
import convertDateFormat from "../../Redux/AdminReducer/action";
import { capitalizeFirstLetter } from "../../Redux/UserReducer/action";
import { AiOutlineLock } from "react-icons/ai";
import Navbar from "../UserComponents/UserNavbar";
import Footer from "../../Pages/Footer";
import { useSelector } from "react-redux";

export default function SinglePage() {
  const [res, setRes] = useState({});
  const { id } = useParams();
  const userStore = useSelector((store) => store.UserReducer);

  const { isOpen, onOpen, onClose } = useDisclosure();

  // /courses/:courseID

  let vdo_url = `https://elearning-platform-using-mern-j5py.vercel.app/videos/courseVideos/${id}`;

  console.log(vdo_url);

  const getSinglePageData = (id) => {
    const token = userStore?.token;

    fetch(vdo_url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setRes(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getSinglePageData(id);
  }, [id]);

  // prevent click on video
  const handleClickPrevent = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Navbar />
      <div className=" w-full flex justify-center items-center flex-col">
        <div className="w-full bg-neutral-800 flex justify-center p-5">
          <div
            style={{ paddingTop: "100px" }}
            className=" xl:max-h-[320px] px-2  max-w-[598px] xl:max-w-[900px]"
          >
            <div className="xl:flex xl:space-x-4">
              <Box className=" my-8 ">
                <Box
                  className="outerBox"
                  color="white"
                  width="100%"
                  fontFamily="sans-serif"
                >
                  <Box className="space-y-2">
                    <Box className="title " fontWeight="bold">
                      <Text fontSize="2rem">
                        {res?.course?.title || "Course Name"}
                      </Text>
                    </Box>

                    <Box className="description text-[16px] font-thin" w="40vw">
                      {res?.course?.description}
                    </Box>

                    <Box
                      className="rating space-x-2"
                      display="flex"
                      fontWeight="5px"
                    >
                      <Box className="text-yellow-300 text-xs">4.8</Box>
                      <Box className="text-[11px]">⭐⭐⭐⭐</Box>
                      <Box className="flex text-[12px] space-x-2">
                        <Box color="#a435f0">(12866 ratings)</Box>
                        <Box>69107 students</Box>
                      </Box>
                    </Box>

                    <Box className="createdby space-x-2" display="flex">
                      <Box className="text-[12px]">
                        <p>Created by</p>
                      </Box>
                      <Box color="#a435f0" className="text-[12px] underline ">
                        {/* Andrei Negoie */}

                        {res?.course?.teacher}
                      </Box>
                    </Box>

                    <Box className="text-[12px] space-x-4" display="flex">
                      <Box>🌗 Last updated 5/2023</Box>
                      <Box>🌐 English</Box>
                      <Box display="flex">
                        ⌨️ English [Auto], Arabic [Auto]{" , "}
                        <Box color="#a435f0">12 more</Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <div className="mt-6">
                <SingleAbsolute props={{ ...res?.course, onOpen, onClose }} />{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[598px] xl:mr-72">
          <SingleList />
        </div>
        <Box mt="1rem" bg="#D7DBDD" w="95%" p="5">
          <Flex justify="center">
            <Heading size="xl">
              {capitalizeFirstLetter(res?.course?.title) || "Course Name"}
            </Heading>
          </Flex>
          <Flex mt="1rem" justify="center">
            <Heading size="md">Teacher:</Heading>
            <Heading size="md" ml="1rem">
              {capitalizeFirstLetter(res?.course?.teacher) || "Teacher Name"}
            </Heading>
          </Flex>
          <Flex mt="1rem" justify="center">
            <Heading size="md">Course Created:</Heading>
            <Heading size="md" ml="1rem">
              {convertDateFormat(res?.course?.createdAt)}
            </Heading>
          </Flex>
          <Flex mt="1rem" justify="center">
            <Heading size="md">Total Videos:</Heading>
            <Heading size="md" ml="1rem">
              {res?.course?.videos?.length || 0}
            </Heading>
          </Flex>
        </Box>

        {res?.course?.videos?.length ? (
          <Box mt="40px">
            {res?.course?.videos?.map((video, index) => {
              return (
                <div key={index}>
                  <Card
                    key={index}
                    direction={{ base: "column", sm: "row" }}
                    overflow="hidden"
                    variant="outline"
                    border="1px solid"
                    m="15px"
                  >
                    <Box onClick={handleClickPrevent} position="relative" _hover={{cursor:'not-allowed'}} w='20vw' p='1rem' display='flex' justifyContent='center' alignItems='center'>
                      <Image w='100%'  src={video?.img || ''} alt={video?.title}/>
                      {
                        <Box
                          onClick={handleClickPrevent}
                          position="absolute"
                        >
                          <AiOutlineLock color="tomato" size="45px" />
                        </Box>
                      }
                    </Box>
                    <Stack>
                      <CardBody>
                        <Heading size="md">{video?.title || 'Video Name'}</Heading>
                        <Text py="2">{video.description}</Text>
                        <Text size="12px">
                          <Text fontWeight="bold" display="inline" mr="5px">
                            Instructor:
                          </Text>
                          {capitalizeFirstLetter(video?.teacher) || 'Teacher Name'}
                        </Text>
                        <Text size="12px">
                          <Text fontWeight="bold" display="inline" mr="5px">
                            Date:
                          </Text>
                          {convertDateFormat(video?.createdAt)}
                        </Text>
                        <Text size="12px"></Text>
                        <Text>
                          <Text fontWeight="bold" display="inline" mr="5px">
                            Views:
                          </Text>
                          {video?.views || 0}
                        </Text>
                      </CardBody>
                    </Stack>
                  </Card>
                </div>
              );
            })}
          </Box>
        ) : (
          <Box mt="3rem" p="1rem 0" borderBottom="1px solid gray" mb="1rem">
            <Text fontSize="1.2rem" fontWeight="bold">
              We are Working On Content of this course. You will soon get Video.
            </Text>
          </Box>
        )}

        <div>
          <Payment isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </div>
        <Box>
          <Footer />
        </Box>
      </div>
    </div>
  );
}
