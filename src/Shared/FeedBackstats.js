// import React from "react";

// const FeedbackStats = ({ feedback }) => {
//   const total = feedback.length;
//   const average = total > 0 ? (feedback.reduce((acc, cur) => acc + cur.rating, 0) / total).toFixed(1) : 0;

//   return (
//     <div style={styles.stats}>
//       <h4>Total Feedbacks: {total}</h4>
//       <h4>Average Rating: {average} ⭐</h4>
//     </div>
//   );
// };

// const styles = {
//   stats: {
//     textAlign: "center",
//     padding: "10px",
//     background: "#ddd",
//     marginBottom: "10px",
//   },
// };


// export default FeedbackStats;
import React from "react";

const FeedbackStats = ({ feedback }) => {
  const totalFeedback = feedback.length;
  const averageRating = totalFeedback > 0 ? (feedback.reduce((acc, cur) => acc + cur.rating, 0) / totalFeedback).toFixed(1) : 0;

  return (
    <div style={{ textAlign: "center", padding: "10px" }}>
      <h3 >Total Feedback: {totalFeedback}</h3>
      <h3>Average Rating: {averageRating} </h3>
    </div>
  );
};

export default FeedbackStats;
