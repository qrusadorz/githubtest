import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SimpleLineChart from '../components/SwitchListSecondary';
// import SimpleTable from './SimpleTable';
import { withRouter } from "react-router-dom";

import { titleEffectCallback, schemaEffectCallback } from '../utils/seo';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
});

function Dashboard(props) {
    useEffect(() => {
      titleEffectCallback(props);
      schemaEffectCallback();
    }, [props.location.pathname])
  
    const { classes } = props;

    return (
      <div className={classes.root}>
        <main className={classes.content}>
          <Typography variant="h4" gutterBottom component="h2">
            設定
          </Typography>
          <Typography component="div" className={classes.chartContainer}>
            <SimpleLineChart />
          </Typography>
          {/* <Typography variant="h4" gutterBottom component="h2">
            設定
          </Typography>
          <div className={classes.tableContainer}>
            <SimpleTable />
          </div> */}
        </main>
      </div>
    );
}

export default withStyles(styles)(withRouter(Dashboard));