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
      <Button
        
        id="basic-button"
        aria-controls="basic-menu"
        // aria-haspopup="true"
        className={s.menu}
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        
      >
        Магазины
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><NavLink to='/Wogy_Malinovka'>Магазин ул. Чюрлёниса 4</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to='/WogyBY'>Магазин пр. Дзержинского 94</NavLink></MenuItem>        
        <div></div>
        <div></div>
      </Menu>
    </div>
  );
}