import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import Badge from '@material-ui/core/Badge';
import FavoriteIcon from '@material-ui/icons/Favorite';

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    books: state.books
  }
}

function BookList({books, dispatch}) {
  return (
      <List component="nav" aria-label="main list"> 
        {books.map(item => (
          <div key={item.title}>
            <ListItem button onClick={() => {
              dispatch({type: 'BOOK_SELECT', payload: item});
            }}>
              <ListItemText
                primary={item.title}
                secondary={item.subtitle}
              />
              <Badge badgeContent={item.like} color="secondary">
                <FavoriteIcon style={{color: 'pink'}}/>
              </Badge>
            </ListItem>
            <Divider />
          </div>  
        ))}
      </List>
  );
};

//provider에서 쏴준 store을 여기 component에 붙이는거
// props로 들어간다.
export default connect(
  mapStateToProps
)(BookList)