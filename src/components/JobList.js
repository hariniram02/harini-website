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
    Chevron: {
      jobTitle: "Software Engineering Intern @",
      duration: "MAY 2022 - AUG 2022",
      desc: [
        "Developed a new data integration solution via API to ingest crude oil pipeline data into Chevron Data Lake using Azure Data Factory, Azure Databricks, and SQL/PySpark.",
        "Project provides company $250k - $500k of estimated annualized business value.",
        "Enabled crude oil schedulers/traders to make quicker decisions on purchases and sales.",
        "Authored technical design documentation/canonical data mapping sheet overviewing new solution for support team’s use post project go-live.",
        "Gained working experience in an Azure DevOps environment through SAFe/Agile methodology."
      ]
    },
    TAMUHack: {
      jobTitle: "Software Developer @",
      duration: "MAR 2021 - AUG 2021",
      desc: [
        "Developing software tools to aid participants of Texas A&M/'s biannual hacakthons.",
        "Built discord bot with Python and connecting to PostgresSQL to improve effective communication towards participants."
      ]
    },
    "Home Roots Foundation": {
      jobTitle: "SEO Developer @",
      duration: "JUL 2021 - AUG 2021",
      desc: [
        "Fixed metadata issues by debugging HTML code to optimize search engine results for mobile version of website.",
        "Analyzed website’s Javascript code to understand how web crawlers access and render content."
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
