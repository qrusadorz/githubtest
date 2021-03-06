import React, { useContext, useEffect } from 'react';
import classNames from 'classnames';
// import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import CssBaseline from '@material-ui/core/CssBaseline';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
// import OpenInNewIcon from '@material-ui/icons/OpenInNew';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';

import { withRouter, Link } from "react-router-dom";

import CustomizedInputBase from './searchField';
// import Markdown from './Markdown';

import { ItemsContext, groups } from '../contexts/items';
import { setToLocalStorage, getFromLocalStorage } from '../utils/localstorage';

import { titleEffectCallback, schemaEffectCallback, initScrollPosition } from '../utils/seo';

import config from '../configs/site'

// const styles = theme => ({
const styles = theme => {
  // console.log('theme:', theme.palette);
  return {
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
  // card全体をActionエリアとするために新設
  cardActionArea: {
    // flexGrow: 1,
    height: '100%', // 文章が短いCardではボタンが上に上るため必須。
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
  // TODO original
  tabs: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    // backgroundColor: theme.palette.primary.main,
    width: '100%',
    align: "center"
  },
}};
// });

// const noImage = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"; // eslint-disable-line max-len
// const noImage = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3ENo Image%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"; // eslint-disable-line max-len

const setFavoritesToLocalStorage = favorites => {
  setToLocalStorage('favorites', favorites)
}

const getFavoritesFromLocalStorage = () => {
  return getFromLocalStorage('favorites');
}

// TODO 重複するためどこかにまとめる必要がある
const getSettingsFromLocalStorage = () => getFromLocalStorage('settings');

function Album(props) {
  console.log("render() Album");

  const { classes } = props;
  const { group } = props.match.params;
  const groupIndex = config.getGrouppathToIndex(groups, group);
  console.log("top match params:", group, groupIndex);
  const { items = [], timestamp } = useContext(ItemsContext);

  useEffect(() => titleEffectCallback(props), [props.location.pathname]);
  useEffect(() => schemaEffectCallback(timestamp), [timestamp]);

  const [favorites, setFavorites] = React.useState(() => getFavoritesFromLocalStorage());

  // const renderItems = items.slice(0, 20);  // TODO limit 20 item
  const renderItems = config.getRenderItems(groups, groupIndex, items, favorites);
  console.log("renderItems.length:", renderItems.length);

  // page遷移後のスクロール復元
  useEffect(initScrollPosition, [group]);

  const handleFavorite = id => () => {
    console.log('favorite id:', id);
    const value = !favorites[id];
    const json = {
      ...favorites,
      [id]: value
    };
    setFavorites(json);
    setFavoritesToLocalStorage(json);
    window.gtagFavoriteEvent(id, value);
    // console.log('favorite:', favorites);
  }

  // function handleChange(event, newValue) {
  //   const path = config.getIndexToGrouppath(groups, newValue);
  //   console.log('path:', path);
  //   props.history.push(path ? `/itemgroups/${path}`: "");
  // }

  const [setting] = React.useState(() => getSettingsFromLocalStorage());
  const { lightrun = false }  = setting;

  return (
    <>
      {/* <CssBaseline /> */}
      {/* <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar> */}
      {/* <main> */}
        {/* Hero unit */}
        {groupIndex === 0 && 
          <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
              {config.subname &&
                <Typography component="h6" variant="h6" align="center" color="textSecondary" gutterBottom>
                  {config.subname}
                </Typography>
              }
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                {config.name}
              </Typography>
              <Typography variant="h6" align="center" color="textSecondary" paragraph>
                {config.searchDescription}
              </Typography>
              <div align='center'>
                <CustomizedInputBase/>
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
        }
        <div className={classes.tabs}>
          <Tabs
            value={groupIndex}
            // onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            // centered
          >
            {groups.map((group, index) => (<Tab label={group.path} key={group.path} component={Link} to={group.path.toLowerCase() === "top" ? "" : `/itemgroups/${group.path.toLowerCase()}`}/>))}
          </Tabs>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            {renderItems.map(item => (
              <Grid item key={item.id} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardActionArea className={classes.cardActionArea} component={Link} to={`/items/${item.id}`}>
                  {!lightrun && 
                    <CardMedia
                      className={classes.cardMedia}
                      // image={!lightrun && item.ogimg ? item.ogimg : noImage}
                      image={item.ogimg}
                      title={item.name}
                    />
                  }
                    <CardContent className={classes.cardContent}>
                      <Typography variant="h5" component="h2" gutterBottom>
                        {item.name}
                      </Typography>
                      <Typography color="textSecondary">
                        {config.getItemSubtitle(item)}
                      </Typography>
                      <Typography gutterBottom color="textSecondary">
                        {config.getItemDescription(item)}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    {/* <Button size="small" color="primary" component={Link} to={`/items/${item.id}`}>
                      {config.toItemDetailButton}
                    </Button> */}
                    {/* <Button size="small" color="primary" href={item.url} target="_blank" rel="noopener noreferrer nofollow">
                      公式<OpenInNewIcon />
                    </Button> */}
                    <IconButton aria-label="Add to favorites" color={favorites[item.id] ? "primary" : "default"} onClick={handleFavorite(item.id)}>
                      {favorites[item.id] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>
                    {/* <Button size="small" color="primary">
                      未定
                    </Button> */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      {/* </main> */}
      {/* Footer */}
      <footer className={classes.footer}>
        {/* <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography> */}
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          &#169; {config.name} 2019
        </Typography>
      </footer>
      {/* End footer */}
    </>
  );
  // }
}

export default withStyles(styles)(withRouter(Album));