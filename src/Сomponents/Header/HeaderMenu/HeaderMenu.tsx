import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import s from './HeaderMenu.module.scss';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div >
      <Button sx={{
        color: 'dimgrey',
        fontFamily: "pfdintextcondpro",
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '20px',}
      }      
        onClick={handleClick}>
        Магазины
      </Button>
      <Menu className={s.menuPosition}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        <MenuItem sx={{
        color: 'dimgrey',
        fontFamily: "pfdintextcondpro",
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '20px',
      }} onClick={handleClose}><NavLink to='/Wogy_Malinovka'>Магазин ул. Чюрлёниса 4</NavLink></MenuItem>
        <MenuItem sx={{
        color: 'dimgrey',
        fontFamily: "pfdintextcondpro",
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '20px',
      }} onClick={handleClose}><NavLink to='/WogyBY'>Магазин пр. Дзержинского 94</NavLink></MenuItem>        
        <div></div>
        <div></div>
      </Menu>
    </div>
  );
}