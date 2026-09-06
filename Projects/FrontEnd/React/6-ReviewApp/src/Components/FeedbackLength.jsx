import React, { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext';

const FeedbackLength = () => {

    const {feedback} = useContext(FeedbackContext);

  return (
    <div>FeedbackLength: {feedback.length}</div>
  )
}

export default FeedbackLength