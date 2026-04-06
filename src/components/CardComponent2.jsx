import React from "react";

const CardComponesnt2 = (props) => {
  return (
    <div style={styles.card}>
      {/* <img src={props.image} alt={props.name} style={styles.image} /> */}
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>

      {/* children content */}
      <div>{props.mobile}</div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "15px",
    width: "200px",
    textAlign: "center",
    margin: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  },
};

export default CardComponesnt2;