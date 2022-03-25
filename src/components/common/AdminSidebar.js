import * as React from 'react';
import { styled, createTheme } from '@mui/material/styles'
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
import PeopleIcon from '@mui/icons-material/People';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import {Link} from 'react-router-dom'
import Home from "@mui/icons-material/Home";
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
  

  export const AdminSidebar = () => {
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
          Admin 
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

                <ListItemButton  button component={Link} to="/admin-dashboard">
                  <ListItemIcon>
                      <DashboardIcon style={{color:"#fff"}}/>
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
              
                <ListItemButton button component={Link} to="/student-list" >
                <ListItemIcon>
                    <PeopleIcon style={{color:"#fff"}}/>
                </ListItemIcon>
                <ListItemText primary="Students" />
                </ListItemButton>

                <ListItemButton button component={Link} to="/vendor-approved" >
                <ListItemIcon>
                    <SupervisedUserCircleIcon style={{color:"#fff"}}/>
                </ListItemIcon>
                <ListItemText primary="Vendors" />
                </ListItemButton>

                <ListItemButton button component={Link} to="/vendor-pending" >
                <ListItemIcon>
                    <CallReceivedIcon style={{color:"#fff"}}/>
                </ListItemIcon>
                <ListItemText primary="Requests" />
                </ListItemButton>

                <ListItemButton button component={Link} to="/all-issued-device" >
                <ListItemIcon>
                    <DevicesOtherIcon style={{color:"#fff"}}/>
                </ListItemIcon>
                <ListItemText primary="Issued Devices" />
                </ListItemButton>
                
                <ListItemButton button component={Link} to="/all-transaction" >
                <ListItemIcon>
                    <AccountTreeIcon style={{color:"#fff"}}/>
                </ListItemIcon>
                <ListItemText primary="All Transaction" />
                </ListItemButton>

                <ListItemButton button component={Link} to="/admin-wallet" >
                <ListItemIcon>
                    <AccountBalanceWalletIcon style={{color:"#fff"}}/>
                </ListItemIcon>
                <ListItemText primary="Wallet Balance" />
                </ListItemButton>
              
          </List>
        </Drawer>
        </>
    );
  };
  