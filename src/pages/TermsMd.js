import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";

import { titleEffectCallback, schemaEffectCallback } from '../utils/seo';

import Markdown from '../components/Markdown';
import raw from "raw.macro";

const styles = theme => ({
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`,
    // for buttom navigation.
    marginBottom: theme.spacing.unit * 6,
  },
});


const md = raw('../articles/terms.md');

function TermsMd(props) {
  useEffect(() => {
    titleEffectCallback(props);
    schemaEffectCallback();
  }, [props.location.pathname])

  const { classes } = props;
  return <Markdown className={classes.markdown}>{md}</Markdown>;
}

export default withStyles(styles)(withRouter(TermsMd));