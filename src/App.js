import "./styles.css";
import React, { useState } from "react";

const bookLib = {
  novel: [
    {
      name: "A walk to remember",
      author: "By Nicholas Sparks",
      rating: "4.5/5"
    },
    {
      name: "The fault in our stars",
      author: " By John Green",
      rating: "4.4/5"
    },
    { name: "Looking for  Alaska", author: "By John Green", rating: "4/5" }
  ],
  nonfiction: [
    {
      name: "The Accidental Prime Minister",
      author: "By Sanjaya Baru",
      rating: "3.7/5"
    },
    {
      name: "India After Gandhi: The History of the World's Largest Democracy",
      author: "By Ramachandra Guha",
      rating: "4.38/5"
    },
    {
      name: "A Little Book of Happiness",
      author: "By Ruskin Bom",
      rating: "4.4/5"
    }
  ],
  fiction: [
    {
      name: "The Alchemist",
      author: "By Paulo Coelho",
      rating: "3.9/5"
    },
    {
      name: "wish i could tell you",
      author: "By Durjoy Datta",
      rating: "3.8/5"
    }
  ],
  poetry: [
    {
      name: "I hope this reaches her in time",
      author: "By R.H. Sin ",
      rating: "3.9/5"
    },
    {
      name: "Pillow Thoughts ",
      author: "By Courtney Peppernell",
      rating: "4/5"
    },
    {
      name: "Dear Stranger, I Know How You Feel",
      author: "By Ashish Bagrecha",
      rating: "4.5/5"
    }
  ],
  selfhelpbook: [
    {
      name: "Atomic Habits",
      author: "By James Clear",
      rating: "4/5"
    },
    {
      name: "The 7 Habits of Highly Effective People",
      author: "By Stephen Covey",
      rating: "4.1/5"
    },
    {
      name: "15 Secrets Successful People Know About Time Management",
      author: "By Kevin Kruse",
      rating: "4.5/5"
    }
  ]
};
export default function App() {
  const [selectedGenre, setGenre] = useState("novel");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> books to look through📚 </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookLib).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#C7D2FE",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookLib[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                background: "#A5B4FC"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "large" }}> {book.author} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
