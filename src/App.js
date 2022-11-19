import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: true,
  }

  // Using an If...Else Statement

  //   renderAuthButton = () => {
  //     const {isLoggedIn} = this.state
  //     if (isLoggedIn === true) {
  //       return <button>Logout</button>
  //     }
  //     return <button>Login</button>
  //   }

  //   render() {
  //     return (
  //       <div className="container">
  //         <Welcome greeting="Hello" name="User" />
  //         {this.renderAuthButton()}
  //       </div>
  //     )
  //   }

  // Using Element Variables

  //   render() {
  //     const {isLoggedIn} = this.state
  //     let authButton
  //     if (isLoggedIn === true) {
  //       authButton = <button>Logout</button>
  //     } else {
  //       authButton = <button>Login</button>
  //     }
  //     return (
  //       <div className="container">
  //         <Welcome greeting="Hello" name="User" />
  //         {authButton}
  //       </div>
  //     )
  //   }

  // Using Ternary Operators

  //   render() {
  //     const {isLoggedIn} = this.state
  //     return (
  //       <div className="container">
  //         <Welcome greeting="Hello" name="User" />
  //         {isLoggedIn ? <button>Logout</button> : <button>Login</button>}
  //       </div>
  //     )
  //   }

  //  Using Logical && Operator

  //   render() {
  //     const {isLoggedIn} = this.state
  //     return (
  //       <div className="container">
  //         <Welcome greeting="Hello" name="User" />
  //         {isLoggedIn && <button>Logout</button>}
  //         {!isLoggedIn && <button>Login</button>}
  //       </div>
  //     )
  //   }

  //  Default Props

  render() {
    return (
      <div className="container">
        <Welcome greeting="Hi" />
      </div>
    )
  }
}

export default App
