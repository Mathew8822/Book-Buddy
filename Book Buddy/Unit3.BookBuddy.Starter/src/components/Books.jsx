import { useNavigate } from "react-router-dom";
import { useEffect, useState} from "react";
import { useSelector } from "react-redux";
import SearchBar from './SearchBar';

const Books = () => {
    const [books, setAllBooks] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const searchBook = useSelector(state => state.searchBook)
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchBook.toLowerCase()))

    useEffect(() => {
        async function getData(){
            try {
                const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books")
                const data = await response.json()
                setAllBooks(data.books)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
        getData()
    }, [])
    return (
        <div>{loading ? (<h1>Loading Books</h1>) : (
            <div>
                <SearchBar className="searchBar"/>
                <div className="books">
                {filteredBooks?.map((book)=>{
                    return (
                        <div className="book-card" key={book.id} onClick={()=>navigate(`/books/${book.id}`)}>
                            <img
                            className="book-image"
                            src={book.coverimage}
                            alt={book.title}
                            />
                            <div className="book-details">
                                <h2>Name: {book.title}</h2>
                                <p>Author: {book.author} </p>
                                <p>Available: {book.available}</p>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        )}</div>
    )
}

export default Books
