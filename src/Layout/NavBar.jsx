import React from 'react'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { dLogout } from '../store/actions/userAction'

const menus = [
    { lab: 'Class', url: '/loged/class' },
    { lab: 'Instructor', url: '/loged/instructor' },
]

export default function NavBar() {
    const profil = useSelector(state => state.data.profil)
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    function logout() {
        dispatch(dLogout(navigate))
    }

    return (
        <>
            <AppBar elevation={0} position="static" sx={{ width: `calc(100% - 230px)`, ml: `230px`, backgroundColor: 'white', }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}><Typography variant='h5'>List {menus.filter(e => e.url === location.pathname)[0].lab}</Typography></Box>
                        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" sx={{bgcolor: '#1f3983'}} />
                                </IconButton>
                            </Tooltip>
                            <Typography sx={{ ml: '10px' }} color='black'>Super Admin</Typography>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem onClick={logout} className='menu-item-setting'>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}
