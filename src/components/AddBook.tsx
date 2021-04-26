import React, { Component } from 'react'

export default class AddBook extends Component {
    render() {
        return (
            <div className="AddBookForm">
                <form>
                <label>Enter Book Title:</label><br/>
                <input type="text"/><br/>
                <label>Enter Book Auther</label><br/>
                <input type="text"/><br/>
                <label>Enter Book Rating</label><br/>
                <input type="text"/><br/>
                <label>Enter Book Price</label><br/>
                <input type="text"/><br/>
                <label>Add Book Cover</label><br/>
                <input type="text"/><br/><br/>
                <button>Add Book</button>
                </form>
            </div>
        )
    }
}
