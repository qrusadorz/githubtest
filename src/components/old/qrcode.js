// import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import withRoot from '../withRoot';

// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import { QRCode } from 'react-qr-svg';
// import TextField from '@material-ui/core/TextField';

// import { UserContext } from '../contexts/user'


// const styles = theme => ({
//   root: {
//     textAlign: 'center',
//     paddingTop: theme.spacing.unit * 20,
//   },
//   paper: {
//     marginTop: theme.spacing.unit * 8,
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
//     // TODO TEST
//     [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
//       width: 400,
//       marginLeft: 'auto',
//       marginRight: 'auto',
//     },
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing.unit,
//   },
// });

// class Qrcode extends React.Component {
//   state = {
//     text: '',
//   };

//   handleInputText = event => {
//     console.log('text:', event.target.value);
//     this.setState({
//       text: event.target.value,
//     });
//   };

//   render() {
//     const { classes } = this.props;
//     const { text } = this.state;

//     const user = this.context;
//     const auth = !!user;
//     // console.log("★★　qr context:", this.context);
//     // console.log("★★　qr auth:", auth);

//     return (
//       //   <div className={classes.root}>
//       <>
//         <Paper className={classes.paper} elevation={1}>
//           <Typography variant="h5" component="h3">
//             QRCode Generator.
//           </Typography>
//           <Typography component="p">
//             入力した文字列に対応したQRコードを生成します。
//           </Typography>
//           <TextField className={classes.form} label={auth ? "文字を入力" : "ログインしてください"} onChange={this.handleInputText} value={text} disabled={!auth} />
//           <Typography component="p">
//             文字数:{text.length}
//           </Typography>
//           <QRCode
//             bgColor="#FFFFFF"
//             fgColor="#000000"
//             level="Q"
//             // style={{ width: 256 }}
//             // style={{ width: 800 }}
//             value={text}
//           />
//         </Paper>
//       </>
//     );
//   }
// }

// Qrcode.contextType = UserContext;

// // Qrcode.propTypes = {
// //   classes: PropTypes.object.isRequired,
// // };

// export default withRoot(withStyles(styles)(Qrcode));
