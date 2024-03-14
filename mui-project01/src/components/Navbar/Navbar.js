import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { buildItems} from './consts/build';
import { qualityItems } from './consts/quality';
import { navbarStyles } from './styles';


import { useNavigate } from "react-router-dom";
import { Divider, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => {
  const navigate = useNavigate(); 
   
  return (
    <Drawer
          sx={navbarStyles.drawer}
        variant="permanent"
        anchor='left'
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <Divider sx={{ bgcolor:'rgba(255, 255, 255, 0.7)'}}/>
        <List>
            <ListItem 
                button                
                onClick={() => navigate()}
                >
                <ListItemButton>
                  <ListItemIcon sx={navbarStyles.icons}>
                    <HomeIcon/>
                  </ListItemIcon>
                  <ListItemText primary= 'Project Overview' />
                </ListItemButton>
              </ListItem>          
          </List>
          <Divider sx={{ bgcolor:'rgba(255, 255, 255, 0.7)'}}/>
        <Typography sx={navbarStyles.typography}>Build</Typography>
          <List>
            {buildItems.map((item, index) => (
              <ListItem 
                button
                key={item.id} 
                onClick={() => navigate(item.route)}
                >
                <ListItemButton>
                  <ListItemIcon sx={navbarStyles.icons}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List> 
          <Divider sx={{ bgcolor:'rgba(255, 255, 255, 0.7)'}} />
          
          <Typography sx={navbarStyles.typography}>Quality</Typography> 
          <List>
            {qualityItems.map((item, index) => (
              <ListItem 
                button
                key={item.id} 
                onClick={() => navigate(item.route)}
                >
                <ListItemButton>
                  <ListItemIcon sx={navbarStyles.icons}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>        
        </Box>
      </Drawer>
  )
}

export default Navbar
