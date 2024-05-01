import React from 'react';
import { Box, Flex, Grid, Icon, Text } from "@chakra-ui/react";
import TeacherNavTop from "./TeacherNavTop"; 



const TeacherDashboard = () => {
  // Dummy data for courses and enrolled users
  const courses = [
    { id: 1, title: "Course A", enrolledUsers: 20 },
    { id: 2, title: "Course B", enrolledUsers: 15 },
    { id: 3, title: "Course C", enrolledUsers: 30 },
  ];

  return (
    <Box>
      <Grid className="Nav" h={"99vh"} w="94%" gap={10}>
        <Box>
          {/* <TeacherNavbar /> */}
        </Box>
        <Box mt='80px'>
          <TeacherNavTop />
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
              {/* Courses created by teacher */}
              {courses.map(course => (
                <Box key={course.id} border={"2px solid gray"} borderRadius={10} p={5}>
                  <Text fontWeight={"bold"}>{course.title}</Text>
                  <Flex mt={15} justify={"space-between"}>
                    <Text>Enrolled Users: {course.enrolledUsers}</Text>
                  </Flex>
                </Box>
              ))}
            </Grid>

            {/* Bar graph */}
            {/* Your existing Bar graph code */}

            {/* Pie graph */}
            {/* Your existing Pie graph code */}
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}

export default TeacherDashboard;
