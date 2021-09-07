import React, { Component } from "react";
import { Link } from "react-router-dom";
import useFetchAPI from "../../custom Hooks/useFetchAPI";
import classes from "./Users.module.css";

export default function Users() {
  const fetchUrl = "http://localhost:5000/users";
  const { apiResults, isLoading } = useFetchAPI(fetchUrl);
  const handleCardClick = () => {};
  return (
    <div className={classes.userPageWrapper}>
      <h1>Welcome to users Page</h1>
      {isLoading ? (
        <h1>Loading....</h1>
      ) : (
        <div className={classes.cardWrapper}>
          {apiResults.data.map((data, pos) => {
            return (
              <Link
                to={`/userdetails/${data._id}`}
                key={pos}
                className={classes.userCard}
              >
                <h3>Username: {data.username}</h3>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
