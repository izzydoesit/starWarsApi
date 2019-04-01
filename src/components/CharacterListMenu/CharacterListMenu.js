import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import data from '../../assets/characters.js';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

const options = data.characters.map((character) => {
  return character['name'];
});

class CharacterListMenu extends React.Component {
  state = {
    anchorEl: null,
    selectedIndex: -1,
  };

  handleClickListItem = event => {
    console.log("clicked list item")
    this.setState({ anchorEl: event.currentTarget });
  };
  
  handleMenuItemClick = (event, index) => {
    console.log("clicked menu item")
    this.setState({ selectedIndex: index, anchorEl: null });
    this.props.onChange(event);
    console.log('state', this.state);
  };
  
  handleClose = () => {
    console.log("closing item")
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <div className={classes.root}>
        <List component="nav">
          <ListItem
            button
            aria-haspopup="true"
            aria-controls="lock-menu"
            aria-label="Character"
            onClick={this.handleClickListItem}
          >
            <ListItemText
              primary="Character"
              secondary={options[this.state.selectedIndex]}
            />
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === this.state.selectedIndex}
              onClick={event => this.handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

CharacterListMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CharacterListMenu);
