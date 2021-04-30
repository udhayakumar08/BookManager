import React from 'react';
import CSS from 'csstype';


let books: any = localStorage.getItem('bookData');
if (!books) {
    books = [];
}
else {
    books = JSON.parse(books);
}
export default function AddBook() {

    function handleFormData(event: any) {
        console.log("clicked...");
        event.preventDefault();
        let title = event.target.title.value;
        console.log(title);
        books.push({
            title: event.target.title.value, author: event.target.author.value,
            price: event.target.price.value, cover: event.target.cover.value, rating: event.target.rating.value
        })
        localStorage.setItem('bookData', JSON.stringify(books));
        alert("book added successfullly")
    }
    return (
        <div className="AddBookForm">
            <form onSubmit={handleFormData}>
                <label >Enter Book Title:</label><br />
                <input type="text" id="title" /><br />
                <label >Enter Book Auther</label><br />
                <input type="text" id="author" /><br />
                <label >Enter Book Rating</label><br />
                <input type="text" id="rating" /><br />
                <label >Enter Book Price</label><br />
                <input type="text" id="price" /><br />
                <label >Add Book Cover</label><br />
                <input type="text" id="cover" /><br /><br />
                <button type="submit">Add Book</button>
            </form>
        </div>
    )
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








