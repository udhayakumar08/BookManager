import { useState, useEffect } from 'react'
import CSS from 'csstype';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Card, Button, Form } from 'react-bootstrap'
// import StarRatingComponent from 'react-star-rating-component'

interface book{
    getBook: Function;
}

export default function Booklist(props: book) {

    const [bookData, setBooks] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [tag, setTag] = useState("");

    // FontStyle: CSS.Properties = { fontFamily: "Roboto,sans-serif", textAlign: "center" }
    // ButtonStyle: CSS.Properties = {
    //     border: "none",
    //     padding: "10px",
    //     backgroundColor: "#380b5c",
    //     color: "white",
    //     width: "100%",
    //     fontFamily: "Roboto,sans-serif"
    // }

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


    function tagvalue(e) {
        setTag(e.target.value)

    }

    function search(e: any) {
        console.log(searchValue);
        let books: any = bookData;
        let keyword = searchValue;
        let option = tag;



        let searchedData: any = [];

        if (option === "title") {
            for (let i = 0; i < books.length; i++) {
                if (books[i].title.toLowerCase().includes(keyword)) {

                    searchedData.push(books[i])
                }
            }

            setBooks(searchedData)
        }
        else if (option === "Author") {

            for (let i = 0; i < books.length; i++) {
                if (books[i].author.toLowerCase().includes(keyword)) {

                    searchedData.push(books[i])
                }
            }

            setBooks(searchedData)
        }
        else if (option === "Price") {

            for (let i = 0; i < books.length; i++) {
                if (Number(books[i].price) <= Number(keyword)) {
                    console.log(books[i]);
                    searchedData.push(books[i])

                }

            }

            setBooks(searchedData)

        }

    }
    function getSearchValue(e: any) {
        setSearchValue(e.target.value)

    }

    function refresh() {
        let data: any = localStorage.getItem('bookData')
        setBooks(JSON.parse(data))
    }

    useEffect(() => {
        let data: any = localStorage.getItem('bookData')
        setBooks(JSON.parse(data))

    }, [])


    let Tdata = bookData;
    return (
        <div className="MainDivOfBooks">

            <div className="searchBox">

                <Form.Group controlId="SerchForm" onClick={(e) => { search(e) }}>
                    <Form.Label>Filter:</Form.Label>

                    <select value={tag} id="tagV" onChange={tagvalue}>
                        <option value="choose">Choose..</option>
                        <option value="Author">Auther</option>
                        <option value="title">Title</option>
                        <option value="Price">Max Price Range</option>
                        <option value="rating">Rating Range </option>
                    </select>

                </Form.Group>

                <input type="text" name="searchValue" id="searchV" onChange={getSearchValue} placeholder="search" />
                <button onClick={search} >Apply</button>
                <button onClick={refresh}>Refersh</button>
            </div>

            <br />

            <div className="bookTable">

                {Tdata.map((row: any, i) => {


                    return (
                        <Card className="CardView">
                            <Card.Img variant="top" src={row.cover} height="80%" width="100%" />
                            <Card.Body>
                                <Card.Title>{row.title}</Card.Title>

                                <div onClick={()=>props.getBook(row)} >
                                    
                                    <Link to="/details"   >Show Details</Link>

                                </div>

                            </Card.Body>
                        </Card>
                    )

                })
                }
            </div>
        </div>
    )
}



