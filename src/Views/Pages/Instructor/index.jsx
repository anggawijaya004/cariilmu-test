import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
import SearchInput from '../../../Components/Input/SearchInput'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Avatar, Box, Pagination, Typography } from '@mui/material';
import { getInstructor } from '../../../store/actions/userAction';

export default function Instructor() {
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = useState(null);
  const [page, setPage] = useState(1)
  const [idCr, setIdCr] = useState(null)
  const navigate = useNavigate()
  const col = ['No', 'Nama', 'Total Kelas', 'Opsi']
  const [searchValue, setSearchValue] = useState('')
  const instructor = useSelector(state => state.data.instructor)
  const [data, setData] = useState([])
  const [dataSearch, setDataSearch] = useState(data)
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    dispatch(getInstructor(page))
  }, [page])

  const handleClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    setIdCr(id)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (instructor) {
      setData(instructor.records)
      setDataSearch(instructor.records)
    }
  }, [instructor])

  function handleSearch(e) {
    const value = e.target.value
    let updatedData = []
    setSearchValue(value)

    if (value.length) {
      updatedData = data.filter(item => {
        const startsWith =
          item.name.toLowerCase().startsWith(value.toLowerCase())
        const includes =
          item.name.toLowerCase().includes(value.toLowerCase())
        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
      })
      setDataSearch(updatedData)
      setSearchValue(value)
      setFlag(!flag)
    } else {
      setDataSearch(data)
    }
  }

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  console.log(instructor)

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <SearchInput value={searchValue} onChange={handleSearch} />
        </div>
      </div>
      <TableContainer component={Paper} sx={{ mt: '20px', borderRadius: '20px' }}>
        <Table aria-label="simple table">
          <TableHead sx={{ bgcolor: '#f2edf5' }}>
            <TableRow>
              {
                col.map((e, i) => (
                  <TableCell key={i} align={"center"} sx={{ fontWeight: 700 }}>{e}</TableCell>
                ))
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {instructor && dataSearch
              .map((e, i) => (
                <TableRow
                  key={i}
                >
                  <TableCell align="center" sx={{ fontSize: '14px' }}>
                    {((page - 1) * 10) + i + 1}
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: '14px', display: 'flex', alignItems: 'center' }}>
                    <Avatar src={e.avatar} />
                    <Typography ml='16px'>{e.name}</Typography>
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: '14px' }}>{e.total_courses}</TableCell>
                  <TableCell align="center">
                    <IconButton size='small' onClick={(event) => handleClick(event, e.id)}>
                      <MoreHorizSharpIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
          <Menu
            elevation={2}
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            transformOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <MenuItem instructorName='menu-item-setting' onClick={() => navigate(`/loged/instructor/detail/${idCr}`)} >
              <InfoOutlinedIcon sx={{ mr: '10px' }} /> Detail
            </MenuItem>
            <Divider sx={{ marginTop: '2px !important', marginBottom: '2px !important' }} />
            <MenuItem instructorName='menu-item-setting' >
              <EditOutlinedIcon sx={{ mr: '10px' }} /> Ubah
            </MenuItem>
            <Divider sx={{ marginTop: '2px !important', marginBottom: '2px !important' }} />
            <MenuItem instructorName='menu-item-setting'><DeleteOutlineOutlinedIcon sx={{ mr: '10px' }} /> Hapus</MenuItem>
          </Menu>
        </Table>
        <Box display='flex' justifyContent='flex-end' p='20px'>
          <Pagination page={instructor && instructor.current_page} onChange={handleChangePage} count={instructor && instructor.total_page} color='primary' />
        </Box>
      </TableContainer>
    </>
  );
}
