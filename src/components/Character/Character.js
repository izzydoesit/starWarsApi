import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import profilePic from '../../assets/imgPlaceholder.jpeg';
import './Character.css';

const styles = {
  root: {
    background: 'black',
    borderRadius: 10,
    border: 0,
    color: 'yellow',
    height: 48,
    padding: '0 5%',
    margin: '0 auto',
    width: '90%'
  },
};

class Character extends Component {

  componentWillReceiveProps(nextProps) {
    console.log('receiving next character props: ', nextProps);
    if (this.props.selected !== nextProps.selected) {
      this.props.updateCharacter(nextProps.selected);
    }
  }

  render() {
    console.log('CHARACTER PROPS: ', this.props);
    const { profile, selected, isFetching, error } = this.props;
    const message = selected && error ? error : 'No character selected...'
    const { classes, children, className, ...other } = this.props;

    return(
      <div id="character-wrapper">
        { isFetching ? (
          <p className="character-display-msg">Loading...</p>
        ) : (
          <div id="character">
            { Object.keys(profile).length !== 0 ? (
            
              <Card className="character-card">
                <CardMedia 
                  style={{height: 0, paddingTop: '56.25%'}}
                  image={profilePic}
                  title={profile.name}
                />
                <CardContent>
                  <Typography gutterBottom 
                    variant="headline" 
                    component="h2"
                  >
                    {profile.name}
                  </Typography>
                  <Typography component="p">
                    <b>DOB: </b>{profile.birth_year}
                  </Typography>
                  <Typography component="p">
                    <b>HEIGHT: </b>{profile.height}
                  </Typography>
                  <Typography component="p">
                    <b>MASS: </b>{profile.mass}
                  </Typography>
                </CardContent>
                <CardActions id="card-button">
                  <Button
                    size="small" 
                    color="primary" 
                    href={profile.url} 
                    target="_blank"
                    className={classNames(classes.root, className)} {...other}
                  >
                    Go To { profile.name }
                    </Button>
                </CardActions>
              </Card>
            ) : (
              <p className="character-display-message">{message}</p>
            )}
          </div>
        )}
      </div>
    )
  }
}

export default withStyles(styles)(Character);
