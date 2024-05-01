import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import AdminNavTop from "../AdminNavTop";

const data = [
  {
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlzY291bnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    desc: "50% Discount available",
  },
  {
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlzY291bnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    desc: "50% Discount available",
  },
  {
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlzY291bnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    desc: "50% Discount available",
  },
  {
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlzY291bnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    desc: "50% Discount available",
  },
  {
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlzY291bnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    desc: "50% Discount available",
  },
  {
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlzY291bnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    desc: "50% Discount available",
  },
  {
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlzY291bnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    desc: "50% Discount available",
  },
  {
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlzY291bnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    desc: "50% Discount available",
  },
  {
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlzY291bnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    desc: "50% Discount available",
  },
  {
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlzY291bnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    desc: "50% Discount available",
  },
];

const Discount = () => {
  const [discount, setDiscount] = useState(data);
  return (
    <Grid className="Nav" h={"99vh"} w="94%" gap={10}>
      {/* <AdminSidebar/>  */}
      <Box mt='80px'>
        <AdminNavTop />
        {/*  */}
        <Grid
          templateColumns={{
            xl: "repeat(3,1fr)",
            lg: "repeat(2,1fr)",
            base: "repeat(1,1fr)",
          }}
          gap={10}
        >
          {discount.map((el, i) => {
            return (
              <Box key={i} border={"2px solid black"} p={2} borderRadius={10}>
                <Box
                  border={"2px solid blue"}
                  w={"50vh"}
                  p={2}
                  borderRadius={10}
                >
                  <Image src={el.image} />
                </Box>
                <Text>{el.desc}</Text>
                <Flex justify={"space-around"}>
                  <Button>Delete</Button>
                  <Button>Enable/Disable</Button>
                </Flex>
              </Box>
            );
          })}
        </Grid>
      </Box>
    </Grid>
  );
};

export default Discount;
