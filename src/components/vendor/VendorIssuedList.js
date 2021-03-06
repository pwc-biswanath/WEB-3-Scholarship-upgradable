import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import IssuedStudentData from "../vendor/IssuedStudentData";
import { BlockChatinGetData } from "../../ABI-connect/connect";
import { VendorSidebar } from "../common/VendorSidebar";
import { Footer } from "../common/Footer";

const theme = createTheme();
export default function AllIssuedList() {
  const [issueDevice, setIssueDevice] = useState([]);
  const vendorId = localStorage.getItem("vendorID");

  useEffect(() => {
    fetchStudentData();
  }, []);

  async function fetchStudentData() {
    const deviceIssue = await BlockChatinGetData("getListOfDeviceIssue");
    const filterData = deviceIssue.filter(
      (data) => data.vendorIndex === vendorId
    );
    setIssueDevice(filterData);
  }

  return (
    <ThemeProvider theme={theme}>
     <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <VendorSidebar name=""/>
     
        {/* Hero unit */}
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }} style={{marginTop:40}}>
                  <IssuedStudentData
                    title="All Iussed Device List"
                    issueDevice={issueDevice}
                    back_url={"/admin-dashboard"}
                  />
                </Paper>
              </Grid>
            </Grid>
          </Container>
          <Footer/>
        </Box>
     </Box>
    </ThemeProvider>
  );
}
