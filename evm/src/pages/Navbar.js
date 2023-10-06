import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import logo from './img/pic.jpg';
import { Link } from 'react-router-dom'
import Both from '../components/Both';
import Profile from '../components/Profile';
import Comments from '../components/Comments';
import event from './img/logo.png';
import Userpolicies from '../components/Userpolicies';
const pages = ['Events', 'Wishlist', 'Services','Gallery', 'Payment','UserPolicies'];
const settings = [];
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.55),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.55),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '18ch',
    },
  },
}));

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
    <AppBar position="static" style={{backgroundColor:"Black"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <center> <Avatar style={{height:40, width:40}}> <img src={event} style={{height:"100%"}} /></Avatar>   </center>
          &nbsp; &nbsp; &nbsp;
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/MiniApp"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Algerian',
              fontWeight: 800,
              letterSpacing: '.0.5rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Event Mangement System
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
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
              
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                  <Link to={`/${page}`} style={{ textDecoration: 'none', color: 'white' }}>
                                            {page}</Link>
                </Typography>
                
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <HomeIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
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
            Home
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                 <Link to={`/${page}`} style={{fontSize: "15.5px" , textDecoration: 'none', color: 'white', fontFamily: 'Algerian', wordSpacing: '.7rem' }}>
                                    {page}</Link>
              </Button>
            ))}
          &nbsp; &nbsp; <a href="https://telegram.me/vachaspathi" style={{fontSize: "15.5px", color: 'white', fontFamily:'Algerian'}}><br/>CONTACTUS
          </a>
          &nbsp; &nbsp; &nbsp; <a href="https://manojteja2004.wixsite.com/my-site-1" style={{fontSize: "15.5px", color: 'white', fontFamily:'Algerian'}}><br/>ABOUT US
          </a>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Vachaspathi Gnaneswar" src = {logo} width = "1200" height="1200" style={{position: 'static', top:"10px"}}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={Profile} >
                <Link to='/Profile'>Account</Link>
               </MenuItem>
               <MenuItem onClick={Comments} >
                <Link to='/Comments'>Comments</Link>
               </MenuItem>
              <MenuItem onClick={Both} >
                <Link to='/Settings'>Settings</Link>
               </MenuItem>
               <MenuItem href='/' onClick={Both} >
                <Link to='/'>Logout</Link>
               </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </div>
  );
};
export default NavBar;