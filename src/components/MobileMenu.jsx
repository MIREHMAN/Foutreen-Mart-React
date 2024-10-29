import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuDrawerMobile from './MenuDrawerMobile';


function MobileMenu() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };



  return (
    <Box sx={{ width: '100%'}}>
    <AppBar position="static" sx={{backgroundColor:'gray'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex'} }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <MenuDrawerMobile open={open} toggleDrawer={toggleDrawer} />
          </Box>
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
  
              display: { xs: 'flex'},
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 800,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            14 Mart
          </Typography>
         
          
        </Toolbar>
      </Container>
    </AppBar>
    </Box>
  );
}
export default MobileMenu;
