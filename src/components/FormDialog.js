import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { feedback } from '../firebase/functions';

function FormDialog(props) {
  const [open, setOpen] = React.useState(props.open);
  const [text, updateText] = React.useState('');

//   function handleClickOpen() {
//     setOpen(true);
//   }

  function handleClose() {
    setOpen(false);
    props.setOpen(false)
  }

  // TODO feedback test
  const handleFeedback = text => async () => {
    if (!text) return;
    const result = await feedback(text);
    console.log('recieve feedback:', result);
    handleClose();
  }

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">フィードバックを送信</DialogTitle>
        <DialogContent>
          <DialogContentText>
            試験運用中。個人情報は含めないでください。
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="内容"
            type="text"
            fullWidth
            value={text} onChange={e => updateText(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            キャンセル
          </Button>
          <Button onClick={handleFeedback(text)} color="primary">
            送信
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialog;