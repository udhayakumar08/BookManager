import React from 'react'
import CSS from 'csstype';

export default class Login extends React.Component {
    FontStyle:CSS.Properties={fontFamily: "Roboto,sans-serif"}
    render() {
        return (
            <div className="loginForm">
                <form>
                <label style={this.FontStyle}>Enter Email Id</label><br/>
                <input type="email"/><br/>
                <label style={this.FontStyle}>Enter Password</label><br/>
                <input type="Password"/><br/><br/>
                <button>Login</button>


                </form>
            </div>
        )
    }
}
