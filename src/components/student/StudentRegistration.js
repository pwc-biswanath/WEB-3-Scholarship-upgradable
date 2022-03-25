import React, { useState, useEffect } from "react";
import Form from "./Form";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Header from "../common/Header"
import { createTheme, ThemeProvider } from "@mui/material/styles";

import {
  BlockChatinTransction,
  BlockChatinGetData,
} from "../../ABI-connect/connect";
import TransctionModal from "../shared/TransctionModal";
import { Footer } from "../common/Footer";


const useStyles = makeStyles(({ palette, ...theme }) => ({
  cardHolder: {
    background: "#f3f3f4",
    alignItems: "center",
    height: "100vh",
    overflow: "auto",
  },
})); 
const theme = createTheme();

const StudentRegistration = () => {
  const classes = useStyles();

  const [start, setStart] = useState(false);
  const [response, setResponse] = useState(null);

  const getDataFromDatabase = async (name, rollNo, dob) => {
    setStart(true);
    const responseData = await BlockChatinTransction(
      "studentRegistration",
      name,
      rollNo,
      143,
      dob
    );
    setResponse(responseData);
  };

  useEffect(() => {
    fetchStudentData();
  }, []);

  async function fetchStudentData() {
    const students = await BlockChatinGetData("getListOfStudents");
    console.log(students);
  }

  return (
    <>
    <ThemeProvider theme={theme}>
    <Box className={classes.cardHolder}>>
      {start && <TransctionModal response={response} />}
      <Header/>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
           <Grid container spacing={2}>
              <Grid item xl={4} lg={4} sm={12} xs={12}>
              </Grid>
              <Grid item xl={8} lg={8} sm={12} xs={12}>
                    <Form submitForm={getDataFromDatabase} start={start} />
              </Grid>
            </Grid>
      </Container>

      {/* <div className={classes.cardHolder}> */}
        
     {/*  </div> */}
      <Footer/>
      </Box>
      </ThemeProvider>
    </>
    
  );
};
export default StudentRegistration;
