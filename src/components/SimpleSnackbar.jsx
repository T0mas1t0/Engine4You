import {Fragment,forwardRef} from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SimpleSnackbar({text,open,handleClose,severityType}) {
  
  

  const action = (
    <Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Fragment>
  );

  return (
    <div>
      
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        
        action={action}
      >
      <Alert onClose={handleClose} severity={severityType} sx={{ width: '100%' }}>
        {text}
      </Alert>
      </Snackbar>
    </div>
  );
}