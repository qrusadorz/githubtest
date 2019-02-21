// import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import InputBase from '@material-ui/core/InputBase';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import DirectionsIcon from '@material-ui/icons/Directions';

// // import Downshift from 'downshift'
// // import Select from 'react-select';
// // import Autosuggest from 'react-autosuggest';

// const styles = {
//   root: {
//     padding: '2px 4px',
//     display: 'flex',
//     alignItems: 'center',
//     // width: 400,
//     maxWidth: 400,
//   },
//   input: {
//     marginLeft: 8,
//     flex: 1,
//   },
//   iconButton: {
//     padding: 10,
//   },
//   divider: {
//     width: 1,
//     height: 28,
//     margin: 4,
//   },
// };

// function CustomizedInputBase(props) {
//   const { classes } = props;

//   return (
//     <Paper className={classes.root} elevation={1}>
//       <IconButton className={classes.iconButton} aria-label="Menu">
//         <MenuIcon />
//       </IconButton>
//       <InputBase className={classes.input} placeholder="検索キーワードを入力" />
//       <IconButton className={classes.iconButton} aria-label="Search">
//         <SearchIcon />
//       </IconButton>
//       <Divider className={classes.divider} />
//       <IconButton color="primary" className={classes.iconButton} aria-label="Directions">
//         <DirectionsIcon />
//       </IconButton>
//     </Paper>
//   );
// }

// export default withStyles(styles)(CustomizedInputBase);