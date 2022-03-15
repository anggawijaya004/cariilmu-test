
import axios from 'axios'
import Swal from 'sweetalert2';
import { server } from '../../Config/server';

export function login(input, navigate) {
    return (dispatch, getState) => {
        Swal.close()
        navigate(`/loged/class`)
    }
}

export function dLogout(navigate) {
    return (dispatch, getState) => {
        Swal.showLoading()
        sessionStorage.clear()
        dispatch({
            type: "GETPROFIL",
            payload: null
        })
        Swal.close()
        navigate(`/`)
    }
}

export function getClass(page) {
    return (dispatch, getState) => {
        Swal.showLoading()
        axios({
            url: `${server}/course`,
            method: 'get',
            params: {page: page, limit: 10},
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(({ data }) => {
                dispatch({
                    type: "GETCLASS",
                    payload: data.data
                })
                Swal.close()
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export function getInstructor(page) {
    return (dispatch, getState) => {
        Swal.showLoading()
        axios({
            url: `${server}/instructor`,
            method: 'get',
            params: {page: page, limit: 10},
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(({ data }) => {
                dispatch({
                    type: "GETINSTRUCTOR",
                    payload: data.data
                })
                Swal.close()
            })
            .catch(err => {
                console.log(err);
            })
    }
}