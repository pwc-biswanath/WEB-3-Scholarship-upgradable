import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles'
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Home from "@mui/icons-material/Home";
import {Link} from 'react-router-dom'

import List from '@mui/material/List';
import { Avatar } from '@mui/material';
  
  const drawerWidth = 240;

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  
  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        }),
        backgroundColor:"#d25304",
        color:"#fff"
      },
    }),
  );
  
  const mdTheme = createTheme();
  
  export const StudentSidebar = () => {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = () => {
      setOpen(!open);
    };
  
    return (
        <>
        <AppBar position="absolute" open={open} style={{backgroundColor:"#a81a02",color:"#fff"}}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              
            </Typography>
            
            <Avatar
            sx={{
              backgroundColor: '#e78d13',
              height: 40,
              width: 40,
              marginRight:1
            }}
          >
          </Avatar>
           
            <Typography variant="h6" color="inherit" noWrap>
          Student 
        </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
            style={{backgroundColor:"#a81a02",color:"#fff"}}
          >
            <Typography variant="h6" color="inherit" noWrap >
              E-Scholarship 
            </Typography>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon style={{color:"#fff"}}/>
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav"  >

              <ListItemButton button component={Link} to="/">
                  <ListItemIcon >
                      <Home style={{color:"#fff"}}/>
                  </ListItemIcon>
                  <ListItemText primary="Home" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon button component={Link} to="/student-details">
                    <DashboardIcon style={{color:"#fff"}}/>
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
              
                

              
          </List>
        </Drawer>
        </>
    );
  };
  