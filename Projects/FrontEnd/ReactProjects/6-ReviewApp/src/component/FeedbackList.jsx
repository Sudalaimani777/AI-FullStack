import React from 'react'
import FeedbackItem from './FeedbackItem.jsx';

const FeedbackList = ({feedback = [{}]}) => {
    
    if(!feedback || feedback.length == 0) return <h2>No feedback available</h2>

  return (
    <>
        <section>
            {
                feedback && feedback.map(item => <FeedbackItem key={item.id} feedback={item}/>)
            }
        </section>
    </>
  )
}

export default FeedbackList