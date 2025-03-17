// import { useState } from "react";

// export default function FeedbackForm() {
//   const [rating, setRating] = useState(0);
//   const [message, setMessage] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         minHeight: "100vh",
//         backgroundColor: "#f3f4f6",
//         padding: "16px",
//       }}
//     >
//       <div
//         style={{
//           maxWidth: "400px",
//           width: "100%",
//           backgroundColor: "white",
//           padding: "24px",
//           borderRadius: "12px",
//           boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//           textAlign: "center",
//           color: "#1f2937",
//           border: "1px solid #ddd",
//         }}
//       >
//         <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", color: "#2563eb" }}>
//           Feedback Form
//         </h2>
//         <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
//           <div style={{ textAlign: "left" }}>
//             <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151" }}>Rate us (1-10):</label>
//             <input
//               type="number"
//               min="1"
//               max="10"
//               value={rating}
//               onChange={(e) => setRating(e.target.value)}
//               required
//               style={{
//                 width: "100%",
//                 marginTop: "4px",
//                 padding: "10px",
//                 borderRadius: "8px",
//                 border: "1px solid #d1d5db",
//                 boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
//                 outline: "none",
//               }}
//             />
//           </div>
//           <div style={{ textAlign: "left" }}>
//             <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151" }}>Your Message:</label>
//             <textarea
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               required
//               style={{
//                 width: "100%",
//                 marginTop: "4px",
//                 padding: "10px",
//                 borderRadius: "8px",
//                 border: "1px solid #d1d5db",
//                 boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
//                 outline: "none",
//                 resize: "vertical",
//               }}
//             />
//           </div>
//           <button
//             type="submit"
//             style={{
//               width: "100%",
//               backgroundColor: "#2563eb",
//               color: "white",
//               padding: "12px",
//               borderRadius: "8px",
//               fontWeight: "600",
//               cursor: "pointer",
//               transition: "background 0.3s",
//               border: "none",
//             }}
//             onMouseOver={(e) => (e.target.style.backgroundColor = "#1d4ed8")}
//             onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
//           >
//             Submit Feedback
//           </button>
//         </form>
//         {submitted && (
//           <div
//             style={{
//               marginTop: "24px",
//               padding: "16px",
//               backgroundColor: "#eff6ff",
//               borderRadius: "12px",
//               boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <p style={{ fontSize: "18px", fontWeight: "600", color: "#1e40af" }}>Thank you for your feedback! </p>
//             <p style={{ fontSize: "24px", fontWeight: "bold", color: "#1e3a8a" }}> {rating} / 10</p>
//             <p style={{ marginTop: "8px", color: "#374151", fontStyle: "italic" }}>
//               "{message}"
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";

const FeedbackForm = ({ addFeedback }) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newFeedback = {
      id: Math.floor(Math.random() * 10000),
      text,
      rating: parseInt(rating),
    };

    addFeedback(newFeedback);
    setText("");
    setRating(5);
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <h3>Add Feedback</h3>
      <input
        type="text"
        placeholder="Add Your Feedback"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        {[1, 2, 3, 4, 5,6,7,8,9,10].map((num) => (
          <option key={num} value={num}>{num}</option>
        ))}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

const styles = {
  form: {
    textAlign: "center",
    padding: "10px",
    background: "#ddd",
    borderRadius: "5px",
    marginBottom: "10px",
  },
};

export default FeedbackForm;