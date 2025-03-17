// import React from 'react'
// import Home from './Container/Home'
// const App = () => {
//   return (
//     <div>
//       <Home/>

//     </div>
//   )
// }

// export default App
import React, { useState } from "react";
import Header from "./Components/Hearder";
import FeedbackList from "./Shared/FeedBackList";
import FeedbackStats from "./Shared/FeedBackstats";
import FeedbackForm from "./Shared/Feedbackform";
import FeedbackData from "./Data/Data.json";

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const handleDelete = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  const addFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <div>
      <Header text="Feedback App" />
      <FeedbackForm addFeedback={addFeedback} />
      <FeedbackStats feedback={feedback} />
      <FeedbackList feedback={feedback} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
