import { useState } from "react";

export default function Account({ token }) {
  const [successMessage, setSuccessMessage] = useState({});
  const [error, setError] = useState(null);

  async function handleClick() {
    try {
      const result = await fetch(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await result.json();
      setSuccessMessage(data);
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
      <h2>Account Details</h2>
      {successMessage && 
      <div>
        <p>ID: {successMessage.id}</p>
        <p>First Name: {successMessage.firstname}</p>
        <p>Last Name: {successMessage.lastname}</p>
        <p>Email: {successMessage.email}</p>
        <p>Books: {successMessage.books}</p>
      </div>
      }
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Yourself</button>
    </>
  );
}
