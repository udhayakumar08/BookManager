import React from 'react';
import CSS from 'csstype';

let books: any = localStorage.getItem('bookData');
if (!books) {
    books = [];
}
else {
    books = JSON.parse(books);
}
export default class AddBook extends React.Component {

    state = {
        title: '',
        author: '',
        rating: '',
        price: '',
        cover: '',
    }

    FontStyle:CSS.Properties={fontFamily: "Roboto,sans-serif"}

    handleFormData = (event: any) => {
        console.log("clicked...");
        
        // let books: any = localStorage.getItem('bookData');
        // let data: any = JSON.parse(books);

        this.setState({
            title: this.state.title, author: this.state.author,
            price: this.state.price, cover: this.state.cover, rating: this.state.rating
        });
        console.log("state", this.state);
        
        //   let data:any=[];
        books.push({
            title: this.state.title, author: this.state.author,
            price: this.state.price, cover: this.state.cover, rating: this.state.rating
        })
        localStorage.setItem('bookData', JSON.stringify(books));
        // event.preventDefault();
    }

    handleChanges = (e: any) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state);
    }

    componentDidMount=()=>{
       

    }
    render() {
        return (
            <div className="AddBookForm">
                <form >
                    <label style={this.FontStyle}>Enter Book Title:</label><br />
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChanges} /><br />
                    <label style={this.FontStyle}>Enter Book Auther</label><br />
                    <input type="text" name="author" value={this.state.author} onChange={this.handleChanges} /><br />
                    <label style={this.FontStyle}>Enter Book Rating</label><br />
                    <input type="text" name="rating" value={this.state.rating} onChange={this.handleChanges} /><br />
                    <label style={this.FontStyle}>Enter Book Price</label><br />
                    <input type="text" name="price" value={this.state.price} onChange={this.handleChanges} /><br />
                    <label style={this.FontStyle}>Add Book Cover</label><br />
                    <input type="text" name="cover" value={this.state.cover} onChange={this.handleChanges} /><br /><br />
                    <button type="submit" onClick={this.handleFormData}>Add Book</button>
                </form>
            </div>
        )
    }
}























// import React,{useState,useEffect} from 'react'



// export default function AddBook() {


   
//    let [booksData, setState] = useState<any>({
        
//         Btitle:'',
//         Bauthor:'',
//         Brating:'',
//         Bprice:'',
//         Bcover:'',

//    })
// //    let [bookItems,setBookItems]=useState([])



//     const handleChanges=(event:any)=>{

//         const{value,name}=event.target;
//         // console.log(value);
//         // console.log(name);
        
//         setState((prevdata:any)=>{
//             // console.log(prevdata);

//             if(name==='title')
//             {
//                 return{
//                 Btitle: value,
//                 Bauthor:prevdata.Bauthor,
//                 Brating:prevdata.Brating,
//                 Bprice:prevdata.Bprice,
//                 Bcover:prevdata.Bcover
//                 };
//             }
//             else if(name==='author')
//             {
//                 return{
//                 Btitle: prevdata.Btitle,
//                 Bauthor:value,
//                 Brating:prevdata.Brating,
//                 Bprice:prevdata.Bprice,
//                 Bcover:prevdata.Bcover
//                 }
//             }
//             else if(name==='rating')
//             {
//                 return{
//                 Btitle: prevdata.Btitle,
//                 Bauthor:prevdata.Bauthor,
//                 Brating:value,
//                 Bprice:prevdata.Bprice,
//                 Bcover:prevdata.Bcover,
//                 }

//             }
//             else if(name==='price')
//             {
//                 return{
//                 Btitle: prevdata.Btitle,
//                 Bauthor:prevdata.Bauthor,
//                 Brating:prevdata.Brating,
//                 Bprice:value,
//                 Bcover:prevdata.Bcover
//                 }
//             }
//             else if(name==='cover')
//             {
//                 return{
//                 Btitle: prevdata.Btitle,
//                 Bauthor:prevdata.Bauthor,
//                 Brating:prevdata.Brating,
//                 Bprice:prevdata.Bprice,
//                 Bcover:value
//                 }
//             }
//         })

        


//     }

//     const handleFormData=(e:any)=>{

//         console.log('clicked...');
//         e.preventDefault();
//         // setBookItems(booksData)
//         console.log(booksData);
        
        
      
//     }
   

    
        



//     return (
//         <div className="AddBookForm">
//             <form onSubmit={handleFormData}>
//                     <label>Enter Book Title:</label><br />
//                      <input type="text" name="title" value={booksData.Btitle} onChange={handleChanges} /><br />
//                      <label>Enter Book Auther</label><br />
//                      <input type="text" name="author" value={booksData.Bauthor} onChange={handleChanges} /><br />
//                      <label>Enter Book Rating</label><br />
//                      <input type="text" name="rating" value={booksData.Brating} onChange={handleChanges} /><br />
//                      <label>Enter Book Price</label><br />
//                      <input type="text" name="price"value={booksData.Bprice} onChange={handleChanges} /><br />
//                      <label>Add Book Cover</label><br />
//                      <input type="text" name="cover" value={booksData.Bcover} onChange={handleChanges} /><br /><br />
//                      <button type="submit">Add Book</button>

//             </form>
            
//         </div>
//     )
// }








