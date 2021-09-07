import React from "react";
import classes from "./UserDetails.module.css";
import { useParams } from "react-router";
import useFetchAPI from "../../custom Hooks/useFetchAPI";

export default function UserDetails() {
  const { id } = useParams();
  const url = `http://localhost:5000/users/${id}`;
  const { apiResults, isLoading } = useFetchAPI(url);
  console.log(apiResults);

  return (
    <div className={classes.UserDetailsWrapper}>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h3>
            Username : {apiResults ? apiResults.data.username : "no data found"}
          </h3>
        </div>
      )}
    </div>
  );
}
