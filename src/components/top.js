import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import { withRouter } from "react-router-dom";

// import CustomizedInputBase from './searchField'
import IntegrationReactSelect from './integrationReactSelect'

// import WithItemsContext from '../components/contexts/WithItemsContext';
import { ItemsContext } from '../contexts/items'

import config from '../configs/site'

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

// const items = [
//   { id:1, name:"アイテムN", price1:"30000", price2:"29000", price3:"28000", },
//   { id:2, name:"アイテムP", price1:"22000", price2:"21000", price3:"20000", },
//   { id:3, name:"アイテムA", price1:"17500", price2:"17000", price3:"13000", },
//   { id:4, name:"B", price1:"", price2:"", price3:"", },
//   { id:5, name:"C", price1:"", price2:"", price3:"", },
//   { id:6, name:"D", price1:"", price2:"", price3:"", },
//   { id:7, name:"E", price1:"", price2:"", price3:"", },
//   { id:8, name:"F", price1:"", price2:"", price3:"", },
//   { id:9, name:"G", price1:"", price2:"", price3:"", },
//   { id:10, name:"H", price1:"", price2:"", price3:"", },
// ];

function Album(props) {
// class Album extends React.Component {
  // async componentDidMount() {
  //   await this.props.items.getItems();
  // }

  // render() {
    const { classes } = props;
    // const { items = [] } = props.items;
    const { items = [] } = useContext(ItemsContext);

    // const renderItems = items.slice(0, 20);  // TODO limit 20 item
    const renderItems = items;  // for develop

    // const toDetail = item => props.history.push({
    //   pathname: `/items/${item.id}`, item
    // });
    const toDetail = item => props.history.push(`/items/${item.id}`);

    const noImage = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"; // eslint-disable-line max-len

    return (
      <React.Fragment>
        <CssBaseline />
        {/* <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar> */}
        <main>
          {/* Hero unit */}
          <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
              {config.subname && 
                <Typography component="h6" variant="h6" align="center" color="textSecondary" gutterBottom>
                  {config.subname}
                </Typography>
              }
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                {config.name || "タイトル"}
              </Typography>
              <Typography variant="h6" align="center" color="textSecondary" paragraph>
                { config.searchDescription || "商品をチェックしましょう。" }
              </Typography>
              <div align='center'>
                {/* <CustomizedInputBase /> */}
                <IntegrationReactSelect />
              </div>
              {/* <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    機能1
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    機能2
                  </Button>
                </Grid>
              </Grid>
            </div> */}
            </div>
          </div>
          <div className={classNames(classes.layout, classes.cardGrid)}>
            {/* End hero unit */}
            <Grid container spacing={40}>
              {renderItems.map(item => (
                <Grid item key={item.id} sm={6} md={4} lg={3}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={item.ogimg ? item.ogimg : noImage}
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography variant="h5" component="h2">
                        {item.name}
                      </Typography>
                      <Typography gutterBottom color="textSecondary">
                        {config.itemSubtitle} {item.bestprice}円({item.percentage}%)
                    </Typography>
                      <Typography>
                        {config.itemDescription || "商品名概要。TODO:"}
                    </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary"  href={item.url} target="_blank" rel="noopener noreferrer">
                        公式サイト<OpenInNewIcon />
                      </Button>
                      <Button size="small" color="primary" onClick={() => toDetail(item)}>
                        {config.toItemDetailButton || "製品詳細"}
                      </Button>
                      {/* <Button size="small" color="primary">
                      未定
                    </Button> */}
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
        </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Something here to give the footer a purpose!
        </Typography>
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
  // }
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(Album));