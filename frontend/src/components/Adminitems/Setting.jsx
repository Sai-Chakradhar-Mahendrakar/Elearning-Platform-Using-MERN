import {
  Box,
  Button,
  Flex,
  FormLabel,
  Grid,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import AdminNavTop from "../AdminNavTop";
import { useSelector } from "react-redux";
import { capitalizeFirstLetter } from "../../Redux/UserReducer/action";

const Setting = () => {
  const store = useSelector((store) => store.AdminReducer.data);
  const userStore = useSelector((store) => store.UserReducer);
  const name = capitalizeFirstLetter(userStore.name);
  const password = "Hello_Password";

  return (
    <Grid className="Nav" h={"99vh"} w="94%" gap={10}>
      {/* <AdminSidebar/>  */}
      <Box mt='80px'>
        <AdminNavTop />
        {/*  */}

        <Heading>Setting</Heading>
        <Box mt={5}>
          <Flex
            justify={"space-between"}
            flexDirection={{ xl: "row", lg: "row", base: "column" }}
            p={5}
            gap={{ xl: 0, lg: 0, base: 10 }}
          >
            <Box>
              <Heading size={13}>Profile Information</Heading>
              <Text>Update User Profile Information and Password</Text>
            </Box>
            <Box border={"1px solid gray"} borderRadius={10} w={"60%"} p={5}>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Enter Name" value={name} />
              <Button mt={5} isDisabled={true}>
                Save
              </Button>
            </Box>
          </Flex>
          <Flex
            justify={"space-between"}
            flexDirection={{ xl: "row", lg: "row", base: "column" }}
            p={5}
            gap={{ xl: 0, lg: 0, base: 10 }}
          >
            <Box>
              <Heading size={13}>Update Password</Heading>
              <Text>
                Ensure your account is using a long, random password to <br />{" "}
                stay secure
              </Text>
            </Box>
            <Box border={"1px solid gray"} borderRadius={10} w={"60%"} p={5}>
              <FormLabel>Current Password</FormLabel>
              <Input
                placeholder="Enter Current Password"
                type="password"
                value={password}
              />
              <FormLabel>New Password</FormLabel>
              <Input placeholder="Enter New Password" />
              <FormLabel>Confirm Password</FormLabel>
              <Input placeholder="Enter Confirm Password" />
              <Button mt={5}>Save</Button>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Grid>
  );
};

export default Setting;
