import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import action from "../../assets/images/action.png";
import drama from "../../assets/images/drama.png";
import fantasy from "../../assets/images/fantasy.png";
import fiction from "../../assets/images/fiction.png";
import horror from "../../assets/images/horror.png";
import music from "../../assets/images/music.png";
import romance from "../../assets/images/romance.png";
import thriller from "../../assets/images/thriller.png";
import western from "../../assets/images/western.png";
import BlockCard from "../BlockCard/BlockCard";

import styles from "./MovieGenre.module.css";

const DEFAULT_GENRES = [
  {
      id: "Action",
      color: "#FF5209",
      image: (
          <img
              style={{ width: "160px", height: "120px" }}
              src={action}
              alt="Action genre"
          />
      ),
  },
  {
      id: "Drama",
      color: "#D7A4FF",
      image: <img style={{ width: "160px", height: "120px" }} src={drama} alt="Drama genre" />,
  },
  {
      id: "Fantasy",
      color: " #FF4ADE",
      image: (
          <img style={{ width: "160px", height: "120px" }} src={fantasy} alt="Fantasy genre" />
      ),
  },
  {
      id: "Fiction",
      color: "#6CD061",
      image: (
          <img style={{ width: "160px", height: "120px" }} src={fiction} alt="Fiction genre" />
      ),
  },
  {
      id: "Horror",
      color: "#7358FF",
      image: <img style={{ width: "160px", height: "120px" }} src={horror} alt="Horror genre" />,
  },
  {
      id: "Music",
      color: "#E61E32",
      image: <img style={{ width: "160px", height: "120px" }} src={music} alt="Music genre" />,
  },
  {
      id: "Romance",
      color: "#11B800",
      image: (
          <img style={{ width: "160px", height: "120px" }} src={romance} alt="Romance genre" />
      ),
  },
  {
      id: "Thriller",
      color: "#84C2FF",
      image: (
          <img style={{ width: "160px", height: "120px" }} src={thriller} alt="Thriller genre" />
      ),
  },
  {
      id: "Western",
      color: "#912500",
      image: (
          <img style={{ width: "160px", height: "120px" }} src={western} alt="Western genre" />
      ),
  },
];

export default function MovieGenre() {

  const [categories, setCategories] = useState([]);
  const [lengthError, setLengthError] = useState(false);

  const navigate = useNavigate();

  const removeCategory = (value) => {
    const newCategoriesList = categories.filter((category) => category !== value);

    setCategories(newCategoriesList);
  }

  const handleSubmit = () => {
    if (!categories.length){
      setLengthError(true)
      
      return ;
    }

    localStorage.setItem("genre", JSON.stringify(categories));
    navigate("/");
  }

  return (
    <div className={styles.body}>
      <div className={styles.left}>
        <p className={styles.heading}>Super app</p>
        <p className={styles.subHeading}>
          Chose your entertainment category
        </p>

        <div style={{ marginTop: "10vh"}}>
          {categories.map((category) => (
            <div key={category} style={{ color: "white"}}>
              {category}
              
              <button onClick={() => removeCategory(category)}>X</button>
            </div>
          ))}

          {lengthError ? (
              <p className={styles.error}>Please choose at least 3</p>
          ) : (
              <></>
          )}
        </div>
      </div>

      <div className={styles.right}>
        {DEFAULT_GENRES.map((genre,idx) => (
          <BlockCard 
            genreDetails= {genre}
            key={genre.id}
            categoriesList={categories}
            setCategories={setCategories}
            // removeCategory={removeCategory}
          />
        ))}

        <button className={styles.signUp} onClick={handleSubmit}>
          Next Page
        </button>
      </div>
    </div>
  )
}
