import React, { useContext, useEffect } from 'react';
// import classNames from 'classnames';
// import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CircularProgress from '@material-ui/core/CircularProgress';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from '@material-ui/core/Fab';
// import HomeIcon from '@material-ui/icons/Home';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Grid from '@material-ui/core/Grid';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import StarIcon from '@material-ui/icons/StarBorder';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import { withRouter } from "react-router-dom";

import ImageButton from '../components/imageButton';

import { ItemsContext } from '../contexts/items'

import config from '../configs/site';

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
  // TODO TEST
  heroDescription: {
    marginTop: theme.spacing.unit * 3,
  },
  // TODO TEST
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
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
  progress: {
    margin: theme.spacing.unit * 2,
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
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

function ItemDetail(props) {
  const { items = [] } = useContext(ItemsContext);
  // console.log("render itemDetail items:", items);

  // // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   getItems();
  // }, []);

  // const onClickFb = () => {
  //   console.log("history:", props.history);
  //   if (props.history.length) {
  //     props.history.goBack();
  //   } else {
  //     props.history.push('/');
  //   }
  // };
  const onClickFb = () => props.history.goBack();

  const { classes } = props;
  const { id } = props.match.params;
  console.log("itemDetail match params id:", id);

  const item = items.find(item => item.id === id);

  useEffect(() => {
    // TOOD TEST アドレスとタイトルの不一致解消検証
    if (item) {
      document.title = `${config.name} - ${item.name}`;
    }
    // page遷移後のスクロール復元
    window.scrollTo(0, 0);

    window.gtagPageview(props.location.pathname);
    // console.log("update:", props.location.pathname);
  }, [props.location.pathname]);

  useEffect(() => {
    if (item) {
      document.title = config.getItemTitle(item);
      // TODO 今度まとめる
      const tag = { name: "Description", nodeName: "META" };
      for (const node of document.head.childNodes) {
        if (node.name === tag.name && node.nodeName === tag.nodeName) {
          node.content = config.getItemDetailMetaDescription(item);
          return;
        }
      }
    }
  });

  if (!item) {
    return (
      <>
        {/* <CssBaseline /> */}
        <main className={classes.layout}>
          <div className={classes.heroContent}>
            <CircularProgress className={classes.progress} align="center" />
          </div>
        </main>
      </>
    );
  }

  const { sites } = item;
  // console.log("itemDetail item:", item);

  return (
    <>
      {/* <CssBaseline /> */}
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
            {item.name}
          </Typography>
          {/* TODO TEST */}
          <ImageButton img={item.ogimg} url={item.url} />
          <div className={classes.heroDescription}></div>
          {config.getItemDetailDescription(item).map((line, index) => (
            <Typography variant={line.variant} align="center" color="textSecondary" component="p"  key={index}>
              {line.text}
            </Typography>
          ))}
        </div>
        {/* <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    公式サイト
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div> */}
        {/* End hero unit */}
        <Grid container spacing={40} alignItems="flex-end">
          {sites.map((tier, index) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.url} xs={12} sm={tier.name === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.name}
                  // subheader={index === 0 ? "人気No1." : tier.subheader}
                  subheader={`${config.itemDetailSiteTitle || "人気"}No.${index + 1}`}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={index === 0 ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      {tier.price.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' })}
                    </Typography>
                    {/* <Typography variant="h6" color="textSecondary">
                      円
                    </Typography> */}
                  </div>
                  {/* // TODO TEST */}
                  {/* <Typography variant="h6" color="textSecondary"> */}
                  <Typography variant="subtitle1" align="center">
                    {/* // IEではNumber.parseIntなし */}
                    {parseInt(tier.price / item.price * 100)}%
                  </Typography>
                  {tier.description && tier.description.map(line => (
                    <Typography variant="subtitle1" align="center" key={line}>
                      {line}
                    </Typography>
                  ))}
                </CardContent>
                <CardActions className={classes.cardActions}>
                  {/* <Button fullWidth variant={tier.buttonVariant} color="primary" onClick={() => {}}> */}
                  {/* <a href={tier.url} target="_blank" rel="noopener noreferrer" > */}
                  <Button fullWidth variant="contained" color={index === 0 ? "primary" : "secondary"} href={tier.url} target="_blank" rel="noopener noreferrer" >
                    {config.itemDetailButton || "Go"}<OpenInNewIcon />
                  </Button>
                  {/* </a> */}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </main>
      <Fab color="primary" className={classes.fab} onClick={onClickFb}>
        {/* <HomeIcon /> */}
        <ArrowBackIcon />
      </Fab>
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
    </>
  );
}

export default withStyles(styles)(withRouter(ItemDetail));
