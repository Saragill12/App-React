// import React from 'react'
// import Feedbackitem from './FeedBackItem'


// const Feedbacklist = ({ Feedback, HandleDelte }) => {
//     if (!Feedback || Feedback.length === 0) {
//         return <h1>No FeedBack Found</h1>
//     }

//     return (
//         <div className='feedback-list'>
//             {Feedback.map((item, index) => {
//                 console.log(item);
//                 return (
//                     <div key={item.id}>
//                         <Feedbackitem item={item.id}  HandleDelete={HandleDelte} />
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }

// export default Feedbacklist;
import React from "react";
import FeedbackItem from '../Shared/FeedBackItem';

const FeedbackList = ({ feedback, handleDelete }) => {
  return (
    <div>
      {feedback.length > 0 ? (
        feedback.map((item) => (
          <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
        ))
      ) : (
        <p>No feedback available.</p>
      )}
    </div>
  );
};

export default FeedbackList;
