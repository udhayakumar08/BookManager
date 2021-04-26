import React, { Component } from 'react'

export default class AddBook extends Component {

    state = {
        title: '',
        author: '',
        rating: '',
        price: '',
        cover: '',
    }

    handleFormData = (event: any) => {
        console.log("clicked...");
        console.log(this.state);
        localStorage.setItem('bookData', JSON.stringify(this.state));

        event.preventDefault();
    }
    handleChanges = (e: any) => {


        this.setState({ [e.target.name]: e.target.value })

        console.log(this.state);

    }

    render() {
        return (
            <div className="AddBookForm">
                <form >
                    <label>Enter Book Title:</label><br />
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChanges} /><br />
                    <label>Enter Book Auther</label><br />
                    <input type="text" name="author" value={this.state.author} onChange={this.handleChanges} /><br />
                    <label>Enter Book Rating</label><br />
                    <input type="text" name="rating" value={this.state.rating} onChange={this.handleChanges} /><br />
                    <label>Enter Book Price</label><br />
                    <input type="text" name="price" value={this.state.price} onChange={this.handleChanges} /><br />
                    <label>Add Book Cover</label><br />
                    <input type="text" name="cover" value={this.state.cover} onChange={this.handleChanges} /><br /><br />
                    <button type="submit" onClick={this.handleFormData}>Add Book</button>
                </form>
            </div>
        )
    }
}
