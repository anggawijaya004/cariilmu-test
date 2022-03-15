import React from 'react';

//comp
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider'

//icon
import SchoolIcon from '@mui/icons-material/School';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../Assets/images/logo.png'
import { makeStyles } from '@mui/styles';
import { useSelector } from 'react-redux';

const menus = [
    { lab: 'Class', url: '/loged/class', icon: <SchoolIcon/> },
    { lab: 'Instructor', url: '/loged/instructor', icon: <AccountCircleOutlinedIcon/> },
]

const useStyles = makeStyles((theme) => ({
    listItemSelected: {
      backgroundColor: '#fff391 !important',
      borderRadius:'12px !important'
    },
  }));

export default function SideBar() {
    const location = useLocation()
    const classes = useStyles()
    const profil = useSelector(state => state.data.profil)

    return (
        <>
            <Drawer
                sx={{
                    width: '230px',
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: '230px',
                        boxSizing: 'border-box',
                        border: 'none'
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Box textAlign='center' py='40px'>
                    <img src={logo} width='100px' alt='logo'/>
                </Box>
                <Divider/>
                <List sx={{ p: '20px', pt: '0px' }}>
                    {(menus).map((menu, i) => (
                        <div key={i}>
                            <ListItem classes={{selected: classes.listItemSelected}} button component={NavLink} to={menu.url} selected={menu.url === location.pathname} sx={{ my: '8px', '&:hover': {borderRadius:'12px', backgroundColor: '#fff7b0'}}}>
                                <ListItemIcon sx={{ minWidth: '40px' }}>
                                    {menu.icon}
                                </ListItemIcon>
                                <ListItemText sx={{ ml: 0 }} primary={menu.lab} />
                            </ListItem>
                        </div>
                    ))}
                </List>

            </Drawer>
        </>
    );
}
