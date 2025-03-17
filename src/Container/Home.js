// import React from 'react'
// import Header from  '../Components/Hearder'
// const Home = () => {
//   return (
//     <div>
//       <Header/>
//     </div>
//   )
// }

// export default Home;
import React, { useState } from 'react';
import Header from '../Components/Hearder';
// import FeedBackList from '../Shared/FeedBackList';
import FeedbackData from '../Data/Data.json';
import FeedBackItem from '../Shared/FeedBackItem'; 
// import Feedbackform from '../Shared/Feedbackform';
const Home = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const handleDelete = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  return (
    <div className='container'>
      <Header text="Feedback UI" bgColor="lightblue" textColor="white" />
      <FeedBackItem feedback={feedback} />
      
      <div style={{ color: 'white' }}>{feedback.length}</div>
      {/* <Feedbackform feedback={feedback} setFeedback={setFeedback} /> */}
      <FeedbackList feedback={feedback} handleDelete={handleDelete} />

    </div>
  );
};

export default Home;

