import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from "../assets/Logo.jpg"
import { NavLink } from "react-router-dom"
import ComparatorDrawerInfo from '../pages/ComparatorDrawerInfo';
import {Car1,Car2} from '../mockData/mockData';

const pages = [{name:'Home',url:'/'}, {name:'Car',url:'/carPage'}, {name:'Comparator',url:'/compare'}];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [state, setState] = React.useState({
    right: false,
  });

const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

const comparatorList=[Car1,Car2];
  console.log(comparatorList);


const list = (anchor) => (
    <ComparatorDrawerInfo anchor={anchor} toggleDrawer={toggleDrawer} comparatorList={comparatorList}/>
  );


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' },mr: 1 }}>
          <img src={Logo} alt="LOGO" style={{ width:'50%' }} />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
            <nav id="navBar">
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <NavLink key={page} to={page.url} sx={{ my: 2, color: 'white', display: 'block', mr:10 }}>{page.name}</NavLink>
                </MenuItem>
              ))}
              
            </nav>

            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ENGINE 4 YOU
          </Typography>
          <nav id="navBar">
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} >
            {pages.map((page) => (
                <NavLink key={page} to={page.url} sx={{ my: 2, color: 'white', display: 'block', mr:10 }}>{page.name}</NavLink>
            ))}

          </Box>

          

          </nav>
          <Badge badgeContent={comparatorList.length} color="primary">
            <React.Fragment key={'right'}>
              <Button onClick={toggleDrawer('right', true)}>
                  <ListAltIcon/>
              </Button>

              <Drawer
                  anchor={'right'}
                  open={state['right']}
                  onClose={toggleDrawer('right', false)}
              >
                  {list('right')}
              </Drawer>
            </React.Fragment>
          </Badge>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;