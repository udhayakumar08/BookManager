import React, { Component } from 'react'
import CSS from 'csstype';
import { title } from 'node:process';

export default class Delete extends Component {
    FontStyle:CSS.Properties={fontFamily: "Roboto,sans-serif"}

    
    
    
    render() {
       const DeleteBook=(e:any)=>{
            e.preventDefault();
            let keyword=e.target.keyword.value;
            // console.log(keyword);
            let books=JSON.parse(localStorage.getItem('bookData')!);
            
            // console.log(books);
            let newBooks=books.filter((book:any)=>book.title!=keyword)
            localStorage.setItem('bookData',JSON.stringify(newBooks))
            
            
            
            
        }
        return (
            <div>
                <form onSubmit={(e) => DeleteBook(e)}>
                <label style={this.FontStyle}>Enetr BookId to delete book</label><br/>
                <input type="text" id="keyword"/><br/> <br/>
                <button type="submit">Delete</button>
                </form>
            </div>
        )
    }
}
