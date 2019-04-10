import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import titlePic from '../../assets/starWarsPlaceholder.jpg';
import Moment from 'react-moment';
import './Movie.css';

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

const Movie = (props) => {
    const { classes, children, className, ...other } = props;

    return(
        <div>
            { props.movie ? (
                <Card>
                    <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                    image={titlePic}
                    title={props.movie.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {props.movie.title}
                        </Typography>
                        <Typography component="p">
                            <span className="released-tag">RELEASED: </span>
                            <Moment format="dddd, MMMM D, YYYY">
                                {props.movie.release_date}
                            </Moment>
                        </Typography>
                    </CardContent>
                    <CardActions id="movie-card-button">
                        <Button 
                            size="small" 
                            color="primary" 
                            href={props.movie.url} 
                            target="_blank"
                            className={classNames(classes.root, className)} {...other}
                        >
                            Go To Movie
                        </Button>
                    </CardActions>
                </Card>
            ) : null}
        </div>
    )
}

export default withStyles(styles)(Movie);
