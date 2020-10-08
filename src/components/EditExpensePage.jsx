import React from "react";

const EditExpensePage = (props) => {
  return <div>This is my edit expense page {props.match.params.id}</div>;
};

export default EditExpensePage;
