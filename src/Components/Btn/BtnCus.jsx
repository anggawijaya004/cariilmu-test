import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button'
import React from 'react'

const useStyles = makeStyles({
    // buttonConatined: {
    //     border: '1px solid #9c27b0',
    //     '&:hover': {
    //         backgroundColor: '#fff',
    //         color: '#9c27b0',
    //         border: '1px solid #9c27b0',
    //         boxShadow: 'none'
    //     },
    // },
    // buttonOutlined: {
    //     '&:hover': {
    //         backgroundColor: '#9c27b0',
    //         color: '#fff',
    //     },
    // },
    // buttonNone: {
    //     '&:hover': {
    //         backgroundColor: '#9c27b0',
    //         color: '#fff',
    //     },
    // },
    // buttonAct: {
    //     backgroundColor: 'rgba(255, 255, 255, 0.19)',
    // }
})

export default function BtnCus(props) {
    const classes = useStyles()
    return (
        <Button href={props.href} sx={{ textTransform: 'capitalize !important', boxShadow:'none', borderRadius: '20px', p: '4px 16px', height: '40px', fontSize:'14px' }} variant={props.variant} color={props.color} style={props.style} size={props.size} onClick={props.onClick} type={props.type}>{props.icon}{props.text}</Button>
    )
}
