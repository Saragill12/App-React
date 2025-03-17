// // import React, { useState } from "react";
// // import Card from '../Shared/Card';

// // const FeedbackItem = ({ item, handleDelete }) => {
// //     return (
// //         <div>
// //             <Card>
// //                 <div className="num-display">{item.rating}</div>
// //                 <div className="text-display">{item.text}</div>
// //                 <button onClick={() => handleDelete(item.id)} aria-label="Delete Feedback">
// //                     Click
// //                 </button>
// //             </Card>
// //         </div>
// //     );
// // };

// // export default FeedbackItem;
// import React from "react";
// import Card from '../Shared/Card';

// const FeedBackItem = ({ item, handleDelete }) => {
//     return (
//         <div>
//             <Card>
//                 <div className="num-display">{item.rating}</div>
//                 <div className="text-display">{item.text}</div>
//                 <button onClick={() => handleDelete(item.id)} aria-label="Delete Feedback">
//                     Click
//                 </button>
//             </Card>
//         </div>
//     );
// };

// export default FeedBackItem;
import React from "react";

const FeedbackItem = ({ item, handleDelete }) => {
  return (
    <div style={styles.card}>
      <h3>{item.rating} </h3>
      <p>{item.text}</p>
      <button style={styles.button} onClick={() => handleDelete(item.id)}> Delete</button>
    </div>
  );
};

const styles = {
  card: {
    background: "#f4f4f4",
    radius:"15px",
    padding: "15px",
    margin: "10px",
    borderRadius: "5px",
    textAlign: "center",
  },
  button: {
    background: "blue",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default FeedbackItem; 
