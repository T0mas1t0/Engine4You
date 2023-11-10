import * as React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import MotorInfo from '../pages/CarPage/MotorInfo';
import Equipment from '../pages/CarPage/Equipment';
import Dimensions from '../pages/CarPage/Dimensions';
import Charging from '../pages/CarPage/Charging';
import Warranty from '../pages/CarPage/Warranty';



function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  

export default function CarSpecsTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Motor" {...a11yProps(0)} />
          <Tab label="Equipment" {...a11yProps(1)} />
          <Tab label="Dimensions" {...a11yProps(2)} />
          <Tab label="Charging" {...a11yProps(3)} />
          <Tab label="Warranty" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <MotorInfo/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Equipment/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Dimensions/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Charging/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Warranty/>
      </CustomTabPanel>
    </Box>
  );
}