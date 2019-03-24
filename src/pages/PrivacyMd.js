import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Markdown from '../components/Markdown';
import raw from "raw.macro";

const styles = theme => ({
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`,
    // for buttom navigation.
    marginBottom: theme.spacing.unit * 6,
  },
});

const md = raw('../articles/privacy.md');

function PrivacyMd(props) {
  const { classes } = props;
  return <Markdown className={classes.markdown}>{md}</Markdown>;
}

export default withStyles(styles)(PrivacyMd);