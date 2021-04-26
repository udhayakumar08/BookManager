import React from 'react'
import CSS from 'csstype';
import { BrowserRouter, Route, Link } from "react-router-dom";


export default class Booklist extends React.Component {

        state={
            bookData:[]
        }

    TableStyle: CSS.Properties = {
        borderCollapse: "collapse",
        border: "1px solid white",
        textAlign: "center",
        padding: "10px 15px"
    }

    headStyle: CSS.Properties = {
        backgroundColor: "#380b5c",
        borderCollapse: "collapse",
        padding: "10px 15px",
        border: "1px solid white",
        color: "#ffffff"
    }

    componentDidMount() {
       this.setState({bookData:localStorage.getItem('bookData')})
        // // console.log("book", Tdata);
        // let Tdata=this.state.bookData;
        // console.log("TData",Tdata);

    }

    render() {
        
        return (

            <div className="bookTable">
                <table style={this.TableStyle}>

                    <tr>
                        <td style={this.headStyle}>Cover</td>
                        <td style={this.headStyle}>Title</td>
                        <td style={this.headStyle}>Auther</td>
                        <td style={this.headStyle}>Rating</td>
                        <td style={this.headStyle}>Price</td>
                    </tr>

                    <tr>
                        <td style={this.TableStyle}><img src="https://picsum.photos/50" /></td>
                        <td style={this.TableStyle}>My Truth</td>
                        <td style={this.TableStyle}>Indira Gandhi</td>
                        <td style={this.TableStyle}>5</td>
                        <td style={this.TableStyle}>300</td>
                    </tr>
                    {/* {Tdata.map((row:any) => {
                        
                        
                        return (

                            <tr>
                                <td>{row.id} </td>
                                <td>{row.title} </td>
                                <td>{row.name} </td>
                                <td>{row.rating} </td>
                                <td>{row.price} </td>

                            </tr>
                        )

                    })
                    } */}


                </table>
            </div>
        )
    }
}


