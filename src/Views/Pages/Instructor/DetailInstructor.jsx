import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import AppBarInput from '../../../Components/AppBarInput';
import { server } from '../../../Config/server';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper'
import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/system';

export default function DetailInstructor() {
  const { id } = useParams()
  const [detail, setDetail] = useState(null)

  useEffect(() => {
    Swal.showLoading()
    axios({
      url: `${server}/instructor/${id}`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(({ data }) => {
        setDetail(data.data)
        Swal.close()
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <div className='outer-input'>
      <AppBarInput title='Detail Instructor' />
      <Container maxWidth='md' sx={{ py: '20px' }}>
        <Paper sx={{ borderRadius: '20px' }}>
          <div className='div-avatar-detail'>
            <Avatar sx={{ width: '200px', height: '200px', marginRight: '40px' }} src={detail && detail.avatar} />
            <Typography mt='16px' fontSize='18px' color='white' fontWeight={600}>{detail && detail.name}</Typography>
          </div>
          <Box p='20px'>
           <div dangerouslySetInnerHTML={{__html: (detail && detail.description)}}/>
          </Box>

        </Paper>
      </Container>
    </div>
  );
}
