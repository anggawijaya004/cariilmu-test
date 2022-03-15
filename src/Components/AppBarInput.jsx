import React from 'react'
import Paper from '@mui/material/Paper'
import { IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

export default function AppBarInput(props) {
    const navigate = useNavigate()
    return (
        <>
            <Paper elevation={0} sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', p:'20px' }}>
                <IconButton onClick={() => navigate(-1)}>
                    <ArrowBackIcon />
                </IconButton>
                <div style={{marginLeft:'20px'}}>
                    <span>{props.title}</span>
                </div>
            </Paper>
        </>
    )
}
