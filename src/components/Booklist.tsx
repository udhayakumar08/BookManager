import React from 'react'
import CSS from 'csstype';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Card, Button, Form } from 'react-bootstrap'
// import StarRatingComponent from 'react-star-rating-component'


export default class Booklist extends React.Component {

    state = {
        bookData: [],
        searchValue: '',
        tag:''

    }

    FontStyle: CSS.Properties = { fontFamily: "Roboto,sans-serif", textAlign: "center" }
    ButtonStyle: CSS.Properties = {
        border: "none",
        padding: "10px",
        backgroundColor: "#380b5c",
        color: "white",
        width: "100%",
        fontFamily: "Roboto,sans-serif"
    }

    // TableStyle: CSS.Properties = {
    //     borderCollapse: "collapse",
    //     textAlign: "center",
    //     border: "1px solid white",
    //     padding: "10px 15px",
    //     backgroundColor: "#e3e3e3",
    //     // width:"100%"
    //     fontFamily: "Roboto,sans-serif"
    // }

    // headStyle: CSS.Properties = {
    //     backgroundColor: "#380b5c",
    //     borderCollapse: "collapse",
    //     padding: "10px 15px",
    //     border: "1px solid white",
    //     color: "#ffffff",
    //     // width:"100%"
    //     fontFamily: "Roboto,sans-serif"
    // }


    tagvalue=(e)=>{
        this.setState({tag:e.target.value})
        
    }

    search = (e) => {
        console.log(this.state.searchValue);
        let books: any = this.state.bookData;
        let keyword = this.state.searchValue;

        
        console.log("Tag value",this.state.tag);
        let option=this.state.tag;
        let searchedData: any = [];
        
        if(option==="title")
        {
            for (let i = 0; i < books.length; i++) {
                // console.log("loop", i);
                if (books[i].title.toLowerCase().includes(keyword)) {
    
                    searchedData.push(books[i])
                }
            }

            this.setState({ bookData: searchedData })
        }
        else if(option==="Author")
        {
            
                for (let i = 0; i < books.length; i++) 
                {
                    // console.log("loop", i);
                    if (books[i].author.toLowerCase().includes(keyword)) {
        
                        searchedData.push(books[i])
                    }
                }
                
                this.setState({ bookData: searchedData })
            
        }
        else if(option==="Price")
        {
            
                for (let i = 0; i < books.length; i++) 
                {
                    // console.log("loop", i);
                    if (Number(books[i].price)<=Number(keyword)) 
                    {
                        console.log(books[i]);
                        searchedData.push(books[i])
                        
                    }
                    
                }
                
                this.setState({ bookData: searchedData })
                //console.log(books);
                
                // console.log(Number(keyword));
                // console.log(books[0].price);
                
                
            
        }
        
       
        

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

                    <Form.Group controlId="SerchForm" onClick={(e)=>{this.search(e)}}>
                        <Form.Label>Filter:</Form.Label>

                            <select  value={this.state.tag} onChange={this.tagvalue}>
                                <option value="choose">Choose..</option>
                                <option value="Author">Auther</option>
                                <option value="title">Title</option>
                                <option value="Price">Max Price Range</option>
                                <option value="rating">Rating Range </option>
                                </select> 
{/*                        
                        <Button variant="primary" type="submit">
                            Submit
                            </Button> */}
                    </Form.Group>

                    <input type="text" name="searchValue" onChange={this.getSearchValue} placeholder="search" />
                    <button onClick={this.search} >Apply</button>
                    <button onClick={this.refresh}>Refersh</button>
                </div>
                <br />

                <div className="bookTable">

                    {Tdata.map((row: any, i) => {


                        return (
                            <Card className="CardView">
                                <Card.Img variant="top" src={row.cover} height="80%" width="100%" />
                                <Card.Body>
                                    <Card.Title style={this.FontStyle}>{row.title}</Card.Title>

                                    <Card.Text style={this.FontStyle}>

                                    </Card.Text>

                                    <Card.Text style={this.FontStyle}>
                                        {/* <StarRating name="BookRating" totalStars={Number(row.rating)}></StarRating> */}
                                    </Card.Text>

                                    <Button variant="primary" style={this.ButtonStyle}>Show Details</Button>
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


