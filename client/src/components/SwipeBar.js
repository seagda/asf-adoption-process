import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import ListIcon from '@material-ui/icons/List';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import MessageIcon from '@material-ui/icons/Message';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme();

theme.typography.h2 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={4}>
            <ThemeProvider theme={theme}>
                <Typography>{children}</Typography>
            </ThemeProvider>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
}));

export default function SwipeBar(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
    
        >
          <Tab label="Current Dog Status" icon={<BeenhereIcon />} {...a11yProps(0)} />
          <Tab label="Behavior Assessment Score" icon={<ListIcon />} {...a11yProps(1)} />
          <Tab label="Behavior Challenges" icon={<PriorityHighIcon />} {...a11yProps(2)} />
          <Tab label="General Notes" icon={<MessageIcon />} {...a11yProps(3)} />
         </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {props.dogStatus}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Current Score: A (200 / 215 Total Points) 
        Based on Behavioral Assessment Score: 2-12-2021
      </TabPanel>
      <TabPanel value={value} index={2}>
        Lowest Scores According to the Most Recent Behioral Assessment: 
        * Strong reaction to loud noises: 2/5
        * Aggresive behavior towards children: 2/5
      </TabPanel>
      <TabPanel value={value} index={3}>
       Overall, Odin is a wonderful and well trained dog ready for adoption. An ideal home would be a relatively quiet home without children. 
      </TabPanel>

    </div>
  );
}
