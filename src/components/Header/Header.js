import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
      background: 'black',
      color: 'yellow',
    },
  };

const Header = (props) => {

    const { classes, children, className, ...other } = props;

    return(
        <div>
        <AppBar position="static" className={classNames(classes.root, className)} {...other}>
            <Toolbar>
                <Typography variant="title" color="inherit">
                    <b>Star Wars Fandom</b>
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default withStyles(styles)(Header);
