import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import s from './Button.module.scss';

export default function BasicButtons(props: any) {
  const { text} = props;
  return (    
      <Button className={s.button}>{text} </Button>      
  );
}

