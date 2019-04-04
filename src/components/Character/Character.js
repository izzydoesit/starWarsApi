import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import profilePic from '../../assets/imgPlaceholder.jpeg';
import './Character.css';

class Character extends Component {

  componentWillReceiveProps(nextProps) {
    console.log('receiving next character props: ', nextProps);
    if (this.props.selected !== nextProps.selected) {
      this.props.updateCharacter(nextProps.selected);
    }
  }

  render() {
    console.log('CHARACTER PROPS: ', this.props);
    const { profile, selected } = this.props;
    
    return(
      <div id="character">
        { profile ? 
          <Card >
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
                {profile.birth_year}
              </Typography>
            </CardContent>
            <CardActions>
              <Button 
                size="small" 
                color="primary" 
                href={profile.url} 
                target="_blank"
              >
                Go To { selected }
                </Button>
            </CardActions>
          </Card>
        : "No image selected"
        }
      </div>
    )
  }
}

export default Character;
