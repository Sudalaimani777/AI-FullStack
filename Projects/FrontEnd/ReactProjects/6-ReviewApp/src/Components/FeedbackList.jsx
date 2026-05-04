import React from 'react'
import FeedbackItem from './FeedbackItem.jsx';

const FeedbackList = ({feedback = [], handleDelete, handleEdit}) => {
    
    if(!feedback || feedback.length == 0) return <h2 style={{textAlign: "center"}}>No feedback available</h2>

  return (
    <>
        <section>
            {
                feedback && feedback.map(item => <FeedbackItem key={item.id} feedback={item} handleDelete={handleDelete} handleEdit={handleEdit}/>)
            }
        </section>
    </>
  )
}

export default FeedbackList