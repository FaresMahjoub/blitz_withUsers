import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import {withStyles} from "@material-ui/core/styles";
import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import * as serviceWorker from './serviceWorker';
import ButtonZone from './UI/play_page/ButtonZone.js';
import BoardZone from './UI/play_page/BoardZone.js'
import PlayerZone from './UI/play_page/PlayerZone.js';
import {Meteor} from "meteor/meteor";


const appStyle={
  display: "grid",
  gridTemplateRows: "150px 200px 150px",
  gridTemplateColumns:"1fr 3fr 3fr",
};

const styles={
    grow: {
        flexGrow: 1,
    },
};

const playerCards =  Array(5).fill({color: 'blue', sex:'F', numb:0,})

class PlayPage extends React.Component{
  render(){
    const { classes } = this.props;
    return   (
        <div>
            <AppBar position="static">
                <div style={{display: "flex"}}>
                    <Toolbar>
                        <Typography variant="h6"
                                    color="inherit"
                                    className={classes.grow}
                        > Dutch Blitz !
                        </Typography>
                        <IconButton color="inherit"> <AccountCircle /> </IconButton>
                    </Toolbar>

                </div>
            </AppBar>
            <div style={appStyle}>
              <ButtonZone
                  notLoggedIn={this.props.currentUser}
                  gridStyle={{
                    gridColumnStart: "1",
                    gridColumnEnd: "2",
                    gridRowStart: "2",
                    gridRowEnd: "4",
                    alignSelf: "stretch"
                  }}
              />
              <PlayerZone
                  name="Thomas"
                  playerNumber={1}
                  notLoggedIn={this.props.currentUser}
                  upperPlayerCards={playerCards}
                  bot={true}
                  gridStyle={{
                    gridColumn:" 2 / 3",
                    gridRow:" 1 / 2",
                    alignSelf: "center",
                  }}
              />
              <PlayerZone
                  name="Guillaume"
                  playerNumber={2}
                  notLoggedIn={this.props.currentUser}
                  upperPlayerCards={playerCards}
                  bot={true}
                  gridStyle={{
                    gridColumn:" 3 / 4",
                    gridRow:" 1 / 2",
                    alignSelf: "center",

                  }}
              />
              <BoardZone
                  pileNumb={16}
                  pub={true}
                  gridStyle={{
                    gridColumn: "2 / 4",
                    gricRow: "2 / 3" ,
                    alignSelf: "center",
                  }}
              />
              <PlayerZone
                  name="My Name"
                  bot={false}
                  playerNumber={3}
                  notLoggedIn={this.props.currentUser}
                  gridStyle={{
                    gridColumn:" 2 / 3",
                    gridRow:" 3 / 4",
                    alignSelf: "center",
                  }}
              />
              <PlayerZone
                  name="JB"
                  playerNumber={4}
                  upperPlayerCards={playerCards}
                  notLoggedIn={this.props.currentUser}
                  bot={true}
                  gridStyle={{
                    gridColumn:" 3 / 4",
                    gridRow:" 3 / 4",
                    alignSelf: "center",
                  }}
              />
            </div>
        </div>
    )
  }
}

PlayPage=withStyles(styles)(PlayPage)
export default withTracker(() => {
    //Meteor.subscribe('users');
    return {
        //tasks: Tasks.find({}, {sort: {createdAt:-1}}).fetch(),
        //incompleteCount: Tasks.find({ checked: {$ne: true} }).count(),
        currentUser: ! Meteor.user(),

    };
})(PlayPage);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
