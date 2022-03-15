import React, { useState } from 'react';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import bg from '../../Assets/images/bg-2.png'
import logo from '../../Assets/images/logo.png';
import { useNavigate } from 'react-router';
import Grid from '@mui/material/Grid';
import { login } from '../../store/actions/userAction';
import { useDispatch } from 'react-redux';

export default function Login() {
    const dispatch = useDispatch()
    const [input, setInput] = useState({ username: '', password: '' })
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    function onChangeInput(event) {
        let { name, value } = event.target
        setInput({
            ...input,
            [name]: value
        })
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    function submit(event) {
        event.preventDefault()
        dispatch(login(input, navigate))
    }

    return (
        <Grid container spacing={0} className='root-login'>
            <Grid item md={8} sm={7} xs={12} className='box-left-login'>
                <img src={bg} className='bg-login' style={{ width: '100%' }} />
            </Grid>
            <Grid item md={4} sm={5} xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div className='box-form'>
                    <img src={logo} alt='logo' className='logo-login' />
                    <form onSubmit={(event) => submit(event)}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            value={input.username}
                            onChange={onChangeInput}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            autoComplete="current-password"
                            value={input.password}
                            onChange={onChangeInput}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <Visibility className='placeholder' /> : <VisibilityOff className='placeholder' />}
                                    </IconButton>
                                </InputAdornment>,
                            }}
                        />
                        <div className='btn-login'>
                            <Button
                                type="submit"
                                fullWidth
                                size='large'
                                variant="contained"
                                color="primary"
                            >
                                Login
                            </Button>
                        </div>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}