import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchInput(props) {
  return (
    <Paper
      component="form"
      elevation={1}
      sx={{ p: '2px 6px', display: 'flex', alignItems: 'center', width: 200, borderRadius:10, height:'40px'}}
    >
      <InputBase
        sx={{ ml: 2, flex: 1 }}
        placeholder="Cari"
        value={props.value}
        onChange={props.onChange}
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}