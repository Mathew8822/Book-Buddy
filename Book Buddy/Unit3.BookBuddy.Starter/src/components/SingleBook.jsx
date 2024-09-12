import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SingleBook = () => {
  const [book, setBook] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`
        );
        const data = await response.json();
        if (!response.ok) {
          throw new Error("Book not found");
        }
        setBook(data.book);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <>
      {error ? (
        <h1>{error}</h1>
      ) : book ? (
        <>
        <div className="book-card" key={book.id}>
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
        </>
      ) : (
        <h1>...Loading</h1>
      )}
    </>
  );
};

export default SingleBook
