import { Box, Flex, Input, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearchCircleOutline } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
import { TbCircleLetterM } from "react-icons/tb";
import { useSelector } from "react-redux";

const AdminNavTop = ({ handleSearch }) => {
  const userStore = useSelector((store) => store.UserReducer);

  return (
    <Flex h="10vh" justifyContent={"space-between"} mt="15px">
      <Flex w={"60%"}>
        <Link>
          <IoSearchCircleOutline
            style={{ fontSize: "7vh", color: "gray", marginTop: "3px" }}
          />
        </Link>
        <Box w={"50%"}>
          <Input
            placeholder="Search Anything"
            border={"none"}
            h={"8vh"}
            w="100%"
            onChange={handleSearch}
          />
        </Box>
      </Flex>
      <Flex
        gap={5}
        flexDirection={["none", "row"]}
        display={{ xl: "flex", lg: "flex", md: "flex", base: "none" }}
      >
        <Link to="#">
          {" "}
          <AiOutlineQuestionCircle
            style={{ fontSize: "4vh", color: "black", marginTop: "10px" }}
          />{" "}
        </Link>
        <Link>
          {" "}
          <AiOutlineBell
            style={{ fontSize: "4vh", color: "black", marginTop: "10px" }}
          />{" "}
        </Link>
        <Button
          borderRadius="50%"
          border="1px solid"
          bg="#CFD8DC"
          cursor="pointer"
          textAlign="center"
          w="5%"
        >
          <Text fontSize="25px" mt="-5px">
            {" "}
            {userStore?.name[0]}
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default AdminNavTop;
