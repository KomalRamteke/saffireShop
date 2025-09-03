import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import bg from './bg.png';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';

import Slides from './model/Slides';
import Legacy from './model/Legacy';
import Services from './model/Services';
import ContactUs from './model/ContactUs';
import RepairVideo from './model/RepairVideo';
import './App.css';

export default function App() {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
const handleScroll = (id) => (e) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <div>
      {/* Header */}
      <Box
        sx={{
          width: '100%',
          bgcolor: '#000B23',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px',
        }}
      >
        {/* Left side: Shop name + tagline */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            color: 'white',
            flexShrink: 0,
            fontFamily: 'Castellar',
          }}
        >
          <Box sx={{ fontSize: '2rem', fontWeight: 'bold',paddingLeft:'2rem' }}>
                Sapphire Electronics
          </Box>
          <Box sx={{ fontSize: '1rem', marginLeft: 5 }}>
            Audio and Video Repair
          </Box>
        </Box>

        {/*  Tabs */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="secondary"
          >
            <Tab label="About Us" sx={{ color: 'white' }} component="a" href="#our-Legacy" onClick={handleScroll("our-Legacy")} />
            <Tab label="Service" sx={{ color: 'white' }} component="a" href="#service" onClick={handleScroll("service")}/>
            <Tab label="Repair Video" sx={{ color: 'white' }} component="a" href="#repairVideo" onClick={handleScroll("repairVideo")}/>
            <Tab label="Contact Us" sx={{ color: 'white' }} component="a" href="#contact-us" onClick={handleScroll("contact-us")}/>
          </Tabs>
        </Box>

        {/* Mobile view */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <IconButton sx={{ color: 'white' }} onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
            <List>
              <ListItem button component="a" href="#our-Legacy" onClick={() => setOpen(false)}>
                <ListItemText primary="About Us" />
              </ListItem>
              <ListItem button component="a" href="#service" onClick={() => setOpen(false)}>
                <ListItemText primary="Service" />
              </ListItem>
              <ListItem button component="a" href="#repairVideo" onClick={() => setOpen(false)}>
                <ListItemText primary="Repair Video" />
              </ListItem>
              <ListItem button component="a" href="#contact-us" onClick={() => setOpen(false)}>
                <ListItemText primary="Contact Us" />
              </ListItem>
            </List>
          </Drawer>
        </Box>
      </Box>

      
      <Box sx={{ position: 'relative', width: '100%' }}>
        <img
          src={bg}
          alt="bg"
          style={{
            width: '100%',
            height: '30vh', 
            objectFit: 'fill',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            right: '10%',
            transform: 'translateY(-50%)',
            fontFamily: 'Monotype Corsiva',
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textShadow: '2px 2px 6px rgba(0,0,0,0.7)',
            maxWidth: '400px',
            textAlign: 'center',
          }}
        >
          Crystal-Clear Repairs,
          <br />
          Sapphire-Strong Performance.
        </Box>
      </Box>

      <br />
      <Legacy />
      <Slides />
      <br />
      <Services />
      <br />
      <RepairVideo />
      <br />
      <ContactUs />
    </div>
  );
}
