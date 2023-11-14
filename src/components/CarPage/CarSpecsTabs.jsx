import {useState,useEffect} from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import MotorInfo from './MotorInfo';
import Equipment from './Equipment';
import Dimensions from './Dimensions';
import Charging from './Charging';
import Warranty from './Warranty';



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

  

export default function CarSpecsTabs(props) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {

    

  }, [props]);

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
        <MotorInfo info={props.info.motorInfo}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Equipment info={props.info.equipment}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Dimensions info={props.info.dimensions}/>
      </CustomTabPanel>
      {
        props.info.charging.active &&
        <CustomTabPanel value={value} index={3}>
          <Charging info={props.info.charging.elements}/>
        </CustomTabPanel>
      }
      
      <CustomTabPanel value={value} index={4}>
        <Warranty  info={props.info.warranty}/>
      </CustomTabPanel>
    </Box>
  );
}