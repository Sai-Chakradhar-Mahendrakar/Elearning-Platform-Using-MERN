import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import AdminNavTop from "../AdminNavTop";

const Statistics = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Subscriber",
        data: [100, 200, 150, 250, 300, 200],
        fill: false,
        borderColor: "blue",
      },
    ],
  };
  const datapie1 = {
    labels: ["Full Stack", "Frontened", "Backened"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const databar = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Courses",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "#f038d7",
        borderColor: "teal",
        borderWidth: 1,
      },
    ],
  };

  return (
    <Grid className="Nav" h={"99vh"} w="94%" gap={10}>
      {/* <AdminSidebar /> */}
      <Box mt='80px'>
        <AdminNavTop />
        {/*  */}
        <Grid
          templateColumns={{
            xl: "repeat(2,1fr)",
            lg: "repeat(2,1fr)",
            base: "repeat(1,1fr)",
          }}
        >
          <Box
            w={{ xl: "600px", lg: "600px", base: "50%" }}
            h="400px"
            p={4}
            borderWidth={1}
            borderColor="gray.200"
            borderRadius="md"
          >
            <h2>Total Customer Interaction</h2>
            <Line data={data} />
          </Box>

          <Flex align="center" maxHeight="60vh">
            <Box p={4} boxShadow="md">
              <Text fontSize="xl" fontWeight="bold" mb={4}>
                Courses Distribution
              </Text>
              <Box height="300px">
                <Pie data={datapie1} options={{ maintainAspectRatio: false }} />
              </Box>
            </Box>
          </Flex>
        </Grid>

        <Flex
          align="center"
          justify="center"
          minHeight={{ xl: "60vh", lg: "60vh", base: "30vh" }}
          w={{ xl: "600px", lg: "600px", base: "80%" }}
        >
          <Box p={4} boxShadow="md" w="100%">
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              Monthly Sales
            </Text>
            <Box height="300px">
              <Bar data={databar} options={{ maintainAspectRatio: false }} />
            </Box>
          </Box>
        </Flex>
      </Box>
    </Grid>
  );
};

export default Statistics;
