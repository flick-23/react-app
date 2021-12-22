import React from "react";
import queryString from "query-string";

const Posts = ({ match, location }) => {
  const { sortBy } = queryString.parse(location.search);
  // console.log(result);
  return (
    <div>
      <h1>Posts</h1>
      Year: , Month:
    </div>
  );
};

export default Posts;
