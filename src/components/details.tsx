import { Book } from "react-bootstrap-icons";

interface book{
    title:any;
    author:string;
    price:string;
    rating:string;
    cover:string;
}

export default function Details(props:book){
    return(
        <>
      {console.log("props",props)}
            <h1>{props.title}</h1>
            <h1>this is book details page</h1>

        </>



    
    )
}