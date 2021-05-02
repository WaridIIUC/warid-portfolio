import React from "react";
import ProjectFour from "./DotnetProjects/ProjectFour";
import ProjectOne from "./ReactProjects/ProjectOne";
import ProjectThree from "./ReactProjects/ProjectThree";
import ProjectTwo from "./ReactProjects/ProjectTwo";

// material ui imports
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
//========================

// material ui finctions

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography component={'span'} variant={'body2'}>{children}</Typography>
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
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: "100%",
    },
  }));
//========================
  


const Project = () => {
// material ui const

    const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
//========================

  return (
    <div className="container" id = "projects">
      <div className="">
        <div>
        <h1 className = "text-center mt-3">My Projects</h1>
        </div>
        <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="React" {...a11yProps(0)} />
          <Tab label="DotNet" {...a11yProps(1)} />
          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <ProjectOne></ProjectOne>
        <ProjectTwo></ProjectTwo>
        <ProjectThree></ProjectThree>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <ProjectFour></ProjectFour>
        </TabPanel>
        {/* <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel> */}
      </SwipeableViews>
    </div>
        {/* <ProjectOne></ProjectOne>
        <ProjectTwo></ProjectTwo>
        <ProjectThree></ProjectThree>
        <ProjectFour></ProjectFour> */}
      </div>
    </div>
  );
};

export default Project;
