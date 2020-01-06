import React, { Component } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import User from './containers/User';
import Nav from './containers/Nav';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
class App extends Component {
  render() {
    return (
      <div className="App" style={{ paddingLeft: 200 }}> { /* style 속성 추가 */ }
        <CssBaseline />
        <AppBar style={{ left: 200 }}> { /* style 속성 추가 */ }
          <Toolbar>
            <Typography type="title" color="inherit">
              Github API 클라이언트
            </Typography>
          </Toolbar>
        </AppBar>
        <Nav />
        { /* div 요소를 추가하고 style 속성 추가 */ }
        <div style={{ marginTop: 64, padding: 32 }}>
          <Switch>
            <Route exact path="/" render={() => (<Redirect to="/user/apple" />)} />  
            <Route
              path="/user/:id"
              render={
                ({ match }) => <User user={match.params.id} />
              }
            />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;