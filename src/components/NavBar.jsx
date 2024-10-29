import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Home, Search } from '@mui/icons-material';
import SearchBar from './SearchBar';


const pages = ['Home', 'Shop', 'Stores', 'About'];

function NavBar() {
  return (
    <Box sx={{ mt:3, width: '100%'}}>
    <AppBar position="static" sx={{borderRadius:'6px',backgroundColor:'gray'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Box
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { md: 'flex' },
              color:'inherit'
            }}
          >
            <Home/ >
          </Box>

        
          <Box sx={{ flexGrow: 1, display: {md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                
                sx={{ my:1,mx:1, color: 'white', fontWeight:'600',display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            
           <SearchBar/>
           
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </Box>
  );
}
export default NavBar;
