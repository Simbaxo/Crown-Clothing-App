import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import ShopPage from './pages/shop/shop.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      } else {
        this.setState({ currentUser: userAuth })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth() // this will close the subscription
  }

  render() {
    return (
      <div>
        {/* Header is aware of currentUser state */}
        <Header currentUser={this.state.currentUser} />
        {/* Switch only render the first match */}
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    )
  }
}

export default App
