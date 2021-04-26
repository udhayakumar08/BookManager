import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <form>
                <label>Enter Email Id</label><br/>
                <input type="email"/><br/>
                <label>Enter Password</label><br/>
                <input type="Password"/><br/><br/>
                <button>Login</button>


                </form>
            </div>
        )
    }
}
