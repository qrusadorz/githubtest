import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import Fab from '@material-ui/core/Fab';
// import HomeIcon from '@material-ui/icons/Home';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

// import { Link } from "react-router-dom";

// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
// import firebase, { uiConfig } from '../firebase/firebase'

// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';

// import AlignItemsList from '../components/itemsList';
import Album from '../components/top';

const styles = theme => ({
    //   root: {
    //     textAlign: 'center',
    //     paddingTop: theme.spacing.unit * 20,
    //   },

    // TODO original test
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        // height: '100vh',
        height: '100%',
        overflow: 'auto',
    },

    // footer: {
    //     backgroundColor: theme.palette.background.paper,
    //     padding: theme.spacing.unit * 6,
    // },
    footer: {
        marginTop: theme.spacing.unit * 8,
        borderTop: `1px solid ${theme.palette.divider}`,
        padding: `${theme.spacing.unit * 6}px 0`,
    },
    fab: {
        position: 'fixed',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
      },
});

// const footers = [
//     {
//         title: 'Company',
//         description: ['Team', 'History', 'Contact us', 'Locations'],
//     },
//     {
//         title: 'Features',
//         description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
//     },
//     {
//         title: 'Resources',
//         description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
//     },
//     {
//         title: 'Legal',
//         description: ['プライバシー', '利用規約'],
//     },
// ];

function Main(props) {
    const { classes } = props;
    return (
        <main className={classes.content}>
            {
                // !!user || <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                // user &&
                // <Typography variant="h4" gutterBottom component="h2">
                //     {user.uid}
                // </Typography>
            }
            {/* <Typography variant="h4" gutterBottom component="h2">
                Orders
            </Typography> */}
            {/* <AlignItemsList /> */}
            {/* <Qrcode /> */}
            <Album />
            {/* mainから出したいがスクロール問題でNG */}
            {/* Footer */}
            {/* <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Something here to give the footer a purpose!
                </Typography>
            </footer> */}
            {/* End footer */}
            {/* Footer */}
            {/* <footer className={classNames(classes.footer, classes.layout)}>
                <Grid container spacing={32} justify="space-evenly">
                    {footers.map(footer => (
                        <Grid item xs key={footer.title}>
                            <Typography variant="h6" color="textPrimary" gutterBottom>
                                {footer.title}
                            </Typography>
                            {footer.description.map(item => (
                                <Link to="/privacy" key={item}>
                                    <Typography key={item} variant="subtitle1" color="textSecondary">
                                        {item}
                                    </Typography>
                                </Link>
                            ))}
                        </Grid>
                    ))}
                </Grid>
            </footer> */}
            {/* End footer */}
            <Fab color="primary" className={classes.fab} aria-label="Scroll up" onClick={() => window.scrollTo({top: 0,behavior: "smooth"})}>
                {/* <HomeIcon /> */}
                <ArrowUpwardIcon />
            </Fab>
        </main>
        );
}

Main.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Main));
