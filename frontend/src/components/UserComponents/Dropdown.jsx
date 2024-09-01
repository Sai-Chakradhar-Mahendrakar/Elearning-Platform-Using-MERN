import React from "react";
import {
  ChakraProvider,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
  Text,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionUserLogout } from "../../Redux/UserReducer/actionType";
import { BiUserCircle } from "react-icons/bi";
import { FaUserShield } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import { capitalizeFirstLetter } from "../../Redux/UserReducer/action";
const Dropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userStore = useSelector((store) => store.UserReducer);

  const handleProfileClick = () => {
    // Handle profile click logic
    navigate("/profile");
  };

  const handleLogoutClick = () => {
    const token = userStore?.token;
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios
      .post(
        "https://elearning-platform-using-mern-j5py.vercel.app/users/logout",
        {},
        { headers }
      )
      .then((res) => {
        localStorage.setItem(
          "user",
          JSON.stringify({
            email: "",
            name: "",
            role: "",
            token: "",
            isAuth: "",
            isError: "",
            loading: false,
            success: false,
            isUser: false,
            userId: "",
            place: "",
            age: "",
          })
        );
        dispatch(actionUserLogout());
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <ChakraProvider>
      <Box>
        <Menu>
          <MenuButton
            as={Button}
            bgColor={"#0056d2"}
            color={"white"}
            variant="outline"
            _hover={{
              bg: "white",
              color: "#0056d2",
              border: "2px solid black",
              cursor: "pointer",
            }}
          >
            <Flex alignItems="center">
              <Text>Profile</Text>
              <Box ml="0.2rem">
                <FiMoreVertical />
              </Box>
            </Flex>
          </MenuButton>
          <MenuList p={5} w='25vw' overflow={userStore?.role==='admin' ? 'scroll' : ''} h={userStore?.role==='admin' ? '90vh' : ''} pb='4'>
            {/* user options  */}
            <Box >
              <Flex justify="space-between" alignItems="center">
                <Box p="1.5rem 0">
                  {userStore?.role === "admin" || userStore?.role==='teacher' ? (
                    <Flex alignItems={"center"} >
                      <Box>
                        <FaUserShield size="2rem" color="#0056d2" />
                        <Text fontSize="0.6rem" fontWeight="bold">
                          {capitalizeFirstLetter(userStore?.role)}
                        </Text>
                      </Box>
                      <Heading size="sm" ml="1rem">
                        {capitalizeFirstLetter(userStore?.name)}
                      </Heading>
                    </Flex>
                  ) : userStore?.role === "user" ? (
                    <Flex alignItems={"center"}>
                      <BiUserCircle size="2rem" color="#0056d2" />
                      <Heading size="sm" ml="1rem">
                        {capitalizeFirstLetter(userStore?.name)}
                      </Heading>
                    </Flex>
                  ) : null}
                </Box>
                <Button
                  fontSize="0.8rem"
                  p="1rem"
                  colorScheme="blue"
                  fontWeight={"bold"}
                  onClick={handleLogoutClick}
                >
                  Logout
                </Button>
              </Flex>
            </Box>
            {/* users options  */}
            {userStore?.role === "user" && (
              <Box>
                <MenuItem
                  p="0.7rem 0"
                  onClick={handleProfileClick}
                  fontWeight="500"
                >
                  Your Account
                </MenuItem>

                <Link to="/home">
                  <MenuItem
                    p="0.7rem 0"
                    fontWeight="500"
                    borderTop="1px solid #D7DBDD"
                  >
                    DashBoard
                  </MenuItem>
                </Link>
              </Box>
            )}
            {/* admin options */}

            {userStore?.role === "admin" && (
              <Box >
                <Link to="/profile">
                  <MenuItem
                    p="0.7rem 0"
                    fontWeight="500"
                    borderTop="1px solid #D7DBDD"
                  >
                    Your Account
                  </MenuItem>
                </Link>
                <Link to="/home">
                  <MenuItem
                    p="0.7rem 0"
                    fontWeight="500"
                    borderTop="1px solid #D7DBDD"
                  >
                    User Dashboard
                  </MenuItem>
                </Link>
                <Link to="/admin/dashboard">
                  <MenuItem
                    p="0.7rem 0"
                    fontWeight="500"
                    borderTop="1px solid #D7DBDD"
                  >
                    Admin Dashboard
                  </MenuItem>
                </Link>
                <Link to="/admin/courses">
                  <MenuItem
                    p="0.7rem 0"
                    fontWeight="500"
                    borderTop="1px solid #D7DBDD"
                  >
                    Courses
                  </MenuItem>
                </Link>
                <Link to="/admin/users">
                  <MenuItem
                    p="0.7rem 0"
                    fontWeight="500"
                    borderTop="1px solid #D7DBDD"
                  >
                    Users
                  </MenuItem>
                </Link>
                <Link to="/admin/Add">
                  <MenuItem
                    p="0.7rem 0"
                    fontWeight="500"
                    borderTop="1px solid #D7DBDD"
                  >
                    Add videos
                  </MenuItem>
                </Link>
                <Link to="/admin/videos">
                  <MenuItem
                    p="0.7rem 0"
                    fontWeight="500"
                    borderTop="1px solid #D7DBDD"
                  >
                    AllVideos
                  </MenuItem>
                </Link>
                <Link to="/admin/discount">
                  <MenuItem
                    p="0.7rem 0"
                    fontWeight="500"
                    borderTop="1px solid #D7DBDD"
                  >
                    Discount
                  </MenuItem>
                </Link>
                <Link to="/admin/giftcard">
                  <MenuItem
                    p="0.7rem 0"
                    fontWeight="500"
                    borderTop="1px solid #D7DBDD"
                  >
                    GiftCards
                  </MenuItem>
                </Link>
                <Link to="/admin/statistic">
                  <MenuItem
                    p="0.7rem 0"
                    fontWeight="500"
                    borderTop="1px solid #D7DBDD"
                  >
                    Statistics
                  </MenuItem>
                </Link>
                <Link to="/admin/setting">
                  <MenuItem
                    p="0.7rem 0"
                    fontWeight="500"
                    borderTop="1px solid #D7DBDD"
                  >
                    Settings
                  </MenuItem>
                </Link>
              </Box>
            )}

            {/* Teacher options */}

            {userStore?.role==='teacher' && (
              <Box >
                <Link to="/profile">
                  <MenuItem
                    p="0.7rem 0"
                    fontWeight="500"
                    borderTop="1px solid #D7DBDD"
                  >
                    Your Account
                  </MenuItem>
                </Link>
                <Link to="/home">
                  <MenuItem
                    p="0.7rem 0"
                    fontWeight="500"
                    borderTop="1px solid #D7DBDD"
                  >
                    User Dashboard
                  </MenuItem>
                </Link>
                <Link to="/TeacherDashboard">
                  <MenuItem
                    p="0.7rem 0"
                    fontWeight="500"
                    borderTop="1px solid #D7DBDD"
                  >
                    Teacher Dashboard
                  </MenuItem>
                </Link>
                <Link to="/Teacher/courses">
                  <MenuItem
                    p="0.7rem 0"
                    fontWeight="500"
                    borderTop="1px solid #D7DBDD"
                  >
                    Courses
                  </MenuItem>
                </Link>
                {/* <Link to="/Teacher/users">
                  <MenuItem
                    p="0.7rem 0"
                    fontWeight="500"
                    borderTop="1px solid #D7DBDD"
                  >
                    Users
                  </MenuItem>
                </Link> */}
                {/* <Link to="/Teacher/videos">
                  <MenuItem
                    p="0.7rem 0"
                    fontWeight="500"
                    borderTop="1px solid #D7DBDD"
                  >
                    All Videos
                  </MenuItem>
                </Link> */}
                <Link to="/Teacher/add">
                  <MenuItem
                    p="0.7rem 0"
                    fontWeight="500"
                    borderTop="1px solid #D7DBDD"
                  >
                    Add Videos
                  </MenuItem>
                </Link>
                {/* <Link to="/admin/discount">
                  <MenuItem
                    p="0.7rem 0"
                    fontWeight="500"
                    borderTop="1px solid #D7DBDD"
                  >
                    Discount
                  </MenuItem>
                </Link>
                <Link to="/admin/giftcard">
                  <MenuItem
                    p="0.7rem 0"
                    fontWeight="500"
                    borderTop="1px solid #D7DBDD"
                  >
                    GiftCards
                  </MenuItem>
                </Link>
                <Link to="/admin/statistic">
                  <MenuItem
                    p="0.7rem 0"
                    fontWeight="500"
                    borderTop="1px solid #D7DBDD"
                  >
                    Statistics
                  </MenuItem>
                </Link> */}
                <Link to="/admin/setting">
                  <MenuItem
                    p="0.7rem 0"
                    fontWeight="500"
                    borderTop="1px solid #D7DBDD"
                  >
                    Settings
                  </MenuItem>
                </Link>
              </Box>
            )}
          </MenuList>
        </Menu>
      </Box>
    </ChakraProvider>
  );
};

export default Dropdown;
