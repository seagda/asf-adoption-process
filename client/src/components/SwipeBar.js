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
  fontSize: '18rem',
  '@media (min-width:600px)': {
    fontSize: '6.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '16rem',
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
  bigFont: {
    fontSize: '10.2rem',
  }
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
          variant="scrollable"
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
      <TabPanel className={classes.bigFont} value={value} index={0}>
        {props.dogStatus}
        {props.currentlyWithFirstName ? (`Currently With: ${props.currentlyWithFirstName} ${props.currentlyWithLastName} 
        ${props.currentlyWithEmail}`): null}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {props.currentScore}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {props.lowScores}
      </TabPanel>
      <TabPanel value={value} index={3}>
       {props.aboutDog}
       {props.adminNotes}
       </TabPanel>

    </div>
  );
}
