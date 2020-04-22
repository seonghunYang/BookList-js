import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import {addNewBook} from '../actions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function TopNav({ addNewBook }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            BookList
          </Typography>
          <Button color="inherit"
          onClick = {() => addNewBook()}
          >ADD</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

// const mapStateToProps = (state /*, ownProps*/) => {
//   return {
//     book: state.selected
//   }
// }

export default connect(null, { addNewBook }
)(TopNav)