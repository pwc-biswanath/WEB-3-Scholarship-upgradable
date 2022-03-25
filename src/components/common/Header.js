import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
  Drawer,
} from '@material-ui/core';
import Home from '@mui/icons-material/Home';
import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom"


const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: '#a81a02',
    '@media (max-width: 900px)': {
      paddingLeft: 0,
    },
  },
 
}));

export default function Header() {
  const { header, logo, drawerContainer } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());

    return () => {
      window.removeEventListener('resize', () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Home sx={{ mr: 2, color: '#fff' }} />
        </Link>
        <Typography variant='h6' color='inherit' noWrap>
          Welcome to E-Scholarship
        </Typography>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <Link to="/" style={{ textDecoration: 'none' }}>
        <IconButton
          {...{
            edge: 'start',
            color: 'inherit',
            'aria-label': 'menu',
            'aria-haspopup': 'true',
            onClick: handleDrawerOpen,
          }}
        >
          
          <Home />
        </IconButton>
        </Link>

        <Drawer
          {...{
            anchor: 'left',
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{/* {getDrawerChoices()} */}</div>
        </Drawer>

        <div>{welcomeLogo}</div>
      </Toolbar>
    );
  };

  // const getDrawerChoices = () => {
  //   return headersData.map(({ label, href }) => {
  //     return (
  //       <Link
  //         {...{
  //           component: RouterLink,
  //           to: href,
  //           color: 'inherit',
  //           style: { textDecoration: 'none' },
  //           key: label,
  //         }}
  //       >
  //         <MenuItem>{label}</MenuItem>
  //       </Link>
  //     );
  //   });
  // };

  const welcomeLogo = (
    <Typography variant='h6' component='h1' className={logo}>
      Welcome to E-Scholarship
    </Typography>
  );

  // const getMenuButtons = () => {
  //   return headersData.map(({ label, href }) => {
  //     return (
  //       <Button
  //         {...{
  //           key: label,
  //           color: 'inherit',
  //           to: href,
  //           component: RouterLink,
  //           className: menuButton,
  //         }}
  //       >
  //         {label}
  //       </Button>
  //     );
  //   });
  // };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
