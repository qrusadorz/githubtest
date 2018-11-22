import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const action = (
    <Button color="secondary" size="small">
        lorem ipsum dolorem
  </Button>
);

const styles = theme => ({
    snackbar: {
        margin: theme.spacing.unit,
    },
});

function Snackbar(props) {
    const { classes, message } = props;

    return (
        <div>
            <SnackbarContent className={classes.snackbar} message={message} action={action} />
            <SnackbarContent
                className={classes.snackbar}
                message={
                    'I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate.'
                }
                action={action}
            />
        </div>
    );
}

Snackbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Snackbar);
