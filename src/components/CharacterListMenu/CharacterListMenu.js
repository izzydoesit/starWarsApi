import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import data from '../../assets/characters.js';
import './CharacterListMenu.css';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class CharacterListMenu extends React.Component {

  handleMenuChange = event => {
    console.log('UPDATING SELECTION:', event.target.value);
    this.props.updateSelection(event.target.value);
  }
  
  handleClose = () => {
    console.log("handling menu closing...")
    this.props.updateAnchorElement(null);
  };

  render() {
    const { classes, selected } = this.props;

    return (
      <div 
        id="character-list-menu" 
        className={classes.root}
      >
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="character-native-helper">
            Please select
          </InputLabel>
          <Select
            value={ selected }
            input={
              <Input 
                name="character"
                id="character-native-helper"
              />
            }
            onChange={this.handleMenuChange}
          > 
            { data.characters.map((character, index) => (
                <MenuItem 
                  value={character['name']}
                  key={index}
                >
                  {character['name']}
                </MenuItem>
            ))}
          </Select>
          <FormHelperText>
            Pick your favorite character...
          </FormHelperText>
        </FormControl>
      </div>
    );
  }
}

CharacterListMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CharacterListMenu);
