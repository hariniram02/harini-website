import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
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
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    Cisco: {
      jobTitle: "Software Engineering Apprentice @",
      duration: "JULY 2019 - AUG 2019",
      desc: [
        "Shadowed data analysts, program/product managers, and software engineers at Cisco.",
        "Learned the basics of network devices, IT, programming, and networking between people.",
        "Presented a ​final capstone project​ to encourage more engagement for the program.",
        "Gained insight into how different groups of engineers, customer services, marketers, and business strategists work together cohesively on a project."
      ]
    },
    TAMUHack: {
      jobTitle: "Developer @",
      duration: "MAR 2021 - PRESENT",
      desc: [
        "Developing software tools to aid participants of Texas A&M/'s biannual hacakthons.",
        "Currently building discord bot with Python and connecting to PostgresSQL to improve effective communication towards participants."
      ]
    },
    "Girls Who Code": {
      jobTitle: "PSHS Chapter Co-President of",
      duration: "NOV 2018 - JAN 2020",
      desc: [
        "Connected the school with a nonprofit organization aimed at increasing the number of women in computer science.",
        "Formed a team of 7 ​high school girls to help teach a pseudo-code based programming curriculum to girls at ​3 local middle schools.",
        "Prepared and promoted discussions on how to subside the gender employment difference in computer science and how to encourage young girls to partake in programming."
      ]
    },
    "JPMorgan Chase": {
      jobTitle: "Virtual Software Engineering Intern @",
      duration: "JUN 2021",
      desc: [
        "Built data visualizations of charts and data analysis for traders to input information and monitor trading strategies.",
        "Leveraged interface with stock price feed data with Python/Git and implemented JPMorgan Chase Perspective tools with React/Typescript to display data.",
        "Gained experience working with financial data, web applications, and technical communication.",
      ]
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function(descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
