import React, { Component } from 'react'
import NoMatch from './NoMatch'
import NavBar from './NavBar'
import Login from './Login'
import Register from './Register'
import Flash from './Flash'
import Home from './Home'
import ProtectedRoute from './ProtectedRoute'
import AuthRoute from './AuthRoute'
import FetchUser from './FetchUser'
import Friends from './Friends'
import UserPage from './UserPage'
import Post from './Post'
import Profile from './Profile'
import { Switch, Route } from 'react-router-dom'
import { Segment } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Segment basic align='center'>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <ProtectedRoute exact path='/friends' component={Friends} />
            <ProtectedRoute exact path='/user/:id' component={UserPage} />
            <ProtectedRoute exact path='/user/:userId/post/:id' component={Post} />
            <ProtectedRoute exact path='/profile' component={Profile} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </Segment>
    )
  }
}

export default App
