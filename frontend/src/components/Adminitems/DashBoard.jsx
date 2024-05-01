import { Box, Flex, Grid, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import AdminNavTop from "../AdminNavTop";
import { BiMale } from "react-icons/bi";
import { FaVideo } from "react-icons/fa";
import { FiBook } from "react-icons/fi";
import { FiFilm } from "react-icons/fi";

const DashBoard = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Courses",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(235, 50, 90, 0.6)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };
  const datapie = {
    labels: ["Full Stack", "Frontend", "Backend"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  const datapie1 = {
    labels: ["live", "recorded", "offline"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <Box>
      <Grid className="Nav" h={"99vh"} w="94%" gap={10}>
        <Box>
          {/* <AdminSidebar /> */}
        </Box>
        <Box mt='80px'>
          <AdminNavTop />
          {/*  */}
          <Box h={"130vh"} p={5}>
            <Grid
              templateColumns={{
                xl: "repeat(4,1fr)",
                lg: "repeat(2,1fr)",
                base: "repeat(1,50vh)",
              }}
              gap={10}
              boxShadow="xl"
              rounded="md"
            >
              <Box border={"2px solid gray"} borderRadius={10} p={5}>
                <Flex justify={"space-between"}>
                  <Text fontWeight={"bold"}>Total Subscriber</Text>
                  <Icon as={BiMale} boxSize={8} />
                </Flex>
                <Text mt={15}>Count 2344</Text>
                <Flex mt={15} justify={"space-between"}>
                  <Text>+14%</Text>
                  <Text>Since last month</Text>
                </Flex>
              </Box>
              <Box border={"2px solid gray"} borderRadius={10} p={5}>
                <Flex justify={"space-between"}>
                  <Text fontWeight={"bold"}>Total Videos</Text>
                  <FaVideo size={24} />
                </Flex>
                <Text mt={15}>Count 5123</Text>
                <Flex mt={15} justify={"space-between"}>
                  <Text>+60%</Text>
                  <Text>Since last month</Text>
                </Flex>
              </Box>
              <Box border={"2px solid gray"} borderRadius={10} p={5}>
                <Flex justify={"space-between"}>
                  <Text fontWeight={"bold"}>Total Courses</Text>
                  <FiBook size={24} />
                </Flex>
                <Text mt={15}>Count 1200</Text>
                <Flex mt={15} justify={"space-between"}>
                  <Text>+5%</Text>
                  <Text>Since last month</Text>
                </Flex>
              </Box>
              <Box border={"2px solid gray"} borderRadius={10} p={5}>
                <Flex justify={"space-between"}>
                  <Text fontWeight={"bold"}>Total WatchTime</Text>
                  <FiFilm size={24} />
                </Flex>
                <Text mt={15}>Count 999+hrs</Text>
                <Flex mt={15} justify={"space-between"}>
                  <Text>+45%</Text>
                  <Text>Since last month</Text>
                </Flex>
              </Box>
            </Grid>
            {/* bar graph */}
            <Flex
              align={{ xl: "center", lg: "center", base: "left" }}
              minHeight="60vh"
            >
              <Box
                p={{ xl: 4, lg: 4, base: 0 }}
                boxShadow="md"
                w={{ xl: "100%", lg: "100vh", base: "50vh" }}
              >
                <Text fontSize="xl" fontWeight="bold" mb={4}>
                  Monthly Sales
                </Text>
                <Box height="300px">
                  <Bar data={data} options={{ maintainAspectRatio: false }} />
                </Box>
              </Box>
            </Flex>
            {/* Bar graph Ends */}

            {/* Pie graph */}
            <Grid
              templateColumns={{
                xl: "repeat(2,1fr)",
                lg: "repeat(2,1fr)",
                base: "repeat(1,1fr)",
              }}
            >
              <Flex align="center" justify="center" maxHeight="60vh">
                <Box p={4} boxShadow="md">
                  <Text fontSize="xl" fontWeight="bold" mb={4}>
                    Courses
                  </Text>
                  <Box height="300px">
                    <Pie
                      data={datapie}
                      options={{ maintainAspectRatio: false }}
                    />
                  </Box>
                </Box>
              </Flex>

              <Flex align="center" justify="center" maxHeight="60vh">
                <Box p={4} boxShadow="md">
                  <Text fontSize="xl" fontWeight="bold" mb={4}>
                    Videos Category
                  </Text>
                  <Box height="300px">
                    <Pie
                      data={datapie1}
                      options={{ maintainAspectRatio: false }}
                    />
                  </Box>
                </Box>
              </Flex>
            </Grid>
            {/* Pie graph end */}
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default DashBoard;
