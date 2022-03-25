import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ImageCard } from "../common/ImageCard";
import VendorListModal from "./VendorListModal";
import StudentListModal from "./StudentListModal";
import { Footer } from "../common/Footer";
import Header from "../common/Header"

const theme = createTheme();

export default function LandingPage() {
  const [openVendorModal, setOpenVendorModal] = React.useState(false);
  const [openStudentModal, setOpenStudentModal] = React.useState(false);
  const closeVendorModal = () => setOpenVendorModal(false);
  const closeStudentModal = () => setOpenStudentModal(false);

  return (
    <ThemeProvider theme={theme}>
      {openVendorModal && (
        <VendorListModal
          openVendorModal={openVendorModal}
          closeVendorModal={closeVendorModal}
        />
      )}
      {openStudentModal && (
        <StudentListModal
          openStudentModal={openStudentModal}
          closeStudentModal={closeStudentModal}
        />
      )}
      <CssBaseline />

      {/* Add Header Component for responsiveness */}
      < Header/>

       <main > 
        {/* Hero unit */}
        <Box
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            minHeight: '100vh',
            minWidth:"100%",
            pt: 8,
           pb: 6,
          }}
        >
          <Container maxWidth='lg'>
            <Typography
              component='h1'
              variant='h2'
              align='center'
              color='text.primary'
              gutterBottom
              style={{marginTop:30}}
            >
              E-SCHOLARSHIP
            </Typography>
            <Typography
              variant='h5'
              align='center'
              color='text.secondary'
              paragraph
            >
              Reach benifies directly to beneficiaries
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction='row'
              spacing={1}
              justifyContent='center'
            >
              <div className='gridItems'>
                <Link to='/register' style={{ textDecoration: 'none' }}>
                  <ImageCard title='Student Register' image_index='0' />
                </Link>
                <Link to='/vendor-register' style={{ textDecoration: 'none' }}>
                  <ImageCard title='Vendor Register' image_index='1' />
                </Link>
                <div onClick={() => setOpenVendorModal(true)}>
                  <ImageCard title='Vendor Dashboard' image_index='2' />
                </div>

                <Link to='/admin-dashboard' style={{ textDecoration: 'none' }}>
                  <ImageCard title='Admin Dashboard' image_index='3' />
                </Link>
                <div onClick={() => setOpenStudentModal(true)}>
                  <ImageCard title='Student Dashboard' image_index='4' />
                </div>
              </div>
            </Stack>
          </Container>
          <Footer/>
        </Box>
      </main>
    </ThemeProvider>
  );
}
