import * as React from 'react';
import Button from '@mui/material/Button';


export default function BasicButtons(props: any) {
  const { text} = props;
  return (    
      <Button defaultValue={30}
      sx={{
        color: 'dimgrey',
        fontFamily: "pfdintextcondpro",
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '20px',
      }}>{text} </Button>      
  );
}

