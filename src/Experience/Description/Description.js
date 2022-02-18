import './Description.css';
import { useState } from 'react';
import Popover from "@mui/material/Popover";
// import Fade from "@mui/material/Fade";
// import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import NotesIcon from '@mui/icons-material/Notes';

const Description = ({desc, tool}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className='desc-icn'>
      <NotesIcon aria-describedby={id} onClick={handleClick}/>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography className='typo-box' sx={{ p: 2 }}>{desc}</Typography>
        <Typography className='typo-box' sx={{ p: 2 }}>{tool}</Typography>
      </Popover>
    </div>)
}

export default Description