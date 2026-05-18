import React, { useContext } from 'react'
import FeedbackItem from './FeedbackItem.jsx';
import FeedbackContext from '../Context/FeedbackContext.jsx';

const FeedbackList = () => {

    const {feedback} = useContext(FeedbackContext);
    
    if(!feedback || feedback.length == 0) return <h2 style={{textAlign: "center"}}>No feedback available</h2>

  return (
    <>
        <section>
            {
                feedback?.map(item => <FeedbackItem key={item.id} item={item} />)
            }
        </section>
    </>
  )
}

export default FeedbackList