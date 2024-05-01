import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import DynamicSelect from "./DynamicSelect";
import { Radio } from "@chakra-ui/radio";
import { BsFillCreditCardFill } from "react-icons/bs";
import { RiVisaFill } from "react-icons/ri";
import { FaCcMastercard, FaWallet } from "react-icons/fa";
import { SiMastercard, SiAmericanexpress, SiFlutter } from "react-icons/si";
import { AiTwotoneBank } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { capitalizeFirstLetter } from "../../Redux/UserReducer/action";
import { useParams } from "react-router";
import { Input, keyframes, useToast } from "@chakra-ui/react";
import { showToast } from "../../components/SignUp";

export default function Payment({ isOpen, onOpen, onClose }) {
  const { id } = useParams();
  const courseId = id;
  const upiRef = useRef(null);
  const [input, setinput] = useState("");

  let baseURL = "http://localhost:8080";
  const token = JSON.parse(localStorage.getItem("user"))?.token || "";

  const [course, setCourse] = useState({});
  const vpiRef = useRef(null);
  const toast = useToast();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`${baseURL}/courses/${courseId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCourse(res.data.course);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCourse();
  }, []);

  // will show the box when click on upi
  function showUPI() {
    upiRef.current.style.display = "block";
  }

  // block display when click on show less
  function blockUPI() {
    upiRef.current.style.display = "none";
  }

  // handle input
  function handleInput(e) {
    setinput((p) => e.target.value);

    if (input.includes("@")) {
      vpiRef.current.style.background = "green";
    } else {
      vpiRef.current.style.background = "#90A4AE";
    }
  }

  // handle payment
  function handlePayment() {
    axios
      .post(
        `${baseURL}/users/addCourse/${courseId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        showToast({
          toast,
          message: res?.data?.message || res?.data?.msg,
          color: "green",
        });
        onClose();
      })
      .catch((err) => {
        console.log(err);
        showToast({
          toast,
          message: err?.response.data.error || err?.message,
          color: "red",
        });
        onClose();
      });
    setinput("");
  }

  const openAnimation = keyframes`
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  `;

  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Checkout</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* payment page  */}
            <Box>
              <Box>
                <Flex justify="space-between">
                  <Box>
                    <Heading size="sm">Billing Address</Heading>
                  </Box>
                  <Box>
                    <Heading size="sm">Total</Heading>
                    <Heading size="xs">₹{course?.price}</Heading>
                  </Box>
                </Flex>
                {/* 2nd bar  */}

                <Flex>
                  <Box mr="5px">
                    <Text>Module: {capitalizeFirstLetter(course?.title)}</Text>
                  </Box>
                  <Box m="0 7px">
                    <Text>
                      Instructor: {capitalizeFirstLetter(course?.teacher)}
                    </Text>
                  </Box>
                </Flex>
                <Text fontSize="12px">{`Number of video you are getting ${
                  course?.videos?.length || 1
                }`}</Text>

                {/* Address */}
                <Box>
                  <Box>
                    <DynamicSelect />
                  </Box>
                  <Box>
                    <Text fontSize="12px">
                      SRM is required by law to collect applicable transaction
                      taxes for purchases made in certain tax jurisdications.
                    </Text>
                  </Box>
                </Box>

                {/* payment method */}
                {/* cards  */}
                {/* <Box mt="15px">
                  <Flex bg="gray.100" justify="space-between" p="10px">
                    <Flex align="center">
                      <Box>
                        <Radio borderColor="black">
                          <Flex ml="5px">
                            <Box border="1px solid" p="2px 4px" bg="white">
                              <BsFillCreditCardFill />
                            </Box>
                            <Heading size="xs" ml="7px">
                              Cards
                            </Heading>
                          </Flex>
                        </Radio>
                      </Box>
                    </Flex>
                    <Flex w="40%" justify="space-evenly">
                      {/* visa Cards 
                      <Box border="1px solid" p="2px">
                        <RiVisaFill size="25px" color="blue" />
                      </Box>
                      {/* american express 
                      <Box border="1px solid" p="2px">
                        <SiAmericanexpress size="25px" color="#1976D2" />
                      </Box>
                      {/* master cart 
                      <Box border="1px solid" p="2px">
                        <FaCcMastercard size={25} color="#FF5722" />
                      </Box>
                      {/* rupay  
                      <Box
                        style={{ transform: "rotate(180deg)" }}
                        border="1px solid"
                        p="2px"
                      >
                        <SiFlutter size="25px" color="#43A047" />
                      </Box>
                    </Flex>
                  </Flex>
                </Box> */}
                {/* upi */}
                <Box>
                  <Flex
                    mt="5px"
                    bg="gray.100"
                    justify="space-between"
                    p="10px"
                    onClick={showUPI}
                  >
                    <Flex align="center">
                      <Box>
                        <Radio borderColor="black">
                          <Flex ml="5px">
                            <Box style={{ transform: "rotate(180deg)" }}>
                              <SiFlutter size="25px" color="#43A047" />
                            </Box>
                            <Heading size="xs" ml="7px">
                              UPI
                            </Heading>
                          </Flex>
                        </Radio>
                      </Box>
                    </Flex>
                  </Flex>
                  <Box
                    ref={upiRef}
                    display="none"
                    animation={`${openAnimation} 0.2s ease`}
                  >
                    <Box p="8px">
                      <Box border="1px solid" p="8px">
                        {/* 1st box  */}
                        <Box>
                          <Text fontSize="12px" fontWeight="700">
                            Make a selection on how you would like to use UPI
                          </Text>
                        </Box>
                        {/* 2nd box  */}
                        <Box
                          border="1px solid #0D47A1"
                          borderRadius="5px"
                          p="3px"
                          m="5px 0"
                          mt="10px"
                        >
                          <Button
                            disabled={true}
                            fontSize="10px"
                            color="#0D47A1"
                            background="#E1F5FE"
                            border="1px solid #0D47A1"
                          >
                            Virtual Payment Address
                          </Button>
                        </Box>
                        {/* 3rd box  */}
                        <Box m="10px 0" mb="25px">
                          <Box>
                            <Text fontSize="12px" fontWeight="700">
                              Virtual Payment Address
                            </Text>
                          </Box>
                          <Box mt="15px">
                            <Input
                              borderRadius="0px"
                              border="1px solid black"
                              w="100%"
                              _focus={{ outline: "1px solid" }}
                              focusBorderColor="transparent"
                              onChange={handleInput}
                              value={input}
                            />
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box textAlign="center">
                      <Text
                        fontWeight="500"
                        fontSize="10px"
                        onClick={blockUPI}
                        _hover={{ cursor: "pointer" }}
                      >
                        See Less
                      </Text>
                    </Box>
                  </Box>
                </Box>
                {/* Net banking */}
                {/* <Box>
                  <Flex mt="5px" bg="gray.100" justify="space-between" p="10px">
                    <Flex align="center">
                      <Box>
                        <Radio borderColor="black">
                          <Flex ml="5px">
                            <Box>
                              <AiTwotoneBank size="25px" color="#1976D2" />
                            </Box>
                            <Heading size="xs" ml="7px">
                              Net Banking
                            </Heading>
                          </Flex>
                        </Radio>
                      </Box>
                    </Flex>
                  </Flex>
                </Box> */}
                {/* mobile wallter  */}
                {/* <Box>
                  <Flex mt="5px" bg="gray.100" justify="space-between" p="10px">
                    <Flex align="center">
                      <Box>
                        <Radio borderColor="black">
                          <Flex ml="5px">
                            <Box>
                              <FaWallet size="20px" color="#78909C" />
                            </Box>
                            <Heading size="xs" ml="7px">
                              Net Banking
                            </Heading>
                          </Flex>
                        </Radio>
                      </Box>
                    </Flex>
                  </Flex>
                </Box> */}
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              borderRadius="0px"
              background="#1565C0"
              color="white"
              _hover={{ background: "#1E88E5", color: "#CFD8DC" }}
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
            <Button
              onClick={handlePayment}
              isDisabled={!input.includes("@")}
              ref={vpiRef}
              borderRadius="0px"
              background="#90A4AE"
              color="white"
              _hover={{ color: "#004D40" }}
            >
              PayNow
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
