import React, { Component } from 'react'
import CSS from 'csstype';

export default class Register extends Component {
    FontStyle:CSS.Properties={fontFamily: "Roboto,sans-serif"}
    render() {
        return (
            <div className="RegisterForm">
                <form>
                    <label style={this.FontStyle}>Enter First Name</label><br/>
                    <input type="text"/><br/>
                    <label style={this.FontStyle}>Enter Last name</label><br/>
                    <input type="text"/><br/>
                    <label style={this.FontStyle}>Enter Email</label><br/>
                    <input type="email"/><br/>
                    <label style={this.FontStyle}>Enter a Password</label><br/>
                    <input type="password"/><br/><br/>
                    <button>Register</button>
                </form>
            </div>
        )
    }
}
