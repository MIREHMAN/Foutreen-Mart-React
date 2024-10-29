import * as React from 'react';
import PropTypes from 'prop-types';
import Divider from '@mui/material/Divider';
import Drawer, { drawerClasses } from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';

function MenuDrawerMobile({ open, toggleDrawer }) {
  
  const mainListItems = [
    { text: 'Home' },
    { text: 'Shop' },
    { text: 'Stores'},
    { text: 'About' },
  ];
  
  const secondaryListItems = [
    { text: 'Facebook', icon: <FacebookIcon /> },
    { text: 'LinkedIn', icon: <LinkedInIcon /> },
    { text: 'GitHub', icon: <GithubIcon /> },
  ];
  
 function MenuContent() {
    return (
      <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
        <List dense>
          {mainListItems.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
              <ListItemButton selected={index === 0}>
              
                <ListItemText primary={item.text} sx={{color:'whitesmoke', fontWeight:'800', p:2}} />
              </ListItemButton>
              <Divider />
            </ListItem>
            
          ))}
        </List>
  
        <List dense>
          {secondaryListItems.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
              <ListItemButton >
                <ListItemIcon sx={{color:'whitesmoke', fontWeight:'800'}}>{item.icon}</ListItemIcon >
                <ListItemText primary={item.text} sx={{color:'whitesmoke', fontWeight:'800'}}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Stack>
    );
  }
  
  
  return (
    <Drawer
    
      anchor="left"
      open={open}
      onClose={toggleDrawer(false)}
      sx={{
        [`& .${drawerClasses.paper}`]: {
          backgroundImage: 'none',
          backgroundColor: 'gray',
          width:'50%'
        },
      }}
    >
      <Stack
        sx={{
          maxWidth: '100dvw',
          height: '100%',
        }}
      >
        
     
        <Stack sx={{ flexGrow: 1 }}>
          <MenuContent />
          <Divider />
        </Stack>
        
        
      </Stack>
    </Drawer>
  );
}

MenuDrawerMobile.propTypes = {
  open: PropTypes.bool,
  toggleDrawer: PropTypes.func.isRequired,
};

export default MenuDrawerMobile;
