import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import AppBarInput from '../../../Components/AppBarInput';
import { server } from '../../../Config/server';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper'
import { Avatar, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

export default function DetailAnggota() {
  const { id } = useParams()
  const [detail, setDetail] = useState(null)

  useEffect(() => {
    Swal.showLoading()
    axios({
      url: `${server}/course/${id}`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
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
      <AppBarInput title='Detail Course' />
      <Container maxWidth='lg' sx={{ py: '20px' }}>
        <Paper sx={{ borderRadius: '20px' }}>
          <div className='div-avatar-detail'>
            <Avatar sx={{ width: '100%', height: '400px' }} variant='rounded' src={detail && detail.cover} />
          </div>
          {
            detail &&
            <Box mt='20px'>
              <Grid container spacing={3} p='20px'>
                <Grid item sm={6}>
                  <Typography fontSize='14px'>Kode</Typography>
                  <Typography fontSize='18px' fontWeight={600}>{detail.code}</Typography>
                </Grid>
                <Grid  item sm={6}>
                  <Typography fontSize='14px'>Judul</Typography>
                  <Typography fontSize='18px' fontWeight={600}>{detail.name}</Typography>
                </Grid>
                <Grid item sm={6}>
                  <Typography fontSize='14px'>Kategori</Typography>
                  <Typography fontSize='18px' fontWeight={600}>{detail.course_category.name}</Typography>
                </Grid>
                <Grid item sm={6}>
                  <Typography fontSize='14px'>Tingkatan</Typography>
                  <Typography fontSize='18px' fontWeight={600}>{detail.course_level.name}</Typography>
                </Grid>
                <Grid item sm={12}>
                  <Typography fontSize='14px'>Deskripsi</Typography>
                  <div dangerouslySetInnerHTML={{ __html: (detail.description) }} />
                </Grid>
              </Grid>
            </Box>
          }
        </Paper>
      </Container>
    </div>
  );
}
