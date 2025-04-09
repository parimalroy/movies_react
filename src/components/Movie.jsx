import { useState } from "react";
import { movies } from "./data";

const Movie = () => {
  const [movieList, setMovieList] = useState(movies);

  const filterCategoryList = (cat) => {
    setMovieList(movies.filter((item) => item.category === cat));
  };
  return (
    <>
      <div className="container" style={{ textAlign: "center" }}>
        <button
          onClick={() => setMovieList(movies)}
          type="button"
          class="btn btn-outline-primary"
        >
          All
        </button>
        <button
          onClick={() => filterCategoryList("Action")}
          type="button"
          class="btn btn-outline-secondary"
        >
          Action
        </button>
        <button
          onClick={() => filterCategoryList("Thriller")}
          type="button"
          class="btn btn-outline-success"
        >
          Thriller
        </button>
        <button
          onClick={() => filterCategoryList("Animation")}
          type="button"
          class="btn btn-outline-danger"
        >
          Animation
        </button>
        <button
          onClick={() => filterCategoryList("Horror")}
          type="button"
          class="btn btn-outline-warning"
        >
          Horror
        </button>
        <button
          onClick={() => filterCategoryList("Drama")}
          type="button"
          class="btn btn-outline-info"
        >
          Drama
        </button>

        <button
          onClick={() => filterCategoryList("Sci-Fi")}
          type="button"
          class="btn btn-outline-dark"
        >
          Sci-Fi
        </button>
      </div>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          textAlign: "center",
          maxWidth: "1200px",
          margin: "auto",
          marginTop: "1.5rem",
        }}
      >
        {movieList.map((item) => (
          <div
            key={item.id}
            style={{
              maxWidth: "280px",
              textAlign: "center",
            }}
          >
            <div style={{ padding: "10px" }}>
              <img
                src={item.poster_path}
                alt=""
                style={{
                  width: "200px",
                  height: "280px",
                  borderRadius: "20px",
                  border: "1px solid yellow",
                }}
              />
            </div>
            <h5>{item.title}</h5>
            <p>{item.release_date}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default Movie;
