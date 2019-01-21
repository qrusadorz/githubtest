import React from 'react';
// import classNames from 'classnames';
import PropTypes from 'prop-types';
// import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import OpenInNewIcon from '@material-ui/icons/OpenInNew';

import WithItemsContext from '../components/contexts/WithItemsContext';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  appBar: {
    position: 'relative',
  },
  toolbarTitle: {
    flex: 1,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing.unit * 2,
  },
  cardActions: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing.unit * 2,
    },
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

// const tiers = [
//   {
//     name: 'タイトルA',
//     subheader: '人気No1',
//     price: '30000',
//     description: [
//       '10 users included',
//       '2 GB of storage',
//       'Help center access',
//       'Email support'
//     ],
//     buttonVariant: 'contained',
//   },
//   {
//     name: 'タイトルB',
//     price: '28000',
//     description: [
//       '20 users included',
//       '10 GB of storage',
//       'Help center access',
//       'Priority email support',
//     ],
//     buttonVariant: 'outlined',
//   },
//   {
//     name: 'EタイトルC',
//     price: '27000',
//     description: [
//       '50 users included',
//       '30 GB of storage',
//       'Help center access',
//       'Phone & email support',
//     ],
//     buttonVariant: 'outlined',
//   },
// ];
// const footers = [
//   {
//     title: 'Company',
//     description: ['Team', 'History', 'Contact us', 'Locations'],
//   },
//   {
//     title: 'Features',
//     description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
//   },
//   {
//     title: 'Resources',
//     description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
//   },
//   {
//     title: 'Legal',
//     description: ['Privacy policy', 'Terms of use'],
//   },
// ];

// function ItemDetail(props) {
class ItemDetail extends React.Component {
  async componentDidMount() {
    await this.props.items.getItems();
  }

  render() {
    const { classes, items } = this.props;
    const { id } = this.props.match.params;
    console.log("itemDetail match params id:", this.props.match.params.id);
    console.log("itemDetail items.items[id]:", items.items[0]);
    console.log("itemDetail typeof id:", typeof id);

    const item = items.items.find(item => item.id === parseInt(id)) || {
      name: "",
      subheader: "",
      price: "",
      shops: [
        { name: "11", price: "0", subheader: "", description: ["a", "b", "x",], },
        { name: "22", price: "0", subheader: "", description: ["g", "f", "d",], },
        { name: "33", price: "0", subheader: "", description: ["d", "g", "a",], },
      ],

    };
    const { shops } = item;
    console.log("itemDetail item:", item);
    console.log("itemDetail item.shops:", shops);

    return (
      <React.Fragment>
        <CssBaseline />
        {/* <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Company name
          </Typography>
          <Button>Features</Button>
          <Button>Enterprise</Button>
          <Button>Support</Button>
          <Button color="primary" variant="outlined">
            Login
          </Button>
        </Toolbar>
      </AppBar> */}
        <main className={classes.layout}>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              アイテム名:{item.name}
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" component="p">
              アイテムの説明をここに記述する。長い文章をずらずら書いた際にどうなるかのテスト。
            It&apos;s built <br />2019/01/04更新
          </Typography>
          </div>
          {/* End hero unit */}
          <Grid container spacing={40} alignItems="flex-end">
            {shops.map((tier, index) => (
              // Enterprise card is full width at sm breakpoint
              <Grid item key={tier.name} xs={12} sm={tier.name === 'Enterprise' ? 12 : 6} md={4}>
                <Card>
                  <CardHeader
                    title={tier.name}
                    subheader={index === 0 ? "人気No1." : tier.subheader}
                    titleTypographyProps={{ align: 'center' }}
                    subheaderTypographyProps={{ align: 'center' }}
                    action={index === 0 ? <StarIcon /> : null}
                    className={classes.cardHeader}
                  />
                  <CardContent>
                    <div className={classes.cardPricing}>
                      <Typography component="h2" variant="h3" color="textPrimary">
                        ¥{tier.price}
                      </Typography>
                      <Typography variant="h6" color="textSecondary">
                        円
                    </Typography>
                    </div>
                    {tier.description.map(line => (
                      <Typography variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </CardContent>
                  <CardActions className={classes.cardActions}>
                    {/* <Button fullWidth variant={tier.buttonVariant} color="primary" onClick={() => {}}> */}
                    <a href="https://www.google.co.jp" target="_blank" rel="noopener noreferrer" >
                      <Button fullWidth variant="contained" color="primary" onClick={() => { }}>
                        Go<OpenInNewIcon />
                      </Button>
                    </a>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </main>
        {/* Footer */}
        {/* <footer className={classNames(classes.footer, classes.layout)}>
        <Grid container spacing={32} justify="space-evenly">
          {footers.map(footer => (
            <Grid item xs key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              {footer.description.map(item => (
                <Typography key={item} variant="subtitle1" color="textSecondary">
                  {item}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </footer> */}
        {/* End footer */}
      </React.Fragment>
    );
  }
}

ItemDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WithItemsContext(ItemDetail));