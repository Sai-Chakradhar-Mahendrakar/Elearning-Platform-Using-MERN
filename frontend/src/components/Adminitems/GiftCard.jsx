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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzShY-HQBduoJukm8zwN-869tlTb7Dl2sxlw&usqp=CAU",
    desc: "50% Discount available",
    id: 1,
    status: true,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzShY-HQBduoJukm8zwN-869tlTb7Dl2sxlw&usqp=CAU",
    desc: "50% Discount available",
    id: 2,
    status: true,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzShY-HQBduoJukm8zwN-869tlTb7Dl2sxlw&usqp=CAU",
    desc: "50% Discount available",
    id: 3,
    status: true,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzShY-HQBduoJukm8zwN-869tlTb7Dl2sxlw&usqp=CAU",
    desc: "50% Discount available",
    id: 4,
    status: true,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzShY-HQBduoJukm8zwN-869tlTb7Dl2sxlw&usqp=CAU",
    desc: "50% Discount available",
    id: 5,
    status: true,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzShY-HQBduoJukm8zwN-869tlTb7Dl2sxlw&usqp=CAU",
    desc: "50% Discount available",
    id: 6,
    status: true,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzShY-HQBduoJukm8zwN-869tlTb7Dl2sxlw&usqp=CAU",
    desc: "50% Discount available",
    id: 7,
    status: true,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzShY-HQBduoJukm8zwN-869tlTb7Dl2sxlw&usqp=CAU",
    desc: "50% Discount available",
    id: 8,
    status: true,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzShY-HQBduoJukm8zwN-869tlTb7Dl2sxlw&usqp=CAU",
    desc: "50% Discount available",
    id: 9,
    status: true,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzShY-HQBduoJukm8zwN-869tlTb7Dl2sxlw&usqp=CAU",
    desc: "50% Discount available",
    id: 10,
    status: true,
  },
];

const GiftCard = () => {
  const [discount, setDiscount] = useState(data);

  const newArray = [...discount];

  const handleDelete = (id) => {
    let data = discount.filter((el) => {
      return el.id !== id;
    });
    setDiscount(data);
  };
  const handleClick = (id) => {
    // console.log(id)
  };

  return (
    <Grid className="Nav" h={"99vh"} w="94%" gap={10}>
      {/* <AdminSidebar /> */}
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
                  <Button onClick={() => handleDelete(el.id)}>Delete</Button>
                  <Button onClick={() => handleClick(el.id)}>
                    {el.status ? "Enable" : "Disable"}
                  </Button>
                </Flex>
              </Box>
            );
          })}
        </Grid>
      </Box>
    </Grid>
  );
};

export default GiftCard;
