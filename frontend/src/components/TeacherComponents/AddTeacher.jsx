import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    Grid,
    IconButton,
    Select,
    Text,
    useBreakpointValue,
  } from "@chakra-ui/react";
  import React, { useEffect, useState } from "react";
  import { Link, useNavigate } from "react-router-dom";
  import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
  import { AddIcon, EditIcon } from "@chakra-ui/icons";
  import { useDispatch, useSelector } from "react-redux";
  import convertDateFormat, {
    deleteProduct,
    getProduct,
  } from "../../Redux/TeacherReducer/action";
  import Pagination from "../Adminitems/Pagination";
  import TeacherNavTop from "./TeacherNavTop";
  import Navbar from "../UserComponents/UserNavbar";

const AddTeacher = () => {

    const store = useSelector((store) => store.TeacherReducer.data);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [order, setOrder] = useState("");
    const limit = 4;
    const tableSize = useBreakpointValue({ base: "sm", sm: "md", md: "lg" });
    const courseSize = useBreakpointValue({ base: "md", sm: "lg", md: "xl" });
  
    const handleSearch = (e) => {
      setSearch(e.target.value);
      // console.log(search)
    };
    const handleSelect = (e) => {
      const { value } = e.target;
      setOrder(value);
    };
    // console.log(order)
  
    useEffect(() => {
      dispatch(getProduct(page, limit, search, order));
    }, [page, search, order, limit]);

    const navigate = useNavigate();
  
    const handleVideos = (id, title) => {
        navigate(`/Teacher/videos/add/${id}`, { state: { id, title } });
      };
  
    const handlePageChange = (page) => {
      setPage(page);
    };
    // console.log("store.length",store.length)
    const count = 4;
    // console.log("count",count)
  
    const handlePageButton = (val) => {
      setPage((prev) => prev + val);
    };

  return (

    <Grid className="Nav" h={"99vh"} w="94%" gap={10}>
      <Box mt='90px'>
          <TeacherNavTop handleSearch={handleSearch} />
        {/*  */}
        <Box className={`course ${courseSize}`}>
          <Grid
            templateColumns={{
              xl: "repeat(3,20% 60% 20%)",
              lg: "repeat(3,20% 60% 20%)",
              base: "repeat(1,1fr)",
            }}
            gap={{ xl: 0, lg: 0, base: 7 }}
          >
            <Text fontWeight={"bold"}>Welcome To Course</Text>
            <Select w={"80%"} onChange={handleSelect}>
              <option value="asc">Price Sort in Ascending Order</option>
              <option value="desc">Price Sort in Descending Order</option>
            </Select>
            <Box fontWeight={"bold"}>
              <Link to="/Teacher/addCourse">Create</Link>
            </Box>
          </Grid>
          <Box
            w={{ xl: "100%", lg: "90%", md: "80%", base: "80%" }}
            overflowX="auto"
          >
            <Table
              variant="striped"
              borderRadius="md"
              w="100%"
              size={tableSize}
            >
              <Thead>
                <Tr>
                  <Th>Title</Th>
                  <Th>Date</Th>
                  <Th>Category</Th>
                  <Th>Description</Th>
                  <Th>Price</Th>
                  <Th>Teacher</Th>
                </Tr>
              </Thead>
              {store?.length > 0 &&
                store?.map((el, i) => {
                  return (
                    <Tbody key={i}>
                      <Tr>
                        <Td>{el.title}</Td>
                        <Td>{convertDateFormat(el.createdAt)}</Td>
                        <Td>{el.category}</Td>
                        <Td>{el.description}</Td>
                        <Td>{el.price}</Td>
                        <Td>{el.teacher}</Td>
                        <Box>
                          <Button
                            onClick={() => handleVideos(el._id, el.title)}
                          >
                            Add Videos
                          </Button>
                        </Box>
                      </Tr>
                    </Tbody>
                  );
                })}
            </Table>
          </Box>
          <Box textAlign={{ xl: "right", lg: "right", base: "left" }}>
            <Button disabled={page <= 1} onClick={() => handlePageButton(-1)}>
              Prev
            </Button>
            <Pagination
              totalCount={count}
              current_page={page}
              handlePageChange={handlePageChange}
            />
            <Button
              disabled={page >= count}
              onClick={() => handlePageButton(1)}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Box>
    </Grid>


  )
}

export default AddTeacher;
