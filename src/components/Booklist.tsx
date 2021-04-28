import React from 'react'
import CSS from 'csstype';
import { BrowserRouter, Route, Link } from "react-router-dom";
import {Card,Button} from 'react-bootstrap'


export default class Booklist extends React.Component {

    state = {
        bookData: [],
        searchValue: ''
    }

    TableStyle: CSS.Properties = {
        borderCollapse: "collapse",
        textAlign: "center",
        border: "1px solid white",
        padding: "10px 15px",
        backgroundColor: "#e3e3e3",
        // width:"100%"
        fontFamily: "Roboto,sans-serif"
    }

    headStyle: CSS.Properties = {
        backgroundColor: "#380b5c",
        borderCollapse: "collapse",
        padding: "10px 15px",
        border: "1px solid white",
        color: "#ffffff",
        // width:"100%"
        fontFamily: "Roboto,sans-serif"
    }



    search = () => {
        console.log(this.state.searchValue);
        let books: any = this.state.bookData;
        let keyword = this.state.searchValue;
        let searchedData: any = [];
        for (let i = 0; i < books.length; i++) {
            console.log("loop", i);
            if (books[i].title.toLowerCase().includes(keyword) || books[i].author.toLowerCase().includes(keyword)) {

                searchedData.push(books[i])
            }
        }
        console.log(searchedData)
        this.setState({ bookData: searchedData })

    }
    getSearchValue = (e: any) => {
        this.setState({ [e.target.name]: e.target.value })

    }

    refresh = () => {
        let data: any = localStorage.getItem('bookData')
        this.setState({ bookData: JSON.parse(data) })
    }

    componentDidMount() {
        let data: any = localStorage.getItem('bookData')
        this.setState({ bookData: JSON.parse(data) })
    }

    render() {
        let Tdata = this.state.bookData;
        return (
            <div className="MainDivOfBooks">
                <div className="searchBox">
                    <input type="text" name="searchValue" onChange={this.getSearchValue} placeholder="search" />
                    <button onClick={this.search} >Search</button>
                    <button onClick={this.refresh}>Refersh</button>
                </div>
                <br />

                <div className="bookTable">
                    
                        {Tdata.map((row: any, i) => {


                            return (
                                <Card style={{ width: '100px',height:'200px',margin:'20px'}}>
                                    <Card.Img variant="top" src={row.cover} height="100%" width="100%" />
                                    <Card.Body>
                                        <Card.Title>{row.title}</Card.Title>
                                        <Card.Text>
                                            {row.author}
                                            </Card.Text>
                                        <Button variant="primary">Show Details</Button>
                                    </Card.Body>
                                </Card>
                            )

                        })
                        }
                </div>
            </div>
        )
    }
}


